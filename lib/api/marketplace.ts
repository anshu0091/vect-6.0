import { CarbonCredit } from '@/lib/redux/slices/marketplaceSlice';
import { supabase } from '@/lib/supabase';
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

// Transform API data to match Redux state structure
export const transformApiCreditToRedux = (apiCredit: ApiCarbonCredit): CarbonCredit => ({
  id: apiCredit.id,
  name: apiCredit.name,
  description: apiCredit.description,
  price: apiCredit.price,
  quantity: apiCredit.quantity,
  projectName: apiCredit.project_name,
  location: apiCredit.location,
  certificationBody: apiCredit.certification_body,
  vintage: apiCredit.vintage,
  imageUrl: apiCredit.image_url,
  seller: apiCredit.seller,
  carbonReduction: apiCredit.carbon_reduction,
  expiryDate: apiCredit.expiry_date,
  category: apiCredit.category,
  status: apiCredit.status
});

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
  try {
    console.log('Client: Fetching carbon credits with filters:', filters);
    
    const params = new URLSearchParams();
    
    if (filters?.category) params.append('category', filters.category);
    if (filters?.minPrice) params.append('minPrice', filters.minPrice.toString());
    if (filters?.maxPrice) params.append('maxPrice', filters.maxPrice.toString());
    if (filters?.location) params.append('location', filters.location);
    if (filters?.vintage) params.append('vintage', filters.vintage);

    const url = `/api/carbon-credits${params.toString() ? `?${params.toString()}` : ''}`;
    console.log('Client: Fetching from URL:', url);

    // Set a timeout for the API request
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    console.log('Client: Response status:', response.status);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Client: API response:', result);
    
    if (!result.data) {
      console.warn('Client: No data field in response, falling back to local data');
      throw new Error('No data in API response');
    }

    const transformedData = result.data.map(transformApiCreditToRedux);
    console.log('Client: Successfully fetched', transformedData.length, 'credits from API');
    
    return transformedData;
  } catch (error) {
    console.warn('Client: API request failed, falling back to local data:', error);
    
    // Fallback to local data
    const filteredLocalData = filterLocalCredits(localCarbonCredits, filters || {});
    const transformedLocalData = filteredLocalData.map(transformLocalCreditToRedux);
    
    console.log('Client: Using local fallback data:', transformedLocalData.length, 'credits');
    return transformedLocalData;
  }
};

export const fetchUserCarbonCredits = async () => {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    const accessToken = session?.access_token;
    
    if (!accessToken) {
      throw new Error('No authentication token available');
    }

    const response = await fetch(`/api/user-credits`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const { data } = await response.json();
    return data || [];
  } catch (error) {
    console.error('Error fetching user carbon credits:', error);
    // Return empty array as fallback for user-specific data
    return [];
  }
};

export const fetchUserTransactions = async () => {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    const accessToken = session?.access_token;
    
    if (!accessToken) {
      throw new Error('No authentication token available');
    }

    const response = await fetch(`/api/transactions`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const { data } = await response.json();
    return data || [];
  } catch (error) {
    console.error('Error fetching user transactions:', error);
    // Return empty array as fallback for user-specific data
    return [];
  }
};

export const createTransaction = async (transactionData: {
  creditId: string;
  type: 'buy' | 'sell';
  quantity: number;
  price: number;
}) => {
  try {
    // Get the current session and access token
    const { data: { session } } = await supabase.auth.getSession();
    const accessToken = session?.access_token;

    if (!accessToken) {
      throw new Error('Authentication required');
    }

    const response = await fetch('/api/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify(transactionData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating transaction:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to create transaction');
  }
};