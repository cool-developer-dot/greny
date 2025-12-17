'use client';

import React, { useState } from 'react';

interface ESGReport {
  id: string;
  title: string;
  period: string;
  generatedDate: string;
  status: 'draft' | 'published' | 'archived';
  type: 'Annual' | 'Quarterly' | 'Monthly';
  emissions: number;
  offsetPurchased: number;
  donations: number;
  volunteerHours: number;
}

export default function ReportsPage() {
  const [showGenerateModal, setShowGenerateModal] = useState(false);
  const [selectedReport, setSelectedReport] = useState<ESGReport | null>(null);
  const [formData, setFormData] = useState({
    reportType: 'Annual',
    period: '',
    includeEmissions: true,
    includeDonations: true,
    includeVolunteers: true
  });

  // Mock ESG reports data
  const mockReports: ESGReport[] = [
    {
      id: '1',
      title: 'Annual ESG Report 2023',
      period: '2023',
      generatedDate: '2024-01-15',
      status: 'published',
      type: 'Annual',
      emissions: 1250.5,
      offsetPurchased: 2000,
      donations: 500000,
      volunteerHours: 2500
    },
    {
      id: '2',
      title: 'Q4 ESG Report 2023',
      period: 'Q4 2023',
      generatedDate: '2024-01-05',
      status: 'published',
      type: 'Quarterly',
      emissions: 320.8,
      offsetPurchased: 500,
      donations: 125000,
      volunteerHours: 650
    },
    {
      id: '3',
      title: 'Q3 ESG Report 2023',
      period: 'Q3 2023',
      generatedDate: '2023-10-10',
      status: 'published',
      type: 'Quarterly',
      emissions: 298.2,
      offsetPurchased: 450,
      donations: 110000,
      volunteerHours: 580
    },
    {
      id: '4',
      title: 'Monthly ESG Report - January 2024',
      period: 'January 2024',
      generatedDate: '2024-02-01',
      status: 'draft',
      type: 'Monthly',
      emissions: 105.3,
      offsetPurchased: 150,
      donations: 45000,
      volunteerHours: 220
    },
    {
      id: '5',
      title: 'Annual ESG Report 2022',
      period: '2022',
      generatedDate: '2023-01-20',
      status: 'archived',
      type: 'Annual',
      emissions: 1450.2,
      offsetPurchased: 1800,
      donations: 420000,
      volunteerHours: 2100
    },
    {
      id: '6',
      title: 'Q2 ESG Report 2023',
      period: 'Q2 2023',
      generatedDate: '2023-07-15',
      status: 'published',
      type: 'Quarterly',
      emissions: 315.7,
      offsetPurchased: 480,
      donations: 115000,
      volunteerHours: 600
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowGenerateModal(false);
    // No backend logic
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      draft: 'bg-yellow-100 text-yellow-700 border-yellow-300',
      published: 'bg-green-100 text-green-700 border-green-300',
      archived: 'bg-gray-100 text-gray-700 border-gray-300'
    };

    const icons = {
      draft: '📝',
      published: '✓',
      archived: '📦'
    };

    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${styles[status as keyof typeof styles]}`}>
        <span>{icons[status as keyof typeof icons]}</span>
        <span className="capitalize">{status}</span>
      </span>
    );
  };

  const getTypeBadge = (type: string) => {
    const styles = {
      Annual: 'bg-purple-100 text-purple-700 border-purple-300',
      Quarterly: 'bg-blue-100 text-blue-700 border-blue-300',
      Monthly: 'bg-pink-100 text-pink-700 border-pink-300'
    };

    return (
      <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold border ${styles[type as keyof typeof styles]}`}>
        {type}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 p-6 md:p-8 lg:p-10">
      {/* Page Header */}
      <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
            ESG Reports
          </h1>
          <p className="text-lg text-gray-600">
            Generate, manage, and review your Environmental, Social, and Governance reports
          </p>
        </div>
        <button
          onClick={() => setShowGenerateModal(true)}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 4v16m8-8H4"></path>
          </svg>
          <span>Generate ESG Report</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-xl p-6 text-white">
          <div className="text-sm opacity-90 mb-2">Total Reports</div>
          <div className="text-3xl font-bold">{mockReports.length}</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl shadow-xl p-6 text-white">
          <div className="text-sm opacity-90 mb-2">Published</div>
          <div className="text-3xl font-bold">{mockReports.filter(r => r.status === 'published').length}</div>
        </div>
        <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl shadow-xl p-6 text-white">
          <div className="text-sm opacity-90 mb-2">Drafts</div>
          <div className="text-3xl font-bold">{mockReports.filter(r => r.status === 'draft').length}</div>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-xl p-6 text-white">
          <div className="text-sm opacity-90 mb-2">Archived</div>
          <div className="text-3xl font-bold">{mockReports.filter(r => r.status === 'archived').length}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Reports Table */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-8 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">Reports History</h2>
                  <p className="text-gray-600">View and manage all your ESG reports</p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                    Filter
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-sm font-semibold text-white hover:shadow-lg transition-all">
                    Export All
                  </button>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Report
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Period
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Generated
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {mockReports.map((report) => (
                    <tr
                      key={report.id}
                      className="hover:bg-gradient-to-r hover:from-gray-50 hover:to-white transition-all duration-150 cursor-pointer"
                      onClick={() => setSelectedReport(report)}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                            📊
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">{report.title}</div>
                            <div className="text-xs text-gray-500 mt-0.5">
                              {report.emissions.toFixed(1)}t CO₂ • ${(report.donations / 1000).toFixed(0)}K donations
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-medium text-gray-700">{report.period}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getTypeBadge(report.type)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(report.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-500">
                          {new Date(report.generatedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedReport(report);
                            }}
                            className="px-3 py-1.5 rounded-lg bg-blue-100 text-blue-700 text-xs font-semibold hover:bg-blue-200 transition-colors"
                          >
                            View
                          </button>
                          <button className="px-3 py-1.5 rounded-lg border border-gray-300 text-gray-700 text-xs font-medium hover:bg-gray-50 transition-colors">
                            Download
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Showing <span className="font-semibold text-gray-900">{mockReports.length}</span> reports
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-white transition-colors">
                  Previous
                </button>
                <button className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-sm font-semibold text-white">
                  1
                </button>
                <button className="px-3 py-1.5 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-white transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* PDF Preview Placeholder */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden sticky top-8">
            <div className="p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <h3 className="text-xl font-bold mb-1">Report Preview</h3>
              <p className="text-sm opacity-90">Select a report to preview</p>
            </div>

            {selectedReport ? (
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">{selectedReport.title}</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Period:</span>
                      <span className="font-semibold">{selectedReport.period}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Type:</span>
                      <span className="font-semibold">{selectedReport.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Status:</span>
                      {getStatusBadge(selectedReport.status)}
                    </div>
                  </div>
                </div>

                {/* PDF Preview Placeholder */}
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 bg-gradient-to-br from-gray-50 to-white mb-4">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📄</div>
                    <div className="text-sm font-semibold text-gray-700 mb-1">PDF Preview</div>
                    <div className="text-xs text-gray-500">Report content would appear here</div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                    <div className="text-xs text-green-700 mb-1">Emissions</div>
                    <div className="text-lg font-bold text-green-900">{selectedReport.emissions.toFixed(1)}t</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                    <div className="text-xs text-blue-700 mb-1">Offset</div>
                    <div className="text-lg font-bold text-blue-900">{selectedReport.offsetPurchased.toFixed(0)}t</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                    <div className="text-xs text-purple-700 mb-1">Donations</div>
                    <div className="text-lg font-bold text-purple-900">${(selectedReport.donations / 1000).toFixed(0)}K</div>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-3 border border-pink-200">
                    <div className="text-xs text-pink-700 mb-1">Volunteer Hrs</div>
                    <div className="text-lg font-bold text-pink-900">{selectedReport.volunteerHours}</div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-sm hover:shadow-lg transition-all">
                    Download PDF
                  </button>
                  <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-50 transition-colors">
                    Share
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-12 text-center">
                <div className="text-6xl mb-4 opacity-50">📊</div>
                <p className="text-gray-500 text-sm">Click on a report from the table to preview</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Generate Report Modal */}
      {showGenerateModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full">
            <div className="sticky top-0 bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Generate ESG Report</h2>
                <button
                  onClick={() => setShowGenerateModal(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            </div>

            <form onSubmit={handleGenerate} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Report Type *
                </label>
                <select
                  name="reportType"
                  value={formData.reportType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                  required
                >
                  <option value="Annual">Annual</option>
                  <option value="Quarterly">Quarterly</option>
                  <option value="Monthly">Monthly</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Period *
                </label>
                <input
                  type="text"
                  name="period"
                  value={formData.period}
                  onChange={handleInputChange}
                  placeholder="e.g., 2023, Q4 2023, January 2024"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all bg-gray-50 focus:bg-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Include Sections
                </label>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="includeEmissions"
                      checked={formData.includeEmissions}
                      onChange={handleInputChange}
                      className="w-5 h-5 rounded border-gray-300 text-purple-500 focus:ring-purple-500"
                    />
                    <span className="text-sm text-gray-700">CO₂ Emissions Data</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="includeDonations"
                      checked={formData.includeDonations}
                      onChange={handleInputChange}
                      className="w-5 h-5 rounded border-gray-300 text-purple-500 focus:ring-purple-500"
                    />
                    <span className="text-sm text-gray-700">Donations & Contributions</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="includeVolunteers"
                      checked={formData.includeVolunteers}
                      onChange={handleInputChange}
                      className="w-5 h-5 rounded border-gray-300 text-purple-500 focus:ring-purple-500"
                    />
                    <span className="text-sm text-gray-700">Volunteer Hours</span>
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-end gap-4 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowGenerateModal(false)}
                  className="px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-2"
                >
                  <span>Generate Report</span>
                  <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
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

