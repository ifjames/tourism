import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  TrendingUp, 
  Users, 
  Calendar, 
  Star, 
  Camera,
  Filter,
  Search,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react'
import { touristSpots, accommodations, activities } from '../data/mockData'
import Swal from 'sweetalert2'

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const stats = [
    {
      title: 'Total Destinations',
      value: touristSpots.length.toString(),
      change: '+12%',
      icon: MapPin,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Accommodations',
      value: accommodations.length.toString(),
      change: '+8%',
      icon: Users,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Activities',
      value: activities.length.toString(),
      change: '+15%',
      icon: Activity,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Avg Rating',
      value: '4.7',
      change: '+0.2',
      icon: Star,
      color: 'from-yellow-500 to-yellow-600'
    }
  ]

  const recentActivities = [
    { id: '1', type: 'new_destination', title: 'New destination added: Siquijor Island', time: '2 hours ago', icon: MapPin },
    { id: '2', type: 'review', title: 'New 5-star review for El Nido', time: '4 hours ago', icon: Star },
    { id: '3', type: 'booking', title: '25 new accommodations listed', time: '6 hours ago', icon: Users },
    { id: '4', type: 'photo', title: '150 new photos uploaded', time: '8 hours ago', icon: Camera }
  ]

  const topDestinations = touristSpots
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5)

  const categories = [
    { name: 'All', value: 'all', count: touristSpots.length },
    { name: 'Beaches', value: 'beach', count: touristSpots.filter(spot => spot.category === 'beach').length },
    { name: 'Mountains', value: 'mountain', count: touristSpots.filter(spot => spot.category === 'mountain').length },
    { name: 'Cultural', value: 'cultural', count: touristSpots.filter(spot => spot.category === 'cultural').length },
    { name: 'Historical', value: 'historical', count: touristSpots.filter(spot => spot.category === 'historical').length }
  ]

  const filteredSpots = touristSpots.filter(spot => {
    const matchesFilter = activeFilter === 'all' || spot.category === activeFilter
    const matchesSearch = spot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         spot.location.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const handleExportData = () => {
    Swal.fire({
      title: 'Export Data',
      text: 'Choose the format for your data export',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Export as CSV',
      cancelButtonText: 'Export as PDF',
      confirmButtonColor: '#3b82f6',
      cancelButtonColor: '#6b7280'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Success!', 'Data exported as CSV file', 'success')
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Success!', 'Data exported as PDF file', 'success')
      }
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">
                Tourism Dashboard
              </h1>
              <p className="text-gray-600">
                Overview of Philippine tourist destinations, accommodations, and activities
              </p>
            </div>
            <div className="mt-4 lg:mt-0 flex flex-col sm:flex-row gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleExportData}
                className="btn-secondary"
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                Export Data
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary"
              >
                <PieChart className="h-4 w-4 mr-2" />
                Generate Report
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                    <p className="text-sm text-green-600 mt-1">
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Search and Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6 rounded-xl mb-6"
            >
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="Search destinations, locations..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="h-5 w-5 text-gray-400" />
                  <select
                    value={activeFilter}
                    onChange={(e) => setActiveFilter(e.target.value)}
                    className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>

            {/* Destinations Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card p-6 rounded-xl"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Tourist Destinations ({filteredSpots.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredSpots.slice(0, 6).map((spot, index) => (
                  <motion.div
                    key={spot.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <img
                        src={spot.images[0]}
                        alt={spot.name}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 truncate">
                          {spot.name}
                        </h3>
                        <p className="text-sm text-gray-600 flex items-center mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {spot.location}
                        </p>
                        <div className="flex items-center mt-2">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium">{spot.rating}</span>
                            <span className="text-sm text-gray-500">
                              ({spot.reviewCount})
                            </span>
                          </div>
                          <span className={`ml-3 px-2 py-1 text-xs rounded-full ${
                            spot.category === 'beach' ? 'bg-blue-100 text-blue-800' :
                            spot.category === 'mountain' ? 'bg-green-100 text-green-800' :
                            spot.category === 'cultural' ? 'bg-purple-100 text-purple-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {spot.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Destinations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card p-6 rounded-xl"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Top Rated Destinations
              </h3>
              <div className="space-y-4">
                {topDestinations.map((spot, index) => (
                  <div key={spot.id} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <span className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-sm font-bold rounded-full">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {spot.name}
                      </p>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-600">{spot.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-card p-6 rounded-xl"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Recent Activity
              </h3>
              <div className="space-y-4">
                {recentActivities.map((activity) => {
                  const Icon = activity.icon
                  return (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="p-2 bg-gray-100 rounded-lg">
                          <Icon className="h-4 w-4 text-gray-600" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">
                          {activity.title}
                        </p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="glass-card p-6 rounded-xl"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Quick Stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Featured Spots</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {touristSpots.filter(spot => spot.featured).length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Beach Destinations</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {touristSpots.filter(spot => spot.category === 'beach').length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Mountain Spots</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {touristSpots.filter(spot => spot.category === 'mountain').length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Cultural Sites</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {touristSpots.filter(spot => spot.category === 'cultural').length}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
