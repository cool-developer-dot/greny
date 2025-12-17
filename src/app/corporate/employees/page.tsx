'use client';

import React, { useState, useEffect } from 'react';

type EmployeeRole = 'Corporate Admin' | 'Sustainability Manager' | 'HR Manager' | 'Finance Manager' | 'Employee';

interface Employee {
  id: string;
  name: string;
  email: string;
  role: EmployeeRole;
  department: string;
  xpPoints: number;
  avatar?: string;
  joinDate: string;
  status: 'active' | 'on-leave' | 'inactive';
}

export default function EmployeesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState<EmployeeRole | 'all'>('all');
  const [filterDepartment, setFilterDepartment] = useState<string>('all');
  const [currentEmployeeRole, setCurrentEmployeeRole] = useState<EmployeeRole>('Corporate Admin');

  useEffect(() => {
    // Get current employee role from localStorage
    const storedRole = localStorage.getItem('employeeRole') as EmployeeRole;
    if (storedRole && ['Corporate Admin', 'Sustainability Manager', 'HR Manager', 'Finance Manager', 'Employee'].includes(storedRole)) {
      setCurrentEmployeeRole(storedRole);
    }
  }, []);

  const handleRoleChange = (role: EmployeeRole) => {
    setCurrentEmployeeRole(role);
    localStorage.setItem('employeeRole', role);
    // Force sidebar to update by reloading
    window.location.reload();
  };

  // Mock employees data
  const mockEmployees: Employee[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@company.com',
      role: 'Corporate Admin',
      department: 'Executive',
      xpPoints: 12500,
      joinDate: '2020-01-15',
      status: 'active'
    },
    {
      id: '2',
      name: 'Michael Chen',
      email: 'michael.chen@company.com',
      role: 'Sustainability Manager',
      department: 'Sustainability',
      xpPoints: 9800,
      joinDate: '2021-03-20',
      status: 'active'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      email: 'emily.rodriguez@company.com',
      role: 'HR Manager',
      department: 'Human Resources',
      xpPoints: 11200,
      joinDate: '2019-06-10',
      status: 'active'
    },
    {
      id: '4',
      name: 'David Thompson',
      email: 'david.thompson@company.com',
      role: 'Finance Manager',
      department: 'Finance',
      xpPoints: 10500,
      joinDate: '2020-09-05',
      status: 'active'
    },
    {
      id: '5',
      name: 'Jessica Williams',
      email: 'jessica.williams@company.com',
      role: 'Employee',
      department: 'Sustainability',
      xpPoints: 6500,
      joinDate: '2022-02-14',
      status: 'active'
    },
    {
      id: '6',
      name: 'Robert Martinez',
      email: 'robert.martinez@company.com',
      role: 'Employee',
      department: 'Sustainability',
      xpPoints: 7200,
      joinDate: '2021-11-08',
      status: 'active'
    },
    {
      id: '7',
      name: 'Amanda Davis',
      email: 'amanda.davis@company.com',
      role: 'Sustainability Manager',
      department: 'Sustainability',
      xpPoints: 8900,
      joinDate: '2021-05-22',
      status: 'active'
    },
    {
      id: '8',
      name: 'James Wilson',
      email: 'james.wilson@company.com',
      role: 'Employee',
      department: 'Finance',
      xpPoints: 5400,
      joinDate: '2022-08-30',
      status: 'active'
    },
    {
      id: '9',
      name: 'Lisa Anderson',
      email: 'lisa.anderson@company.com',
      role: 'HR Manager',
      department: 'Human Resources',
      xpPoints: 7600,
      joinDate: '2022-01-12',
      status: 'on-leave'
    },
    {
      id: '10',
      name: 'Christopher Brown',
      email: 'christopher.brown@company.com',
      role: 'Employee',
      department: 'Executive',
      xpPoints: 4800,
      joinDate: '2023-03-15',
      status: 'active'
    },
    {
      id: '11',
      name: 'Maria Garcia',
      email: 'maria.garcia@company.com',
      role: 'Finance Manager',
      department: 'Finance',
      xpPoints: 9200,
      joinDate: '2021-07-18',
      status: 'active'
    },
    {
      id: '12',
      name: 'Daniel Lee',
      email: 'daniel.lee@company.com',
      role: 'Employee',
      department: 'Human Resources',
      xpPoints: 5800,
      joinDate: '2022-10-05',
      status: 'active'
    }
  ];

  const departments = ['Executive', 'Sustainability', 'Human Resources', 'Finance'];
  const roles: EmployeeRole[] = ['Corporate Admin', 'Sustainability Manager', 'HR Manager', 'Finance Manager', 'Employee'];

  const getRoleBadge = (role: EmployeeRole) => {
    const styles = {
      'Corporate Admin': 'bg-purple-100 text-purple-700 border-purple-300',
      'Sustainability Manager': 'bg-green-100 text-green-700 border-green-300',
      'HR Manager': 'bg-blue-100 text-blue-700 border-blue-300',
      'Finance Manager': 'bg-yellow-100 text-yellow-700 border-yellow-300',
      'Employee': 'bg-gray-100 text-gray-700 border-gray-300'
    };

    const icons = {
      'Corporate Admin': '👑',
      'Sustainability Manager': '🌱',
      'HR Manager': '👥',
      'Finance Manager': '💰',
      'Employee': '👤'
    };

    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${styles[role]}`}>
        <span>{icons[role]}</span>
        <span>{role}</span>
      </span>
    );
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      active: 'bg-green-100 text-green-700 border-green-300',
      'on-leave': 'bg-yellow-100 text-yellow-700 border-yellow-300',
      inactive: 'bg-gray-100 text-gray-700 border-gray-300'
    };

    return (
      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold border ${styles[status as keyof typeof styles]}`}>
        {status === 'active' ? '●' : status === 'on-leave' ? '○' : '○'} {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
      </span>
    );
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getAvatarColor = (name: string) => {
    const colors = [
      'from-purple-500 to-pink-500',
      'from-blue-500 to-cyan-500',
      'from-green-500 to-emerald-500',
      'from-yellow-500 to-orange-500',
      'from-indigo-500 to-purple-500',
      'from-pink-500 to-rose-500'
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  // Filter employees
  const filteredEmployees = mockEmployees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         employee.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = filterRole === 'all' || employee.role === filterRole;
    const matchesDepartment = filterDepartment === 'all' || employee.department === filterDepartment;
    return matchesSearch && matchesRole && matchesDepartment;
  });

  // Calculate statistics
  const totalEmployees = mockEmployees.length;
  const activeEmployees = mockEmployees.filter(e => e.status === 'active').length;
  const totalXPPoints = mockEmployees.reduce((sum, emp) => sum + emp.xpPoints, 0);
  const avgXPPoints = Math.round(totalXPPoints / totalEmployees);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 p-6 md:p-8 lg:p-10">
      {/* Page Header */}
      <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
            Employee Management
          </h1>
          <p className="text-lg text-gray-600">
            Manage your team, track performance, and monitor XP points
          </p>
        </div>
        
        {/* Role Switcher */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-gray-700">Your Role:</span>
            <select
              value={currentEmployeeRole}
              onChange={(e) => handleRoleChange(e.target.value as EmployeeRole)}
              className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all bg-white text-sm font-semibold cursor-pointer"
            >
              <option value="Corporate Admin">Corporate Admin</option>
              <option value="Sustainability Manager">Sustainability Manager</option>
              <option value="HR Manager">HR Manager</option>
              <option value="Finance Manager">Finance Manager</option>
              <option value="Employee">Employee</option>
            </select>
          </div>
          <p className="text-xs text-gray-500 mt-2">Change role to see sidebar access changes</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <span className="text-3xl">👥</span>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-90">Total Employees</div>
              <div className="text-3xl font-bold">{totalEmployees}</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl shadow-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <span className="text-3xl">✓</span>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-90">Active</div>
              <div className="text-3xl font-bold">{activeEmployees}</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <span className="text-3xl">⭐</span>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-90">Total XP Points</div>
              <div className="text-3xl font-bold">{totalXPPoints.toLocaleString()}</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl shadow-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <span className="text-3xl">📊</span>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-90">Avg XP Points</div>
              <div className="text-3xl font-bold">{avgXPPoints.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Search</label>
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all bg-gray-50 focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Filter by Role</label>
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value as EmployeeRole | 'all')}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all bg-gray-50 focus:bg-white appearance-none cursor-pointer"
            >
              <option value="all">All Roles</option>
              {roles.map((role) => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Filter by Department</label>
            <select
              value={filterDepartment}
              onChange={(e) => setFilterDepartment(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all bg-gray-50 focus:bg-white appearance-none cursor-pointer"
            >
              <option value="all">All Departments</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Employees Table */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="p-6 md:p-8 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Employees</h2>
              <p className="text-gray-600">Showing {filteredEmployees.length} of {totalEmployees} employees</p>
            </div>
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 4v16m8-8H4"></path>
              </svg>
              <span>Add Employee</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Employee
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Department
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  XP Points
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredEmployees.map((employee) => (
                <tr
                  key={employee.id}
                  className="hover:bg-gradient-to-r hover:from-gray-50 hover:to-white transition-all duration-150"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${getAvatarColor(employee.name)} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                        {getInitials(employee.name)}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">{employee.name}</div>
                        <div className="text-xs text-gray-500">{employee.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getRoleBadge(employee.role)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-700">{employee.department}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-yellow-400 to-orange-400 text-white">
                        ⭐ {employee.xpPoints.toLocaleString()}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(employee.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-1.5 rounded-lg bg-blue-100 text-blue-700 text-xs font-semibold hover:bg-blue-200 transition-colors">
                        View
                      </button>
                      <button className="px-3 py-1.5 rounded-lg border border-gray-300 text-gray-700 text-xs font-medium hover:bg-gray-50 transition-colors">
                        Edit
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
            Showing <span className="font-semibold text-gray-900">{filteredEmployees.length}</span> of <span className="font-semibold text-gray-900">{totalEmployees}</span> employees
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
  );
}

