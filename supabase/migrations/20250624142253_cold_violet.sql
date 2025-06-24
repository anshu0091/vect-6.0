/*
  # Create wallet balance table for user balance management

  1. New Tables
    - `user_wallets`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles.id)
      - `balance` (decimal, not null, default: 10000.00)
      - `currency` (text, default: 'USD')
      - `created_at` (timestamptz, default: now())
      - `updated_at` (timestamptz, default: now())

  2. Security
    - Enable RLS on `user_wallets` table
    - Add policies for users to manage their own wallet
    
  3. Functions
    - Function to update wallet balance safely
    - Function to initialize wallet for new users
*/

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

-- Enable RLS
ALTER TABLE user_wallets ENABLE ROW LEVEL SECURITY;

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

-- Function to handle wallet creation for new users
CREATE OR REPLACE FUNCTION create_user_wallet()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO user_wallets (user_id, balance)
  VALUES (NEW.id, 10000.00);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create wallet when profile is created
CREATE TRIGGER on_profile_created
  AFTER INSERT ON profiles
  FOR EACH ROW EXECUTE FUNCTION create_user_wallet();

-- Create trigger for updated_at
CREATE TRIGGER update_user_wallets_updated_at 
  BEFORE UPDATE ON user_wallets 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert wallets for existing users (if any)
INSERT INTO user_wallets (user_id, balance)
SELECT id, 10000.00
FROM profiles
WHERE id NOT IN (SELECT user_id FROM user_wallets)
ON CONFLICT (user_id) DO NOTHING;