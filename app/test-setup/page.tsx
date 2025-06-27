'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { CheckCircle, XCircle, Database, User, CreditCard, Activity, Loader2 } from 'lucide-react';

interface TestResult {
  name: string;
  status: 'pending' | 'success' | 'error';
  message: string;
  details?: any;
}

export default function TestSetup() {
  const [tests, setTests] = useState<TestResult[]>([
    { name: 'Database Connection', status: 'pending', message: 'Testing...' },
    { name: 'Tables Existence', status: 'pending', message: 'Testing...' },
    { name: 'Sample Data', status: 'pending', message: 'Testing...' },
    { name: 'Authentication', status: 'pending', message: 'Testing...' },
    { name: 'API Endpoints', status: 'pending', message: 'Testing...' },
  ]);

  const updateTest = (index: number, status: 'success' | 'error', message: string, details?: any) => {
    setTests(prev => prev.map((test, i) => 
      i === index ? { ...test, status, message, details } : test
    ));
  };

  useEffect(() => {
    runTests();
  }, []);

  const runTests = async () => {
    // Test 1: Database Connection
    try {
      const { data, error } = await supabase.from('carbon_credits').select('count').limit(1);
      if (error) throw error;
      updateTest(0, 'success', 'Connected successfully');
    } catch (error) {
      updateTest(0, 'error', `Connection failed: ${error.message}`);
      return;
    }

    // Test 2: Tables Existence
    try {
      const tables = ['profiles', 'carbon_credits', 'user_carbon_credits', 'transactions', 'user_wallets'];
      const results = await Promise.all(
        tables.map(async (table) => {
          const { data, error } = await supabase.from(table).select('*').limit(1);
          return { table, success: !error, error };
        })
      );
      
      const failedTables = results.filter(r => !r.success);
      if (failedTables.length > 0) {
        updateTest(1, 'error', `Missing tables: ${failedTables.map(t => t.table).join(', ')}`);
      } else {
        updateTest(1, 'success', 'All required tables exist');
      }
    } catch (error) {
      updateTest(1, 'error', `Table check failed: ${error.message}`);
    }

    // Test 3: Sample Data
    try {
      const { data, error } = await supabase
        .from('carbon_credits')
        .select('*')
        .limit(5);
      
      if (error) throw error;
      updateTest(2, 'success', `Found ${data.length} sample carbon credits`, data);
    } catch (error) {
      updateTest(2, 'error', `Sample data check failed: ${error.message}`);
    }

    // Test 4: Authentication
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        updateTest(3, 'success', `Authenticated as: ${session.user.email}`);
      } else {
        updateTest(3, 'error', 'Not authenticated - please sign in to test');
      }
    } catch (error) {
      updateTest(3, 'error', `Auth check failed: ${error.message}`);
    }

    // Test 5: API Endpoints
    try {
      const response = await fetch('/api/health');
      const healthData = await response.json();
      
      if (response.ok) {
        updateTest(4, 'success', 'All API endpoints responding', healthData);
      } else {
        updateTest(4, 'error', `API health check failed: ${healthData.error}`);
      }
    } catch (error) {
      updateTest(4, 'error', `API test failed: ${error.message}`);
    }
  };

  const getStatusIcon = (status: TestResult['status']) => {
    switch (status) {
      case 'pending':
        return <Loader2 className="w-5 h-5 animate-spin text-blue-500" />;
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-red-500" />;
    }
  };

  const getTestIcon = (index: number) => {
    const icons = [Database, Database, CreditCard, User, Activity];
    const Icon = icons[index];
    return <Icon className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              🧪 Vectorium Testing Setup
            </h1>
            <p className="text-gray-600">
              Verifying Supabase integration and system functionality
            </p>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <div className="text-sm text-blue-800">
                <strong>Supabase Instance:</strong> qtmpbiectbgkwwniyovq.supabase.co<br />
                <strong>Test Email:</strong> rudravinake.khatri@gmail.com
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {tests.map((test, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    {getTestIcon(index)}
                    <h3 className="font-semibold">{test.name}</h3>
                  </div>
                  {getStatusIcon(test.status)}
                </div>
                <p className={`text-sm ${
                  test.status === 'success' ? 'text-green-600' :
                  test.status === 'error' ? 'text-red-600' : 'text-gray-600'
                }`}>
                  {test.message}
                </p>
                {test.details && (
                  <details className="mt-2">
                    <summary className="text-xs text-gray-500 cursor-pointer">
                      View Details
                    </summary>
                    <pre className="mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto">
                      {JSON.stringify(test.details, null, 2)}
                    </pre>
                  </details>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-2">Next Steps:</h3>
            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
              <li>Run the migration script in your Supabase SQL editor</li>
              <li>Sign up with the test email: rudravinake.khatri@gmail.com</li>
              <li>Test buying and selling carbon credits</li>
              <li>Verify wallet balance updates in real-time</li>
              <li>Check transaction history and portfolio</li>
            </ol>
          </div>

          <div className="mt-6 flex gap-4">
            <button
              onClick={runTests}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Re-run Tests
            </button>
            <a
              href="/auth/signup"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Test Sign Up
            </a>
            <a
              href="/marketplace"
              className="border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Test Marketplace
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}