import { CarbonCredit } from '@/lib/redux/slices/marketplaceSlice';
import { localCarbonCredits, filterLocalCredits, LocalCarbonCredit } from '@/lib/data/localCarbonCredits';

export interface ApiCarbonCredit {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  project_name: string;
  location: string;
  certification_body: string;
  vintage: string;
  image_url: string;
  seller: string;
  carbon_reduction: number;
  expiry_date?: string;
  category: 'renewable' | 'forestry' | 'agriculture' | 'waste' | 'other';
  status: 'available' | 'sold' | 'pending';
  created_at: string;
  updated_at: string;
}

// Transform local data to match Redux state structure
export const transformLocalCreditToRedux = (localCredit: LocalCarbonCredit): CarbonCredit => ({
  id: localCredit.id,
  name: localCredit.name,
  description: localCredit.description,
  price: localCredit.price,
  quantity: localCredit.quantity,
  projectName: localCredit.projectName,
  location: localCredit.location,
  certificationBody: localCredit.certificationBody,
  vintage: localCredit.vintage,
  imageUrl: localCredit.imageUrl,
  seller: localCredit.seller,
  carbonReduction: localCredit.carbonReduction,
  expiryDate: localCredit.expiryDate,
  category: localCredit.category,
  status: localCredit.status
});

export const fetchCarbonCredits = async (filters?: {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  location?: string;
  vintage?: string;
}): Promise<CarbonCredit[]> => {
  console.log('Client: Using local data for marketplace (database not configured)');
  
  // Use local data since database is not set up yet
  const filteredLocalData = filterLocalCredits(localCarbonCredits, filters || {});
  const transformedLocalData = filteredLocalData.map(transformLocalCreditToRedux);
  
  console.log('Client: Using local data:', transformedLocalData.length, 'credits');
  return transformedLocalData;
};

export const fetchUserCarbonCredits = async () => {
  console.log('Client: Using empty array for user credits (database not configured)');
  // Return empty array since database is not set up yet
  return [];
};

export const fetchUserTransactions = async () => {
  console.log('Client: Using empty array for user transactions (database not configured)');
  // Return empty array since database is not set up yet
  return [];
};

export const createTransaction = async (transactionData: {
  creditId: string;
  type: 'buy' | 'sell';
  quantity: number;
  price: number;
}) => {
  console.log('Client: Simulating transaction (database not configured)', transactionData);
  
  // Simulate transaction creation for now
  const mockTransaction = {
    id: `mock-${Date.now()}`,
    ...transactionData,
    total_amount: transactionData.quantity * transactionData.price,
    status: 'completed',
    created_at: new Date().toISOString()
  };
  
  return mockTransaction;
};