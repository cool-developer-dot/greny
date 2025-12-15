'use client';

import React from 'react';
import { ProtectedRoute } from '../../components/ProtectedRoute';
import CorporateSidebar from './components/CorporateSidebar';
import CorporateTopbar from './components/CorporateTopbar';

export default function CorporateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute allowedRoles={['corporate']}>
      <div className="min-h-screen bg-gray-50">
        <CorporateSidebar />
        <CorporateTopbar />
        <main className="ml-64 mt-16 p-6">
          {children}
        </main>
      </div>
    </ProtectedRoute>
  );
}

