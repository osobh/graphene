import React, { useState } from 'react';
import { Play, Save } from 'lucide-react';

interface QueryResult {
  id: string;
  properties: Record<string, any>;
}

export function QueryBuilder() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<QueryResult[]>([]);
  const [savedQueries, setSavedQueries] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleRunQuery = async () => {
    setIsLoading(true);
    // Simulated query execution
    setTimeout(() => {
      setResults([
        {
          id: '1',
          properties: {
            name: 'Example Node',
            type: 'Person',
            age: 30,
          },
        },
      ]);
      setIsLoading(false);
    }, 1000);
  };

  const handleSaveQuery = () => {
    if (query && !savedQueries.includes(query)) {
      setSavedQueries([...savedQueries, query]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900">Query Builder</h2>
        <div className="flex space-x-3">
          <button
            onClick={handleSaveQuery}
            className="flex items-center space-x-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <Save className="h-5 w-5" />
            <span>Save Query</span>
          </button>
          <button
            onClick={handleRunQuery}
            disabled={!query || isLoading}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            <Play className="h-5 w-5" />
            <span>{isLoading ? 'Running...' : 'Run Query'}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-medium text-gray-900 mb-3">Saved Queries</h3>
            <div className="space-y-2">
              {savedQueries.map((savedQuery, index) => (
                <button
                  key={index}
                  onClick={() => setQuery(savedQuery)}
                  className="w-full text-left p-2 text-sm text-gray-600 hover:bg-gray-50 rounded"
                >
                  {savedQuery.length > 30
                    ? `${savedQuery.substring(0, 30)}...`
                    : savedQuery}
                </button>
              ))}
              {savedQueries.length === 0 && (
                <p className="text-sm text-gray-500">No saved queries</p>
              )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-4">
              <textarea
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Enter your Cypher query here..."
                className="w-full h-40 p-4 text-sm font-mono bg-gray-50 border-0 focus:ring-0"
              />
            </div>
          </div>

          {results.length > 0 && (
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-medium text-gray-900 mb-3">Results</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ID
                      </th>
                      {Object.keys(results[0].properties).map(key => (
                        <th
                          key={key}
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {key}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {results.map(result => (
                      <tr key={result.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {result.id}
                        </td>
                        {Object.values(result.properties).map((value, index) => (
                          <td
                            key={index}
                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                          >
                            {JSON.stringify(value)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}