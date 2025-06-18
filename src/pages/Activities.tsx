import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, Users, Star, MapPin, CheckCircle, AlertCircle } from 'lucide-react'
import { activities } from '../data/mockData'
import { formatCurrency } from '../lib/utils'
import Swal from 'sweetalert2'

const Activities = () => {
  const [selectedType, setSelectedType] = useState('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [priceRange, setPriceRange] = useState('all')

  const activityTypes = [
    { value: 'all', label: 'All Activities' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'cultural', label: 'Cultural' },
    { value: 'food', label: 'Food & Dining' },
    { value: 'nature', label: 'Nature' },
    { value: 'entertainment', label: 'Entertainment' }
  ]

  const difficulties = [
    { value: 'all', label: 'All Levels' },
    { value: 'easy', label: 'Easy' },
    { value: 'moderate', label: 'Moderate' },
    { value: 'challenging', label: 'Challenging' }
  ]

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'free', label: 'Free' },
    { value: 'budget', label: 'Under ₱1,000' },
    { value: 'mid', label: '₱1,000 - ₱3,000' },
    { value: 'premium', label: '₱3,000+' }
  ]

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      easy: 'bg-green-100 text-green-800',
      moderate: 'bg-yellow-100 text-yellow-800',
      challenging: 'bg-red-100 text-red-800'
    }
    return colors[difficulty as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  const getTypeColor = (type: string) => {
    const colors = {
      adventure: 'bg-orange-100 text-orange-800',
      cultural: 'bg-purple-100 text-purple-800',
      food: 'bg-pink-100 text-pink-800',
      nature: 'bg-green-100 text-green-800',
      entertainment: 'bg-blue-100 text-blue-800'
    }
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  const handleBookActivity = (activityName: string, price: number) => {
    Swal.fire({
      title: 'Book Activity',
      html: `
        <div class="text-left">
          <h3 class="font-semibold mb-4">${activityName}</h3>
          <div class="bg-blue-50 p-4 rounded-lg mb-4">
            <p class="text-blue-800 font-semibold">Price: ${formatCurrency(price)} per person</p>
          </div>
          <div class="space-y-3">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
              <input type="date" id="activityDate" class="w-full p-2 border rounded-lg" required>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Number of Participants</label>
              <select id="participants" class="w-full p-2 border rounded-lg">
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5+ People</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
              <textarea id="requests" class="w-full p-2 border rounded-lg" rows="3" placeholder="Any special requirements or dietary restrictions..."></textarea>
            </div>
          </div>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: 'Book Activity',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#3b82f6',
      preConfirm: () => {
        const date = (document.getElementById('activityDate') as HTMLInputElement).value
        const participants = (document.getElementById('participants') as HTMLSelectElement).value
        
        if (!date) {
          Swal.showValidationMessage('Please select a date for the activity')
          return false
        }
        
        return { date, participants }
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const totalPrice = price * parseInt(result.value.participants)
        Swal.fire({
          title: 'Booking Confirmed!',
          html: `
            <div class="text-center">
              <p class="mb-2">Your booking for <strong>${activityName}</strong> has been confirmed!</p>
              <p class="text-lg font-semibold text-blue-600">Total: ${formatCurrency(totalPrice)}</p>
              <p class="text-sm text-gray-600 mt-2">You will receive a confirmation email with all the details.</p>
            </div>
          `,
          icon: 'success',
          confirmButtonColor: '#3b82f6'
        })
      }
    })
  }

  // Mock additional activities for demonstration
  const mockActivities = [
    {
      id: '3',
      name: 'Bohol Countryside Tour',
      description: 'Full-day tour of Bohol\'s famous attractions including Chocolate Hills, Tarsier Sanctuary, and Loboc River Cruise.',
      type: 'cultural' as const,
      location: 'Bohol',
      duration: '8-10 hours',
      difficulty: 'easy' as const,
      price: 2500,
      images: ['https://images.unsplash.com/photo-1580466055128-b6e0e3e1b1b0?w=800'],
      rating: 4.6,
      reviewCount: 543,
      includes: ['Transportation', 'Tour Guide', 'Entrance Fees', 'Lunch'],
      requirements: ['Comfortable Walking Shoes', 'Sun Protection', 'Camera']
    },
    {
      id: '4',
      name: 'Siargao Surfing Lessons',
      description: 'Learn to surf at Cloud 9, one of the world\'s best surfing spots. Perfect for beginners and intermediate surfers.',
      type: 'adventure' as const,
      location: 'Siargao',
      duration: '3-4 hours',
      difficulty: 'moderate' as const,
      price: 1800,
      images: ['https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800'],
      rating: 4.8,
      reviewCount: 324,
      includes: ['Surfboard Rental', 'Professional Instructor', 'Safety Equipment'],
      requirements: ['Swimming Ability', 'Swimwear', 'No Medical Conditions']
    },
    {
      id: '5',
      name: 'Baguio Food Tour',
      description: 'Taste the best of Baguio\'s local cuisine including strawberries, ube treats, and traditional Cordillera dishes.',
      type: 'food' as const,
      location: 'Baguio City',
      duration: '4-5 hours',
      difficulty: 'easy' as const,
      price: 1200,
      images: ['https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800'],
      rating: 4.5,
      reviewCount: 287,
      includes: ['Food Tastings', 'Local Guide', 'Market Visit', 'Recipe Cards'],
      requirements: ['Comfortable Walking Shoes', 'Appetite for Adventure']
    }
  ]

  const allActivities = [...activities, ...mockActivities]

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
            Exciting
            <span className="block text-primary-600">Activities</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover thrilling adventures, cultural experiences, and unforgettable activities across the Philippines.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6 rounded-xl mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {activityTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>

            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {difficulties.map((difficulty) => (
                <option key={difficulty.value} value={difficulty.value}>
                  {difficulty.label}
                </option>
              ))}
            </select>

            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {priceRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {allActivities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl overflow-hidden card-hover"
            >
              <div className="relative h-48">
                <img
                  src={activity.images[0]}
                  alt={activity.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getTypeColor(activity.type)}`}>
                    {activity.type}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(activity.difficulty)}`}>
                    {activity.difficulty}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold">{activity.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {activity.name}
                </h3>

                <div className="flex items-center text-gray-500 text-sm mb-3 space-x-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {activity.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {activity.duration}
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {activity.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                      Includes
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {activity.includes.slice(0, 3).map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                      {activity.includes.length > 3 && (
                        <li className="text-primary-600">• +{activity.includes.length - 3} more</li>
                      )}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1 text-amber-500" />
                      Requirements
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {activity.requirements.slice(0, 2).map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                      {activity.requirements.length > 2 && (
                        <li className="text-primary-600">• +{activity.requirements.length - 2} more</li>
                      )}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t pt-4">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">
                      {formatCurrency(activity.price)}
                    </span>
                    <span className="text-gray-500 text-sm"> per person</span>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Users className="h-4 w-4 mr-1" />
                      {activity.reviewCount} reviews
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleBookActivity(activity.name, activity.price)}
                    className="btn-primary"
                  >
                    Book Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Discover even more exciting activities and experiences.
          </p>
          <button className="btn-primary">
            Load More Activities
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default Activities
