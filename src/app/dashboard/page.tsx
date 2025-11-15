'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Investment {
  id: string;
  projectName: string;
  amount: number;
  roi: number;
  carbonCredits: number;
  status: 'active' | 'pending' | 'completed';
}

const DashboardPage: React.FC = () => {
  // Placeholder data
  const totalInvested = 5500;
  const totalROI = 687.50;
  const totalCarbonCredits = 142.75;

  const investments: Investment[] = [
    {
      id: '1',
      projectName: 'Amazon Rainforest Reforestation',
      amount: 1000,
      roi: 125,
      carbonCredits: 25,
      status: 'active'
    },
    {
      id: '2',
      projectName: 'Solar Energy Farm - California',
      amount: 2500,
      roi: 375,
      carbonCredits: 80,
      status: 'active'
    },
    {
      id: '3',
      projectName: 'Wind Power Initiative - Texas',
      amount: 1500,
      roi: 213,
      carbonCredits: 60,
      status: 'active'
    },
    {
      id: '6',
      projectName: 'Electric Vehicle Charging Network',
      amount: 500,
      roi: 82.50,
      carbonCredits: 14,
      status: 'pending'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'completed':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      <main className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="mb-2 text-4xl font-bold text-gray-900 md:text-5xl">
              Investment Dashboard
            </h1>
            <p className="text-lg text-gray-600">
              Track your portfolio performance and environmental impact
            </p>
          </div>

          {/* Stats Cards */}
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Total Invested */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 to-green-600 p-8 text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute right-0 top-0 -mr-8 -mt-8 h-32 w-32 rounded-full bg-white/10"></div>
              <div className="relative">
                <div className="mb-2 flex items-center gap-2">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h3 className="text-lg font-semibold">Total Invested</h3>
                </div>
                <p className="text-4xl font-bold">${totalInvested.toLocaleString()}</p>
                <p className="mt-2 text-sm text-green-100">Across {investments.length} projects</p>
              </div>
            </div>

            {/* Total ROI */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute right-0 top-0 -mr-8 -mt-8 h-32 w-32 rounded-full bg-white/10"></div>
              <div className="relative">
                <div className="mb-2 flex items-center gap-2">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                  <h3 className="text-lg font-semibold">Total ROI Earned</h3>
                </div>
                <p className="text-4xl font-bold">${totalROI.toLocaleString()}</p>
                <p className="mt-2 text-sm text-blue-100">+{((totalROI / totalInvested) * 100).toFixed(1)}% average return</p>
              </div>
            </div>

            {/* Carbon Credits */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 p-8 text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute right-0 top-0 -mr-8 -mt-8 h-32 w-32 rounded-full bg-white/10"></div>
              <div className="relative">
                <div className="mb-2 flex items-center gap-2">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h3 className="text-lg font-semibold">Carbon Credits</h3>
                </div>
                <p className="text-4xl font-bold">{totalCarbonCredits.toLocaleString()}</p>
                <p className="mt-2 text-sm text-emerald-100">Equivalent to {(totalCarbonCredits * 0.5).toFixed(0)} tons CO₂</p>
              </div>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Portfolio Performance</h2>
            <div className="relative h-64 w-full">
              <svg viewBox="0 0 800 250" className="h-full w-full" preserveAspectRatio="none">
                {/* Grid Lines */}
                <line x1="0" y1="0" x2="800" y2="0" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="0" y1="62.5" x2="800" y2="62.5" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="0" y1="125" x2="800" y2="125" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="0" y1="187.5" x2="800" y2="187.5" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="0" y1="250" x2="800" y2="250" stroke="#e5e7eb" strokeWidth="1" />
                
                {/* Performance Line */}
                <polyline
                  points="0,200 100,180 200,170 300,150 400,140 500,130 600,110 700,90 800,70"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                {/* Area under curve */}
                <polygon
                  points="0,200 100,180 200,170 300,150 400,140 500,130 600,110 700,90 800,70 800,250 0,250"
                  fill="url(#areaGradient)"
                  opacity="0.3"
                />
                
                {/* Gradient Definitions */}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                  <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* X-Axis Labels */}
              <div className="mt-4 flex justify-between text-xs text-gray-500">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
              </div>
            </div>
          </div>

          {/* Investment List */}
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Your Investments</h2>
              <Link
                href="/projects"
                className="rounded-lg bg-green-600 px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-green-700"
              >
                Browse Projects
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="pb-4 text-left text-sm font-semibold text-gray-600">Project</th>
                    <th className="pb-4 text-left text-sm font-semibold text-gray-600">Investment</th>
                    <th className="pb-4 text-left text-sm font-semibold text-gray-600">ROI Earned</th>
                    <th className="pb-4 text-left text-sm font-semibold text-gray-600">Carbon Credits</th>
                    <th className="pb-4 text-left text-sm font-semibold text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {investments.map((investment) => (
                    <tr key={investment.id} className="border-b border-gray-100 transition-colors hover:bg-gray-50">
                      <td className="py-4">
                        <Link
                          href={`/projects/${investment.id}`}
                          className="font-medium text-gray-900 hover:text-green-600"
                        >
                          {investment.projectName}
                        </Link>
                      </td>
                      <td className="py-4 text-gray-700">${investment.amount.toLocaleString()}</td>
                      <td className="py-4 font-semibold text-green-600">${investment.roi.toLocaleString()}</td>
                      <td className="py-4 font-semibold text-emerald-600">{investment.carbonCredits}</td>
                      <td className="py-4">
                        <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(investment.status)}`}>
                          {investment.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DashboardPage;

