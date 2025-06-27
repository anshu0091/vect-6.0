/*
  # Complete schema setup for new Supabase instance

  1. New Tables
    - `profiles` - User profiles linked to auth.users
    - `carbon_credits` - Available carbon credits in marketplace
    - `user_carbon_credits` - User-owned carbon credits
    - `transactions` - All buy/sell transactions
    - `user_wallets` - User wallet balances

  2. Security
    - Enable RLS on all tables
    - Add appropriate policies for each table
    
  3. Functions
    - User profile creation trigger
    - Wallet balance management functions
    - Carbon credit quantity management
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create carbon_credits table
CREATE TABLE IF NOT EXISTS carbon_credits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 0,
  project_name TEXT NOT NULL,
  location TEXT NOT NULL,
  certification_body TEXT NOT NULL,
  vintage TEXT NOT NULL,
  image_url TEXT,
  seller TEXT,
  carbon_reduction DECIMAL(10,2) NOT NULL,
  expiry_date DATE,
  category TEXT NOT NULL CHECK (category IN ('renewable', 'forestry', 'agriculture', 'waste', 'other')),
  status TEXT NOT NULL DEFAULT 'available' CHECK (status IN ('available', 'sold', 'pending')),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create user_carbon_credits table
CREATE TABLE IF NOT EXISTS user_carbon_credits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  credit_id UUID NOT NULL REFERENCES carbon_credits(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL DEFAULT 0,
  purchase_price DECIMAL(10,2) NOT NULL,
  purchased_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, credit_id)
);

-- Create transactions table
CREATE TABLE IF NOT EXISTS transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  credit_id UUID NOT NULL REFERENCES carbon_credits(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('buy', 'sell')),
  quantity INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  status TEXT NOT NULL DEFAULT 'completed' CHECK (status IN ('completed', 'pending', 'failed')),
  tx_hash TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create user_wallets table
CREATE TABLE IF NOT EXISTS user_wallets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  balance DECIMAL(15,2) NOT NULL DEFAULT 10000.00,
  currency TEXT NOT NULL DEFAULT 'USD',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id)
);

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE carbon_credits ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_carbon_credits ENABLE ROW LEVEL SECURITY;
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_wallets ENABLE ROW LEVEL SECURITY;

-- Policies for profiles
CREATE POLICY "Users can read own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Policies for carbon_credits (public read, admin write)
CREATE POLICY "Anyone can view carbon credits"
  ON carbon_credits
  FOR SELECT
  TO authenticated, anon
  USING (true);

CREATE POLICY "Authenticated users can insert carbon credits"
  ON carbon_credits
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Users can update their own carbon credits"
  ON carbon_credits
  FOR UPDATE
  TO authenticated
  USING (seller = auth.jwt() ->> 'email');

-- Policies for user_carbon_credits
CREATE POLICY "Users can view their own carbon credits"
  ON user_carbon_credits
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own carbon credits"
  ON user_carbon_credits
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own carbon credits"
  ON user_carbon_credits
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Policies for transactions
CREATE POLICY "Users can view their own transactions"
  ON transactions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own transactions"
  ON transactions
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Policies for user_wallets
CREATE POLICY "Users can view their own wallet"
  ON user_wallets
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own wallet"
  ON user_wallets
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own wallet"
  ON user_wallets
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Function to handle new user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email)
  VALUES (new.id, new.email);
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to create user wallet
CREATE OR REPLACE FUNCTION create_user_wallet()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO user_wallets (user_id, balance)
  VALUES (NEW.id, 10000.00);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Function to safely update wallet balance
CREATE OR REPLACE FUNCTION update_wallet_balance(
  p_user_id UUID,
  p_amount DECIMAL,
  p_operation TEXT -- 'add' or 'subtract'
)
RETURNS DECIMAL AS $$
DECLARE
  new_balance DECIMAL;
BEGIN
  -- Validate operation
  IF p_operation NOT IN ('add', 'subtract') THEN
    RAISE EXCEPTION 'Invalid operation. Must be add or subtract';
  END IF;

  -- Update balance
  UPDATE user_wallets 
  SET 
    balance = CASE 
      WHEN p_operation = 'add' THEN balance + p_amount
      WHEN p_operation = 'subtract' THEN balance - p_amount
    END,
    updated_at = now()
  WHERE user_id = p_user_id
  RETURNING balance INTO new_balance;
  
  -- Check if wallet exists, if not create it
  IF NOT FOUND THEN
    INSERT INTO user_wallets (user_id, balance)
    VALUES (p_user_id, 
      CASE 
        WHEN p_operation = 'add' THEN 10000.00 + p_amount
        WHEN p_operation = 'subtract' THEN 10000.00 - p_amount
      END
    )
    RETURNING balance INTO new_balance;
  END IF;

  -- Ensure balance doesn't go negative
  IF new_balance < 0 THEN
    RAISE EXCEPTION 'Insufficient funds. Current balance: %', new_balance + p_amount;
  END IF;

  RETURN new_balance;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get or create wallet
CREATE OR REPLACE FUNCTION get_or_create_wallet(p_user_id UUID)
RETURNS DECIMAL AS $$
DECLARE
  wallet_balance DECIMAL;
BEGIN
  SELECT balance INTO wallet_balance
  FROM user_wallets
  WHERE user_id = p_user_id;
  
  IF NOT FOUND THEN
    INSERT INTO user_wallets (user_id, balance)
    VALUES (p_user_id, 10000.00)
    RETURNING balance INTO wallet_balance;
  END IF;
  
  RETURN wallet_balance;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to safely decrement carbon credit quantity
CREATE OR REPLACE FUNCTION decrement_credit_quantity(
  credit_id UUID,
  decrement_amount INTEGER
)
RETURNS VOID AS $$
BEGIN
  UPDATE carbon_credits 
  SET quantity = quantity - decrement_amount,
      updated_at = now()
  WHERE id = credit_id 
    AND quantity >= decrement_amount;
  
  IF NOT FOUND THEN
    RAISE EXCEPTION 'Insufficient credit quantity or credit not found';
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Triggers
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

CREATE TRIGGER on_profile_created
  AFTER INSERT ON profiles
  FOR EACH ROW EXECUTE FUNCTION create_user_wallet();

CREATE TRIGGER update_carbon_credits_updated_at 
  BEFORE UPDATE ON carbon_credits 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_wallets_updated_at 
  BEFORE UPDATE ON user_wallets 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert sample carbon credits data
INSERT INTO carbon_credits (name, description, price, quantity, project_name, location, certification_body, vintage, image_url, seller, carbon_reduction, category) VALUES
('Amazon Rainforest Conservation', 'Carbon credits from protecting the Amazon rainforest from deforestation.', 15.50, 1000, 'Amazon Preservation Initiative', 'Brazil', 'Verra', '2024', 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072&auto=format&fit=crop', 'rudravinake.khatri@gmail.com', 1000, 'forestry'),
('Wind Farm Project', 'Credits generated from a wind farm project reducing fossil fuel dependency.', 12.75, 500, 'Clean Wind Energy', 'Germany', 'Gold Standard', '2023', 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop', 'rudravinake.khatri@gmail.com', 500, 'renewable'),
('Sustainable Agriculture', 'Carbon sequestration through sustainable farming practices.', 18.25, 750, 'Green Farming Initiative', 'India', 'Climate Action Reserve', '2024', 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop', 'rudravinake.khatri@gmail.com', 750, 'agriculture'),
('Methane Capture Project', 'Capturing methane emissions from waste management facilities.', 20.00, 300, 'Waste to Energy', 'United States', 'American Carbon Registry', '2023', 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop', 'rudravinake.khatri@gmail.com', 300, 'waste'),
('Solar Power Plant', 'Credits from a large-scale solar power installation.', 14.50, 1200, 'Solar Energy Solutions', 'Australia', 'Verra', '2024', 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop', 'rudravinake.khatri@gmail.com', 1200, 'renewable'),
('Mangrove Restoration', 'Restoring mangrove ecosystems for carbon sequestration and coastal protection.', 22.75, 600, 'Coastal Ecosystem Restoration', 'Indonesia', 'Plan Vivo', '2023', 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?q=80&w=2071&auto=format&fit=crop', 'rudravinake.khatri@gmail.com', 600, 'forestry'),
('Biogas Plant Initiative', 'Converting organic waste to clean energy and reducing methane emissions.', 16.80, 850, 'Clean Energy from Waste', 'Kenya', 'Gold Standard', '2024', 'https://images.unsplash.com/photo-1497436072909-f5e4be1713a0?q=80&w=2032&auto=format&fit=crop', 'rudravinake.khatri@gmail.com', 850, 'waste'),
('Reforestation Project', 'Large-scale tree planting initiative for carbon sequestration.', 13.25, 2000, 'Green Earth Reforestation', 'Canada', 'Verra', '2023', 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop', 'rudravinake.khatri@gmail.com', 2000, 'forestry'),
('Hydroelectric Power', 'Clean energy generation from renewable water sources.', 11.90, 1500, 'Renewable Hydro Energy', 'Norway', 'Climate Action Reserve', '2024', 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop', 'rudravinake.khatri@gmail.com', 1500, 'renewable'),
('Organic Farming Initiative', 'Sustainable agriculture practices reducing carbon footprint.', 19.50, 400, 'Sustainable Organic Farms', 'Netherlands', 'Plan Vivo', '2023', 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop', 'rudravinake.khatri@gmail.com', 400, 'agriculture');