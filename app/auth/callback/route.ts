import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') || '/dashboard';

  if (code) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    try {
      console.log('Processing auth callback with code:', code);
      
      const { data, error } = await supabase.auth.exchangeCodeForSession(code);
      
      if (error) {
        console.error('Auth callback error:', error);
        return NextResponse.redirect(new URL('/auth/login?error=callback_error', origin));
      }

      if (data.session) {
        console.log('Auth callback successful for user:', data.session.user.email);
        return NextResponse.redirect(new URL(next, origin));
      }
    } catch (error) {
      console.error('Unexpected auth callback error:', error);
      return NextResponse.redirect(new URL('/auth/login?error=unexpected_error', origin));
    }
  }

  // If no code, redirect to login
  return NextResponse.redirect(new URL('/auth/login', origin));
}