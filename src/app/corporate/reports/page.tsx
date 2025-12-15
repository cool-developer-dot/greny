'use client';

import React, { useState } from 'react';

interface ESGReport {
  id: string;
  title: string;
  period: string;
  generatedDate: string;
  status: 'draft' | 'published' | 'archived';
  type: 'Annual' | 'Quarterly' | 'Monthly';
  size: string;
}

const ReportsPage: React.FC = () => {
  const [showGenerateForm, setShowGenerateForm] = useState(false);
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  // Mock reports data
  const [reports] = useState<ESGReport[]>([
    {
      id: '1',
      title: 'Q4 2024 ESG Report',
      period: 'Oct - Dec 2024',
      generatedDate: '2024-12-10',
      status: 'published',
      type: 'Quarterly',
      size: '2.4 MB'
    },
    {
      id: '2',
      title: 'Annual ESG Report 2024',
      period: 'Jan - Dec 2024',
      generatedDate: '2024-12-01',
      status: 'published',
      type: 'Annual',
      size: '8.7 MB'
    },
    {
      id: '3',
      title: 'Q3 2024 ESG Report',
      period: 'Jul - Sep 2024',
      generatedDate: '2024-09-30',
      status: 'archived',
      type: 'Quarterly',
      size: '2.1 MB'
    },
    {
      id: '4',
      title: 'November 2024 Report',
      period: 'November 2024',
      generatedDate: '2024-11-30',
      status: 'draft',
      type: 'Monthly',
      size: '1.2 MB'
    }
  ]);

  const getStatusBadge = (status: string) => {
    const styles = {
      draft: 'bg-yellow-100 text-yellow-800',
      published: 'bg-green-100 text-green-800',
      archived: 'bg-gray-100 text-gray-800'
    };
    return styles[status as keyof typeof styles] || styles.draft;
  };

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      'Annual': 'bg-blue-100 text-blue-800',
      'Quarterly': 'bg-purple-100 text-purple-800',
      'Monthly': 'bg-indigo-100 text-indigo-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">ESG Reports</h1>
          <p className="text-gray-600">Generate and manage your sustainability reports</p>
        </div>
        <button
          onClick={() => setShowGenerateForm(!showGenerateForm)}
          className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-sm"
        >
          {showGenerateForm ? 'Cancel' : 'Generate Report'}
        </button>
      </div>

      {/* Generate Report Form */}
      {showGenerateForm && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Generate New ESG Report</h2>
          <form onSubmit={(e) => { e.preventDefault(); alert('Report generation started! (UI only)'); setShowGenerateForm(false); }} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Report Type
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required>
                  <option value="">Select type</option>
                  <option value="Annual">Annual</option>
                  <option value="Quarterly">Quarterly</option>
                  <option value="Monthly">Monthly</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Period
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Q4 2024"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Include Sections
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Emissions', 'Volunteers', 'Donations', 'Employees', 'Campaigns', 'Compliance', 'Goals', 'Impact'].map((section) => (
                    <label key={section} className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="text-sm text-gray-700">{section}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => setShowGenerateForm(false)}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-sm"
              >
                Generate Report
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Reports List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Generated Reports</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {reports.map((report) => (
            <div
              key={report.id}
              className={`p-6 hover:bg-gray-50 transition-colors cursor-pointer ${
                selectedReport === report.id ? 'bg-blue-50' : ''
              }`}
              onClick={() => setSelectedReport(selectedReport === report.id ? null : report.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{report.title}</h3>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(report.type)}`}>
                      {report.type}
                    </span>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadge(report.status)}`}>
                      {report.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <span>Period: {report.period}</span>
                    <span>Generated: {report.generatedDate}</span>
                    <span>Size: {report.size}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                  <button className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* PDF Preview Placeholder */}
              {selectedReport === report.id && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="bg-gray-100 rounded-lg p-8 border-2 border-dashed border-gray-300">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-lg flex items-center justify-center">
                        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium text-gray-700 mb-1">PDF Preview</p>
                      <p className="text-xs text-gray-500">{report.title}</p>
                      <p className="text-xs text-gray-400 mt-2">PDF viewer will be integrated here</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-2">Total Reports</p>
          <p className="text-3xl font-bold text-gray-900">{reports.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-2">Published</p>
          <p className="text-3xl font-bold text-green-600">
            {reports.filter(r => r.status === 'published').length}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-2">Drafts</p>
          <p className="text-3xl font-bold text-yellow-600">
            {reports.filter(r => r.status === 'draft').length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;

