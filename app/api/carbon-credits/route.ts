import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    console.log('API: Carbon credits endpoint called (database not configured)');
    
    // Return empty data since database is not set up yet
    // The frontend will fall back to local data
    return NextResponse.json({ 
      data: [],
      message: 'Database not configured, using local data fallback'
    });

  } catch (error) {
    console.error('API: Unexpected error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log('API: Create carbon credit endpoint called (database not configured)');
    
    const body = await request.json();
    
    // Return mock response since database is not set up yet
    return NextResponse.json({ 
      data: { 
        id: `mock-${Date.now()}`,
        ...body,
        created_at: new Date().toISOString()
      },
      message: 'Database not configured, returning mock response'
    }, { status: 201 });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}