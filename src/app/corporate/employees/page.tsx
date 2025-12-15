'use client';

import React, { useState } from 'react';

interface Employee {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Sustainability' | 'HR' | 'Finance' | 'Employee';
  department: string;
  xpPoints: number;
  volunteerHours: number;
  campaignsParticipated: number;
  joinDate: string;
}

const EmployeesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState<string>('all');

  // Mock employees data
  const [employees] = useState<Employee[]>([
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@company.com',
      role: 'Sustainability',
      department: 'Operations',
      xpPoints: 2450,
      volunteerHours: 48,
      campaignsParticipated: 12,
      joinDate: '2023-01-15'
    },
    {
      id: '2',
      name: 'Michael Chen',
      email: 'michael.chen@company.com',
      role: 'Admin',
      department: 'Management',
      xpPoints: 3200,
      volunteerHours: 65,
      campaignsParticipated: 18,
      joinDate: '2022-06-20'
    },
    {
      id: '3',
      name: 'Emily Davis',
      email: 'emily.davis@company.com',
      role: 'HR',
      department: 'Human Resources',
      xpPoints: 1890,
      volunteerHours: 32,
      campaignsParticipated: 8,
      joinDate: '2023-03-10'
    },
    {
      id: '4',
      name: 'David Wilson',
      email: 'david.wilson@company.com',
      role: 'Finance',
      department: 'Finance',
      xpPoints: 2100,
      volunteerHours: 40,
      campaignsParticipated: 10,
      joinDate: '2023-02-28'
    },
    {
      id: '5',
      name: 'Jessica Martinez',
      email: 'jessica.martinez@company.com',
      role: 'Employee',
      department: 'Marketing',
      xpPoints: 1560,
      volunteerHours: 28,
      campaignsParticipated: 7,
      joinDate: '2023-05-12'
    },
    {
      id: '6',
      name: 'Robert Taylor',
      email: 'robert.taylor@company.com',
      role: 'Employee',
      department: 'Engineering',
      xpPoints: 1780,
      volunteerHours: 35,
      campaignsParticipated: 9,
      joinDate: '2023-04-05'
    },
    {
      id: '7',
      name: 'Amanda Brown',
      email: 'amanda.brown@company.com',
      role: 'Sustainability',
      department: 'Operations',
      xpPoints: 2290,
      volunteerHours: 45,
      campaignsParticipated: 11,
      joinDate: '2022-11-18'
    },
    {
      id: '8',
      name: 'James Anderson',
      email: 'james.anderson@company.com',
      role: 'Employee',
      department: 'Sales',
      xpPoints: 1420,
      volunteerHours: 25,
      campaignsParticipated: 6,
      joinDate: '2023-07-22'
    }
  ]);

  const getRoleBadge = (role: string) => {
    const styles: { [key: string]: string } = {
      'Admin': 'bg-purple-100 text-purple-800',
      'Sustainability': 'bg-green-100 text-green-800',
      'HR': 'bg-blue-100 text-blue-800',
      'Finance': 'bg-yellow-100 text-yellow-800',
      'Employee': 'bg-gray-100 text-gray-800'
    };
    return styles[role] || styles['Employee'];
  };

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || employee.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const sortedEmployees = [...filteredEmployees].sort((a, b) => b.xpPoints - a.xpPoints);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Employee Management</h1>
        <p className="text-gray-600">View and manage employee participation in ESG initiatives</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Employees
            </label>
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, email, or department..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Role
            </label>
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Roles</option>
              <option value="Admin">Admin</option>
              <option value="Sustainability">Sustainability</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="Employee">Employee</option>
            </select>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-2">Total Employees</p>
          <p className="text-3xl font-bold text-gray-900">{employees.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-2">Total XP Points</p>
          <p className="text-3xl font-bold text-blue-600">
            {employees.reduce((sum, emp) => sum + emp.xpPoints, 0).toLocaleString()}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-2">Total Volunteer Hours</p>
          <p className="text-3xl font-bold text-green-600">
            {employees.reduce((sum, emp) => sum + emp.volunteerHours, 0)}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-2">Avg Participation</p>
          <p className="text-3xl font-bold text-purple-600">
            {(employees.reduce((sum, emp) => sum + emp.campaignsParticipated, 0) / employees.length).toFixed(1)}
          </p>
        </div>
      </div>

      {/* Employees Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Employee List</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Department
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  XP Points
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Volunteer Hours
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Campaigns
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Join Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sortedEmployees.map((employee) => (
                <tr key={employee.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                      <div className="text-sm text-gray-500">{employee.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleBadge(employee.role)}`}>
                      {employee.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {employee.department}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-gray-900">
                        {employee.xpPoints.toLocaleString()}
                      </span>
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full"
                          style={{ width: `${Math.min((employee.xpPoints / 3500) * 100, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {employee.volunteerHours} hrs
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {employee.campaignsParticipated}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {employee.joinDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {sortedEmployees.length === 0 && (
          <div className="p-12 text-center">
            <p className="text-gray-500">No employees found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeesPage;

