import React, { useState } from 'react';
import { Database, Plus, Trash2 } from 'lucide-react';

interface DataSource {
  id: string;
  name: string;
  type: 'neo4j' | 'arangodb' | 'tigergraph';
  url: string;
  status: 'connected' | 'disconnected';
}

export function DataSources() {
  const [dataSources, setDataSources] = useState<DataSource[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newSource, setNewSource] = useState({
    name: '',
    type: 'neo4j',
    url: '',
  });

  const handleAddSource = () => {
    const source: DataSource = {
      id: Date.now().toString(),
      name: newSource.name,
      type: newSource.type as DataSource['type'],
      url: newSource.url,
      status: 'connected',
    };
    setDataSources([...dataSources, source]);
    setShowAddModal(false);
    setNewSource({ name: '', type: 'neo4j', url: '' });
  };

  const handleRemoveSource = (id: string) => {
    setDataSources(dataSources.filter(source => source.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900">Data Sources</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus className="h-5 w-5" />
          <span>Add Source</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dataSources.map(source => (
          <div
            key={source.id}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <Database className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-medium text-gray-900">{source.name}</h3>
                  <p className="text-sm text-gray-500">{source.type}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveSource(source.id)}
                className="text-gray-400 hover:text-red-500"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4 break-all">{source.url}</p>
            <div className="flex items-center space-x-2">
              <div
                className={`h-2 w-2 rounded-full ${
                  source.status === 'connected'
                    ? 'bg-green-500'
                    : 'bg-red-500'
                }`}
              />
              <span className="text-sm text-gray-600 capitalize">
                {source.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Add Data Source
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={newSource.name}
                  onChange={e =>
                    setNewSource({ ...newSource, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="My Database"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type
                </label>
                <select
                  value={newSource.type}
                  onChange={e =>
                    setNewSource({ ...newSource, type: e.target.value as any })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="neo4j">Neo4j</option>
                  <option value="arangodb">ArangoDB</option>
                  <option value="tigergraph">TigerGraph</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  URL
                </label>
                <input
                  type="text"
                  value={newSource.url}
                  onChange={e =>
                    setNewSource({ ...newSource, url: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="bolt://localhost:7687"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 text-gray-700 hover:text-gray-900"
              >
                Cancel
              </button>
              <button
                onClick={handleAddSource}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add Source
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}