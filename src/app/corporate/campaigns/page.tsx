'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface Campaign {
  id: string;
  title: string;
  description: string;
  ngoName: string;
  category: string;
  targetAmount: number;
  raisedAmount: number;
  startDate: string;
  endDate: string;
  status: 'active' | 'completed' | 'upcoming';
  imageUrl?: string;
}

export default function CampaignsPage() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ngoName: '',
    category: '',
    targetAmount: '',
    startDate: '',
    endDate: ''
  });

  // Mock campaigns data
  const mockCampaigns: Campaign[] = [
    {
      id: '1',
      title: 'Ocean Cleanup Initiative',
      description: 'Support our mission to remove plastic waste from the world\'s oceans and protect marine ecosystems.',
      ngoName: 'Ocean Guardians Foundation',
      category: 'Environmental',
      targetAmount: 50000,
      raisedAmount: 37500,
      startDate: '2024-01-15',
      endDate: '2024-03-15',
      status: 'active'
    },
    {
      id: '2',
      title: 'Reforestation Project',
      description: 'Help us plant 10,000 trees in deforested areas to combat climate change and restore biodiversity.',
      ngoName: 'Green Earth Alliance',
      category: 'Environmental',
      targetAmount: 75000,
      raisedAmount: 62000,
      startDate: '2024-01-10',
      endDate: '2024-04-10',
      status: 'active'
    },
    {
      id: '3',
      title: 'Clean Water Access',
      description: 'Provide clean drinking water to 5,000 families in rural communities across Africa.',
      ngoName: 'Water for Life',
      category: 'Social',
      targetAmount: 100000,
      raisedAmount: 100000,
      startDate: '2023-11-01',
      endDate: '2024-01-31',
      status: 'completed'
    },
    {
      id: '4',
      title: 'Wildlife Conservation',
      description: 'Protect endangered species and their habitats through conservation programs and anti-poaching efforts.',
      ngoName: 'Wildlife Protection Society',
      category: 'Environmental',
      targetAmount: 120000,
      raisedAmount: 45000,
      startDate: '2024-02-01',
      endDate: '2024-05-01',
      status: 'active'
    },
    {
      id: '5',
      title: 'Education for All',
      description: 'Build schools and provide educational resources to underserved communities worldwide.',
      ngoName: 'Global Education Fund',
      category: 'Education',
      targetAmount: 200000,
      raisedAmount: 185000,
      startDate: '2023-12-01',
      endDate: '2024-02-29',
      status: 'active'
    },
    {
      id: '6',
      title: 'Renewable Energy Transition',
      description: 'Install solar panels in rural communities to provide clean, sustainable energy access.',
      ngoName: 'Solar Future Initiative',
      category: 'Environmental',
      targetAmount: 150000,
      raisedAmount: 0,
      startDate: '2024-03-01',
      endDate: '2024-06-01',
      status: 'upcoming'
    }
  ];

  const categories = ['Environmental', 'Social', 'Education', 'Health', 'Other'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCreateModal(false);
    // No backend logic
  };

  const getProgressPercentage = (raised: number, target: number) => {
    return Math.min((raised / target) * 100, 100);
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      active: 'bg-green-100 text-green-700 border-green-300',
      completed: 'bg-blue-100 text-blue-700 border-blue-300',
      upcoming: 'bg-purple-100 text-purple-700 border-purple-300'
    };

    const labels = {
      active: 'Active',
      completed: 'Completed',
      upcoming: 'Upcoming'
    };

    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${styles[status as keyof typeof styles]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  // Calculate statistics
  const totalRaised = mockCampaigns.reduce((sum, campaign) => sum + campaign.raisedAmount, 0);
  const totalTarget = mockCampaigns.reduce((sum, campaign) => sum + campaign.targetAmount, 0);
  const activeCampaigns = mockCampaigns.filter(c => c.status === 'active').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 p-6 md:p-8 lg:p-10">
      {/* Page Header */}
      <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
            Campaign Management
          </h1>
          <p className="text-lg text-gray-600">
            Discover and support impactful environmental and social campaigns
          </p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 4v16m8-8H4"></path>
          </svg>
          <span>Create Campaign</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl shadow-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <span className="text-3xl">💰</span>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-90">Total Raised</div>
              <div className="text-3xl font-bold">${(totalRaised / 1000).toFixed(0)}K</div>
              <div className="text-sm">across all campaigns</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <span className="text-3xl">🎯</span>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-90">Target Goal</div>
              <div className="text-3xl font-bold">${(totalTarget / 1000).toFixed(0)}K</div>
              <div className="text-sm">total campaign targets</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <span className="text-3xl">🚀</span>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-90">Active Campaigns</div>
              <div className="text-3xl font-bold">{activeCampaigns}</div>
              <div className="text-sm">currently running</div>
            </div>
          </div>
        </div>
      </div>

      {/* Campaign Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCampaigns.map((campaign) => {
          const progress = getProgressPercentage(campaign.raisedAmount, campaign.targetAmount);
          
          return (
            <div
              key={campaign.id}
              className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Card Header with Gradient */}
              <div className="h-32 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-4 right-4">
                  {getStatusBadge(campaign.status)}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white">
                    <div className="text-xs opacity-90 mb-1">NGO Partner</div>
                    <div className="font-bold text-lg">{campaign.ngoName}</div>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold bg-purple-100 text-purple-700 mb-2">
                    {campaign.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 mt-2">{campaign.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{campaign.description}</p>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-gray-700">Progress</span>
                    <span className="text-xs font-bold text-purple-600">{progress.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500 relative overflow-hidden"
                      style={{ width: `${progress}%` }}
                    >
                      <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Amount Raised */}
                <div className="grid grid-cols-2 gap-4 mb-4 pt-4 border-t border-gray-200">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Raised</div>
                    <div className="text-xl font-bold text-gray-900">${(campaign.raisedAmount / 1000).toFixed(1)}K</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Target</div>
                    <div className="text-xl font-bold text-gray-700">${(campaign.targetAmount / 1000).toFixed(0)}K</div>
                  </div>
                </div>

                {/* Dates */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-1">
                    <span>📅</span>
                    <span>Start: {new Date(campaign.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>📅</span>
                    <span>End: {new Date(campaign.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <Link
                  href={`/corporate/campaigns/${campaign.id}`}
                  className="block w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg transition-all hover:scale-105 text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Create Campaign Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Create New Campaign</h2>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Campaign Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="e.g., Ocean Cleanup Initiative"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all bg-gray-50 focus:bg-white"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe your campaign and its impact..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    NGO Name *
                  </label>
                  <input
                    type="text"
                    name="ngoName"
                    value={formData.ngoName}
                    onChange={handleInputChange}
                    placeholder="e.g., Ocean Guardians Foundation"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all bg-gray-50 focus:bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Select category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Target Amount ($) *
                  </label>
                  <input
                    type="number"
                    name="targetAmount"
                    value={formData.targetAmount}
                    onChange={handleInputChange}
                    placeholder="50000"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all bg-gray-50 focus:bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Start Date *
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all bg-gray-50 focus:bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    End Date *
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all bg-gray-50 focus:bg-white"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-4 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-2"
                >
                  <span>Create Campaign</span>
                  <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 4v16m8-8H4"></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

