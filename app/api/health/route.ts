import { NextResponse } from 'next/server';

export async function GET() {
  try {
    console.log('Health check: API is running (database not configured)');
    
    return NextResponse.json({
      status: 'healthy',
      database: 'not configured',
      message: 'API is running, using local data for marketplace',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development'
    });
  } catch (error) {
    console.error('Health check: Unexpected error:', error);
    return NextResponse.json(
      { 
        status: 'unhealthy', 
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}