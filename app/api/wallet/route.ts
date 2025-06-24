import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export async function GET(request: NextRequest) {
  try {
    // Extract the access token from the Authorization header
    const authHeader = request.headers.get('authorization');
    const accessToken = authHeader?.split(' ')[1];

    // Create Supabase client with the user's access token
    const supabase = createClient(
      supabaseUrl,
      supabaseAnonKey,
      { global: { headers: { Authorization: `Bearer ${accessToken}` } } }
    );

    // Get authenticated user
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    // Get or create wallet
    const { data: walletData, error: walletError } = await supabase
      .rpc('get_or_create_wallet', { p_user_id: user.id });

    if (walletError) {
      console.error('Error getting wallet:', walletError);
      return NextResponse.json(
        { error: 'Failed to get wallet', details: walletError.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ balance: walletData });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Extract the access token from the Authorization header
    const authHeader = request.headers.get('authorization');
    const accessToken = authHeader?.split(' ')[1];

    // Create Supabase client with the user's access token
    const supabase = createClient(
      supabaseUrl,
      supabaseAnonKey,
      { global: { headers: { Authorization: `Bearer ${accessToken}` } } }
    );

    const body = await request.json();
    const { amount, operation } = body;

    // Get authenticated user
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    if (!amount || !operation) {
      return NextResponse.json(
        { error: 'Missing required fields: amount, operation' },
        { status: 400 }
      );
    }

    // Update wallet balance
    const { data: newBalance, error: updateError } = await supabase
      .rpc('update_wallet_balance', {
        p_user_id: user.id,
        p_amount: amount,
        p_operation: operation
      });

    if (updateError) {
      console.error('Error updating wallet balance:', updateError);
      return NextResponse.json(
        { error: 'Failed to update wallet balance', details: updateError.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ balance: newBalance });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}