'use client';

import React, { useState } from 'react';

interface Campaign {
  id: string;
  ngoName: string;
  title: string;
  description: string;
  goal: number;
  raised: number;
  donors: number;
  status: 'active' | 'completed' | 'upcoming';
  endDate: string;
  category: string;
}

const CampaignsPage: React.FC = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  // Mock campaigns data
  const [campaigns] = useState<Campaign[]>([
    {
      id: '1',
      ngoName: 'Green Earth Foundation',
      title: 'Reforestation Project - Amazon',
      description: 'Planting 10,000 trees in the Amazon rainforest to combat deforestation',
      goal: 50000,
      raised: 37500,
      donors: 245,
      status: 'active',
      endDate: '2024-12-31',
      category: 'Environment'
    },
    {
      id: '2',
      ngoName: 'Ocean Cleanup Initiative',
      title: 'Plastic Waste Removal',
      description: 'Removing plastic waste from oceans and coastal areas',
      goal: 75000,
      raised: 68000,
      donors: 512,
      status: 'active',
      endDate: '2025-01-15',
      category: 'Marine Conservation'
    },
    {
      id: '3',
      ngoName: 'Wildlife Protection Society',
      title: 'Endangered Species Protection',
      description: 'Protecting endangered species through habitat conservation',
      goal: 100000,
      raised: 100000,
      donors: 789,
      status: 'completed',
      endDate: '2024-11-30',
      category: 'Wildlife'
    },
    {
      id: '4',
      ngoName: 'Clean Water Alliance',
      title: 'Water Well Installation',
      description: 'Installing clean water wells in rural communities',
      goal: 60000,
      raised: 0,
      donors: 0,
      status: 'upcoming',
      endDate: '2025-02-01',
      category: 'Water'
    }
  ]);

  const getStatusBadge = (status: string) => {
    const styles = {
      active: 'bg-green-100 text-green-800',
      completed: 'bg-blue-100 text-blue-800',
      upcoming: 'bg-yellow-100 text-yellow-800'
    };
    return styles[status as keyof typeof styles] || styles.active;
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Environment': 'bg-emerald-100 text-emerald-800',
      'Marine Conservation': 'bg-blue-100 text-blue-800',
      'Wildlife': 'bg-orange-100 text-orange-800',
      'Water': 'bg-cyan-100 text-cyan-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Campaigns & Donations</h1>
          <p className="text-gray-600">Support environmental initiatives and track your contributions</p>
        </div>
        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-sm"
        >
          {showCreateForm ? 'Cancel' : 'Create Campaign'}
        </button>
      </div>

      {/* Create Campaign Form */}
      {showCreateForm && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Create New Campaign</h2>
          <form onSubmit={(e) => { e.preventDefault(); alert('Campaign created! (UI only)'); setShowCreateForm(false); }} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  NGO Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter NGO name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Campaign Title
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter campaign title"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Goal Amount ($)
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter goal amount"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  End Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={4}
                  placeholder="Enter campaign description"
                  required
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-sm"
              >
                Create Campaign
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Campaigns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((campaign) => {
          const progress = (campaign.raised / campaign.goal) * 100;
          return (
            <div key={campaign.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${getCategoryColor(campaign.category)} mb-2`}>
                      {campaign.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">{campaign.title}</h3>
                  </div>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadge(campaign.status)}`}>
                    {campaign.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">NGO:</span> {campaign.ngoName}
                </p>
                <p className="text-sm text-gray-600">{campaign.description}</p>
              </div>

              {/* Progress */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Progress</span>
                    <span className="text-sm font-semibold text-gray-900">
                      {progress.toFixed(0)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full ${
                        campaign.status === 'completed'
                          ? 'bg-gradient-to-r from-blue-500 to-indigo-500'
                          : 'bg-gradient-to-r from-green-500 to-emerald-500'
                      }`}
                      style={{ width: `${Math.min(progress, 100)}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Raised</p>
                    <p className="text-lg font-bold text-gray-900">
                      ${campaign.raised.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Goal</p>
                    <p className="text-lg font-bold text-gray-900">
                      ${campaign.goal.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Donors</p>
                    <p className="text-lg font-bold text-gray-900">
                      {campaign.donors}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-200">
                  <span>Ends: {campaign.endDate}</span>
                  {campaign.status === 'active' && (
                    <button className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all text-sm font-medium">
                      Donate
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary Stats */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-6 text-white">
        <h2 className="text-xl font-semibold mb-4">Total Contributions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm opacity-90 mb-1">Total Donated</p>
            <p className="text-3xl font-bold">$205,500</p>
          </div>
          <div>
            <p className="text-sm opacity-90 mb-1">Active Campaigns</p>
            <p className="text-3xl font-bold">2</p>
          </div>
          <div>
            <p className="text-sm opacity-90 mb-1">Total Donors</p>
            <p className="text-3xl font-bold">1,546</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignsPage;

