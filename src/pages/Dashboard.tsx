import React from 'react';
import { useAuth } from '../contexts/AuthContext';

export function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Welcome back, {user?.email}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Dashboard content will be added in the next iteration */}
      </div>
    </div>
  );
}