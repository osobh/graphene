import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Search, MessageSquare } from 'lucide-react';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Database className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold">Graphene</span>
            </div>
            <div className="space-x-4">
              <Link
                to="/login"
                className="px-4 py-2 text-gray-700 hover:text-gray-900"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </nav>

        <main className="py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Visualize Your Graph Data with Intelligence
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Graphene brings your graph-based datasets to life with interactive
              visualizations, AI-powered insights, and an intuitive query builder.
            </p>
            <Link
              to="/register"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started Free
            </Link>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-6">
              <Database className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Multiple Data Sources
              </h3>
              <p className="text-gray-600">
                Connect to Neo4j, ArangoDB, TigerGraph, or import your custom
                datasets.
              </p>
            </div>
            <div className="text-center p-6">
              <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Visual Query Builder
              </h3>
              <p className="text-gray-600">
                Build complex queries with an intuitive drag-and-drop interface.
              </p>
            </div>
            <div className="text-center p-6">
              <MessageSquare className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                AI-Powered Assistant
              </h3>
              <p className="text-gray-600">
                Get intelligent insights and query suggestions from our AI
                assistant.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}