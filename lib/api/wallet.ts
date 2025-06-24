import { supabase } from '@/lib/supabase';

export const fetchWalletBalance = async (): Promise<number> => {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    const accessToken = session?.access_token;

    const response = await fetch('/api/wallet', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const { balance } = await response.json();
    return balance;
  } catch (error) {
    console.error('Error fetching wallet balance:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to fetch wallet balance');
  }
};

export const updateWalletBalance = async (amount: number, operation: 'add' | 'subtract'): Promise<number> => {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    const accessToken = session?.access_token;

    const response = await fetch('/api/wallet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
      },
      body: JSON.stringify({ amount, operation }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const { balance } = await response.json();
    return balance;
  } catch (error) {
    console.error('Error updating wallet balance:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to update wallet balance');
  }
};