import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Database, Search, MessageSquare, Settings } from 'lucide-react';

export function Sidebar() {
  const navItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: Database, label: 'Data Sources', path: '/data-sources' },
    { icon: Search, label: 'Query Builder', path: '/query-builder' },
    { icon: MessageSquare, label: 'AI Assistant', path: '/ai-assistant' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <aside className="bg-white dark:bg-gray-800 w-64 min-h-screen shadow-sm">
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-8">
          <Database className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">Graphene</span>
        </div>
        <nav className="space-y-1">
          {navItems.map(({ icon: Icon, label, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`
              }
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}