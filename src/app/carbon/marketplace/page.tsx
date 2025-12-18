'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';

interface Project {
  id: string;
  projectName: string;
  ngoName: string;
  location: string;
  country: string;
  pricePerTonne: number;
  isVerified: boolean;
  impactType: string;
  availableCredits: number;
  image?: string;
}

const mockProjects: Project[] = [
  {
    id: '1',
    projectName: 'Amazon Rainforest Conservation',
    ngoName: 'Rainforest Alliance',
    location: 'Amazon Basin, Brazil',
    country: 'Brazil',
    pricePerTonne: 15.50,
    isVerified: true,
    impactType: 'Forest Conservation',
    availableCredits: 125000,
  },
  {
    id: '2',
    projectName: 'Solar Energy Farm Initiative',
    ngoName: 'Green Energy Foundation',
    location: 'California, USA',
    country: 'USA',
    pricePerTonne: 22.00,
    isVerified: true,
    impactType: 'Renewable Energy',
    availableCredits: 85000,
  },
  {
    id: '3',
    projectName: 'Mangrove Restoration Program',
    ngoName: 'Ocean Conservation Trust',
    location: 'Sundarbans, Bangladesh',
    country: 'Bangladesh',
    pricePerTonne: 18.75,
    isVerified: true,
    impactType: 'Marine Conservation',
    availableCredits: 95000,
  },
  {
    id: '4',
    projectName: 'Wind Power Development',
    ngoName: 'Clean Air Initiative',
    location: 'Scotland, UK',
    country: 'UK',
    pricePerTonne: 25.00,
    isVerified: true,
    impactType: 'Renewable Energy',
    availableCredits: 110000,
  },
  {
    id: '5',
    projectName: 'Community Reforestation Project',
    ngoName: 'Trees for Life',
    location: 'Kenya',
    country: 'Kenya',
    pricePerTonne: 12.00,
    isVerified: false,
    impactType: 'Reforestation',
    availableCredits: 65000,
  },
  {
    id: '6',
    projectName: 'Waste-to-Energy Conversion',
    ngoName: 'Sustainable Cities Network',
    location: 'Singapore',
    country: 'Singapore',
    pricePerTonne: 30.00,
    isVerified: true,
    impactType: 'Waste Management',
    availableCredits: 45000,
  },
  {
    id: '7',
    projectName: 'Peatland Restoration',
    ngoName: 'Wetlands International',
    location: 'Indonesia',
    country: 'Indonesia',
    pricePerTonne: 16.50,
    isVerified: true,
    impactType: 'Ecosystem Restoration',
    availableCredits: 78000,
  },
  {
    id: '8',
    projectName: 'Biochar Carbon Sequestration',
    ngoName: 'Climate Action Collective',
    location: 'Germany',
    country: 'Germany',
    pricePerTonne: 28.50,
    isVerified: true,
    impactType: 'Carbon Capture',
    availableCredits: 55000,
  },
];

const countries = ['All Countries', ...Array.from(new Set(mockProjects.map(p => p.country)))];
const ngos = ['All NGOs', ...Array.from(new Set(mockProjects.map(p => p.ngoName)))];
const impactTypes = ['All Types', ...Array.from(new Set(mockProjects.map(p => p.impactType)))];

export default function CarbonMarketplacePage() {
  const [selectedCountry, setSelectedCountry] = useState('All Countries');
  const [selectedNGO, setSelectedNGO] = useState('All NGOs');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50]);
  const [selectedImpactType, setSelectedImpactType] = useState('All Types');
  const [cartItems, setCartItems] = useState<string[]>([]);

  // Load cart items from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('carbonCart');
    if (savedCart) {
      try {
        const cart = JSON.parse(savedCart);
        setCartItems(cart.map((item: { id: string }) => item.id));
      } catch (e) {
        console.error('Error loading cart:', e);
      }
    }
  }, []);

  const filteredProjects = useMemo(() => {
    return mockProjects.filter(project => {
      const countryMatch = selectedCountry === 'All Countries' || project.country === selectedCountry;
      const ngoMatch = selectedNGO === 'All NGOs' || project.ngoName === selectedNGO;
      const priceMatch = project.pricePerTonne >= priceRange[0] && project.pricePerTonne <= priceRange[1];
      const impactMatch = selectedImpactType === 'All Types' || project.impactType === selectedImpactType;
      
      return countryMatch && ngoMatch && priceMatch && impactMatch;
    });
  }, [selectedCountry, selectedNGO, priceRange, selectedImpactType]);

  const handleAddToCart = (projectId: string) => {
    // Load existing cart from localStorage
    const existingCart = localStorage.getItem('carbonCart');
    let cart: Array<{ id: string; quantity: number }> = [];
    
    if (existingCart) {
      try {
        cart = JSON.parse(existingCart);
      } catch (e) {
        console.error('Error loading cart:', e);
      }
    }

    // Check if item already exists in cart
    const existingItem = cart.find(item => item.id === projectId);
    if (existingItem) {
      // Item already in cart
      return;
    }

    // Add new item to cart with quantity 1
    const project = mockProjects.find(p => p.id === projectId);
    if (project) {
      const newCartItem = {
        id: project.id,
        projectName: project.projectName,
        ngoName: project.ngoName,
        location: project.location,
        pricePerTonne: project.pricePerTonne,
        quantity: 1,
        availableCredits: project.availableCredits,
        isVerified: project.isVerified,
        impactType: project.impactType,
      };
      
      cart.push(newCartItem);
      localStorage.setItem('carbonCart', JSON.stringify(cart));
      setCartItems([...cartItems, projectId]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
            Carbon Credit Marketplace
          </h1>
          <p className="text-gray-600 text-lg">
            Browse and invest in verified carbon offset projects worldwide
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span>🔍</span> Filters
              </h2>

              {/* Country Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Country
                </label>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-200 bg-white text-gray-900 font-medium focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                >
                  {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>

              {/* NGO Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  NGO
                </label>
                <select
                  value={selectedNGO}
                  onChange={(e) => setSelectedNGO(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-200 bg-white text-gray-900 font-medium focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                >
                  {ngos.map(ngo => (
                    <option key={ngo} value={ngo}>{ngo}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Price Range: ${priceRange[0]} - ${priceRange[1]} per tonne
                </label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="50"
                    step="0.5"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseFloat(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>$0</span>
                    <span>$50+</span>
                  </div>
                </div>
              </div>

              {/* Impact Type Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Impact Type
                </label>
                <select
                  value={selectedImpactType}
                  onChange={(e) => setSelectedImpactType(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-200 bg-white text-gray-900 font-medium focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                >
                  {impactTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Reset Filters */}
              <button
                onClick={() => {
                  setSelectedCountry('All Countries');
                  setSelectedNGO('All NGOs');
                  setPriceRange([0, 50]);
                  setSelectedImpactType('All Types');
                }}
                className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </aside>

          {/* Projects Grid */}
          <div className="flex-1">
            {/* Results Count */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600 font-medium">
                Showing <span className="font-bold text-gray-900">{filteredProjects.length}</span> project{filteredProjects.length !== 1 ? 's' : ''}
              </p>
              <div className="flex items-center gap-3">
                {cartItems.length > 0 && (
                  <Link
                    href="/carbon/cart"
                    className="relative px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-semibold text-sm hover:shadow-lg transition-all flex items-center gap-2"
                  >
                    <span>🛒</span>
                    <span>{cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in cart</span>
                  </Link>
                )}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  {/* Project Header */}
                  <div className="p-4 sm:p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-b border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors break-words">
                          {project.projectName}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-green-600 truncate">
                          {project.ngoName}
                        </p>
                      </div>
                      {project.isVerified && (
                        <div className="flex items-center gap-1 px-2 sm:px-2.5 py-1 bg-green-500 text-white rounded-full text-xs font-bold flex-shrink-0">
                          <span>✓</span>
                          <span className="hidden sm:inline">Verified</span>
                          <span className="sm:hidden">Verif</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                      <span>📍</span>
                      <span className="font-medium truncate">{project.location}</span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-4 sm:p-6">
                    <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                        <span className="text-xs sm:text-sm text-gray-600 font-medium">Impact Type</span>
                        <span className="text-xs sm:text-sm font-semibold text-gray-900 break-words sm:text-right">{project.impactType}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                        <span className="text-xs sm:text-sm text-gray-600 font-medium">Available Credits</span>
                        <span className="text-xs sm:text-sm font-semibold text-gray-900 sm:text-right">
                          {project.availableCredits.toLocaleString()} tCO₂
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 pt-3 border-t border-gray-200">
                        <span className="text-sm sm:text-base font-bold text-gray-900">Price per Tonne</span>
                        <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent sm:text-right">
                          ${project.pricePerTonne.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={() => handleAddToCart(project.id)}
                      disabled={cartItems.includes(project.id)}
                      className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all duration-200 ${
                        cartItems.includes(project.id)
                          ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                          : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]'
                      }`}
                    >
                      {cartItems.includes(project.id) ? (
                        <span className="flex items-center justify-center gap-2">
                          <span>✓</span>
                          Added to Cart
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <span>🛒</span>
                          Add to Cart
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-12 text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No projects found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters to see more results</p>
                <button
                  onClick={() => {
                    setSelectedCountry('All Countries');
                    setSelectedNGO('All NGOs');
                    setPriceRange([0, 50]);
                    setSelectedImpactType('All Types');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
