import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Star, Filter, Search, Heart, Camera } from 'lucide-react'
import { touristSpots } from '../data/mockData'
import { cn } from '../lib/utils'
import Swal from 'sweetalert2'

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [sortBy, setSortBy] = useState('rating')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'beach', label: 'Beaches' },
    { value: 'mountain', label: 'Mountains' },
    { value: 'cultural', label: 'Cultural' },
    { value: 'historical', label: 'Historical' },
    { value: 'natural', label: 'Natural' },
    { value: 'urban', label: 'Urban' }
  ]

  const regions = [
    { value: 'all', label: 'All Regions' },
    { value: 'Luzon', label: 'Luzon' },
    { value: 'Visayas', label: 'Visayas' },
    { value: 'Mindanao', label: 'Mindanao' }
  ]

  const sortOptions = [
    { value: 'rating', label: 'Highest Rated' },
    { value: 'reviews', label: 'Most Reviewed' },
    { value: 'name', label: 'Name A-Z' },
    { value: 'featured', label: 'Featured First' }
  ]

  const filteredAndSortedSpots = touristSpots
    .filter(spot => {
      const matchesSearch = spot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           spot.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           spot.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || spot.category === selectedCategory
      const matchesRegion = selectedRegion === 'all' || spot.region.toLowerCase().includes(selectedRegion.toLowerCase())
      return matchesSearch && matchesCategory && matchesRegion
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating
        case 'reviews':
          return b.reviewCount - a.reviewCount
        case 'name':
          return a.name.localeCompare(b.name)
        case 'featured':
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
        default:
          return 0
      }
    })

  const handleAddToWishlist = (spotName: string) => {
    Swal.fire({
      title: 'Added to Wishlist!',
      text: `${spotName} has been added to your travel wishlist`,
      icon: 'success',
      timer: 2000,
      showConfirmButton: false,
      toast: true,
      position: 'top-end'
    })
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      beach: 'bg-blue-100 text-blue-800',
      mountain: 'bg-green-100 text-green-800',
      cultural: 'bg-purple-100 text-purple-800',
      historical: 'bg-amber-100 text-amber-800',
      natural: 'bg-emerald-100 text-emerald-800',
      urban: 'bg-gray-100 text-gray-800'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Discover Amazing
            <span className="block text-primary-600">Destinations</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore breathtaking tourist spots across the beautiful Philippines. From pristine beaches to majestic mountains.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6 rounded-xl mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>

            {/* Region Filter */}
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {regions.map((region) => (
                <option key={region.value} value={region.value}>
                  {region.label}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Showing {filteredAndSortedSpots.length} of {touristSpots.length} destinations
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">View:</span>
              <button
                onClick={() => setViewMode('grid')}
                className={cn(
                  'p-2 rounded-lg transition-colors',
                  viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'text-gray-400 hover:text-gray-600'
                )}
              >
                <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                </div>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={cn(
                  'p-2 rounded-lg transition-colors',
                  viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'text-gray-400 hover:text-gray-600'
                )}
              >
                <div className="w-4 h-4 space-y-1">
                  <div className="bg-current h-0.5 rounded"></div>
                  <div className="bg-current h-0.5 rounded"></div>
                  <div className="bg-current h-0.5 rounded"></div>
                  <div className="bg-current h-0.5 rounded"></div>
                </div>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Destinations Grid */}
        <div className={cn(
          'grid gap-6',
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        )}>
          {filteredAndSortedSpots.map((spot, index) => (
            <motion.div
              key={spot.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                'glass-card rounded-xl overflow-hidden card-hover',
                viewMode === 'list' && 'flex items-center space-x-6 p-6'
              )}
            >
              <div className={cn(
                'relative',
                viewMode === 'grid' ? 'h-64' : 'w-48 h-32 flex-shrink-0'
              )}>
                <img
                  src={spot.images[0]}
                  alt={spot.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  <span className={cn('px-3 py-1 rounded-full text-sm font-semibold', getCategoryColor(spot.category))}>
                    {spot.category}
                  </span>
                  {spot.featured && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  )}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold">{spot.rating}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleAddToWishlist(spot.name)}
                  className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full text-gray-600 hover:text-red-600 transition-colors"
                >
                  <Heart className="h-5 w-5" />
                </motion.button>
              </div>

              <div className={cn('p-6', viewMode === 'list' && 'p-0 flex-1')}>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{spot.name}</h3>
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  {spot.location}
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">{spot.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="font-semibold">{spot.rating}</span>
                    <span className="text-gray-500 text-sm">({spot.reviewCount} reviews)</span>
                  </div>
                  {spot.entryFee && (
                    <span className="text-sm font-semibold text-primary-600">
                      ₱{spot.entryFee}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {spot.activities.slice(0, 3).map((activity) => (
                    <span
                      key={activity}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                    >
                      {activity}
                    </span>
                  ))}
                  {spot.activities.length > 3 && (
                    <span className="text-gray-500 text-sm">
                      +{spot.activities.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    Best time: {spot.bestTimeToVisit}
                  </span>
                  <Link
                    to={`/destinations/${spot.id}`}
                    className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredAndSortedSpots.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No destinations found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search criteria or filters
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Destinations
