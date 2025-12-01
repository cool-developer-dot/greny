'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RoleSwitcher from '../../components/RoleSwitcher';

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
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500">Portfolio</p>
                <h2 className="text-2xl font-bold text-gray-900">Your Investments</h2>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-2 text-sm font-semibold text-white transition-all hover:translate-y-[-2px] hover:bg-green-700"
              >
                Browse Projects
                <svg className="h-4 w-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block">
              <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                <table className="min-w-full table-auto">
                  <thead className="bg-gray-50">
                    <tr className="text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                      <th className="px-6 py-4">Project</th>
                      <th className="px-6 py-4">Investment</th>
                      <th className="px-6 py-4">ROI earned</th>
                      <th className="px-6 py-4">Carbon credits</th>
                      <th className="px-6 py-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white text-sm text-gray-700">
                    {investments.map((investment) => (
                      <tr key={investment.id} className="transition-colors hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <Link href={`/projects/${investment.id}`} className="font-semibold text-gray-900 hover:text-green-600">
                            {investment.projectName}
                          </Link>
                        </td>
                        <td className="px-6 py-4">${investment.amount.toLocaleString()}</td>
                        <td className="px-6 py-4 font-semibold text-green-600">${investment.roi.toLocaleString()}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-600">{investment.carbonCredits}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${getStatusColor(investment.status)}`}>
                            {investment.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Cards */}
            <div className="grid gap-4 md:hidden">
              {investments.map((investment) => (
                <div key={investment.id} className="rounded-2xl border border-gray-100 p-4 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">Project</p>
                      <Link href={`/projects/${investment.id}`} className="text-base font-semibold text-gray-900">
                        {investment.projectName}
                      </Link>
                    </div>
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${getStatusColor(investment.status)}`}>
                      {investment.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-xl bg-gray-50 p-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Investment</p>
                      <p className="text-lg font-bold text-gray-900">${investment.amount.toLocaleString()}</p>
                    </div>
                    <div className="rounded-xl bg-green-50/70 p-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-green-600">ROI earned</p>
                      <p className="text-lg font-bold text-green-600">${investment.roi.toLocaleString()}</p>
                    </div>
                    <div className="rounded-xl bg-emerald-50/70 p-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">Carbon credits</p>
                      <p className="text-lg font-bold text-emerald-600">{investment.carbonCredits}</p>
                    </div>
                    <div className="rounded-xl bg-gray-50 p-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Project ID</p>
                      <p className="text-lg font-bold text-gray-900">#{investment.id}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <RoleSwitcher />
    </div>
  );
};

export default DashboardPage;

