'use client';

import React from 'react';
import StatCard from '../components/StatCard';
import ChartPlaceholder from '../components/ChartPlaceholder';

const CorporateDashboard: React.FC = () => {
  // Mock data
  const stats = {
    totalEmissions: '2,450',
    emissionsUnit: 'tCO₂e',
    emissionsChange: '+5.2%',
    emissionsChangeType: 'negative' as const,
    offsetPurchased: '1,850',
    offsetUnit: 'tCO₂e',
    offsetChange: '+12.3%',
    offsetChangeType: 'positive' as const,
    totalDonations: '$125,000',
    donationsChange: '+8.7%',
    donationsChangeType: 'positive' as const,
    volunteerHours: '3,240',
    hoursChange: '+15.2%',
    hoursChangeType: 'positive' as const,
    activeCampaigns: '12',
    campaignsChange: '+2',
    campaignsChangeType: 'positive' as const,
    participatingEmployees: '342',
    employeesChange: '+28',
    employeesChangeType: 'positive' as const,
    sustainabilityScore: '85%',
    scoreChange: '+3%',
    scoreChangeType: 'positive' as const
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Corporate ESG Dashboard</h1>
        <p className="text-gray-600">Monitor your sustainability metrics and ESG performance</p>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total CO₂ Emissions"
          value={`${stats.totalEmissions}`}
          subtitle={stats.emissionsUnit}
          change={stats.emissionsChange}
          changeType={stats.emissionsChangeType}
          icon={
            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2h2.945M15 10.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM20 12a8 8 0 11-16 0 8 8 0 0116 0z" />
            </svg>
          }
        />
        <StatCard
          title="CO₂ Offset Purchased"
          value={`${stats.offsetPurchased}`}
          subtitle={stats.offsetUnit}
          change={stats.offsetChange}
          changeType={stats.offsetChangeType}
          icon={
            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
        <StatCard
          title="Total Donations"
          value={stats.totalDonations}
          change={stats.donationsChange}
          changeType={stats.donationsChangeType}
          icon={
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
        <StatCard
          title="Volunteer Hours"
          value={stats.volunteerHours}
          subtitle="This month"
          change={stats.hoursChange}
          changeType={stats.hoursChangeType}
          icon={
            <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
        <StatCard
          title="Active Campaigns"
          value={stats.activeCampaigns}
          change={stats.campaignsChange}
          changeType={stats.campaignsChangeType}
          icon={
            <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
          }
        />
        <StatCard
          title="Participating Employees"
          value={stats.participatingEmployees}
          change={stats.employeesChange}
          changeType={stats.employeesChangeType}
          icon={
            <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          }
        />
        <StatCard
          title="Sustainability Score"
          value={stats.sustainabilityScore}
          change={stats.scoreChange}
          changeType={stats.scoreChangeType}
          icon={
            <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          }
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <ChartPlaceholder
          title="Monthly Emissions Trend"
          height="h-80"
          description="Track your CO₂ emissions over time"
        />
        <ChartPlaceholder
          title="Donations vs Offsets"
          height="h-80"
          description="Compare donation amounts with carbon offset purchases"
        />
        <ChartPlaceholder
          title="Volunteer Participation"
          height="h-80"
          description="Employee engagement in volunteer activities"
        />
        <ChartPlaceholder
          title="ESG Score Breakdown"
          height="h-80"
          description="Detailed view of your sustainability metrics"
        />
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-left">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-900">Record Emissions</p>
              <p className="text-sm text-gray-500">Add new emission data</p>
            </div>
          </button>
          <button className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors text-left">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-900">Create Campaign</p>
              <p className="text-sm text-gray-500">Launch new initiative</p>
            </div>
          </button>
          <button className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors text-left">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-900">Generate Report</p>
              <p className="text-sm text-gray-500">Create ESG report</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CorporateDashboard;

