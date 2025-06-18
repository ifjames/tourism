import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Star, Wifi, Car, Coffee, Utensils, Phone, Mail, Globe } from 'lucide-react'
import { accommodations } from '../data/mockData'
import { formatCurrency } from '../lib/utils'
import Swal from 'sweetalert2'

const Accommodations = () => {
  const [selectedType, setSelectedType] = useState('all')
  const [priceRange, setPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('rating')

  const accommodationTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'hotel', label: 'Hotels' },
    { value: 'resort', label: 'Resorts' },
    { value: 'hostel', label: 'Hostels' },
    { value: 'villa', label: 'Villas' },
    { value: 'guesthouse', label: 'Guesthouses' }
  ]

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'budget', label: 'Budget (Under ₱5,000)' },
    { value: 'mid', label: 'Mid-range (₱5,000 - ₱15,000)' },
    { value: 'luxury', label: 'Luxury (₱15,000+)' }
  ]

  const getAmenityIcon = (amenity: string) => {
    const icons = {
      WiFi: Wifi,
      'Free Parking': Car,
      'Complimentary Breakfast': Coffee,
      Restaurant: Utensils,
      'Private Beach': MapPin,
      Spa: Star
    }
    return icons[amenity as keyof typeof icons] || Star
  }

  const handleBookNow = (accommodationName: string) => {
    Swal.fire({
      title: 'Book Accommodation',
      html: `
        <div class="text-left">
          <h3 class="font-semibold mb-4">${accommodationName}</h3>
          <div class="space-y-3">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
              <input type="date" id="checkin" class="w-full p-2 border rounded-lg" required>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Check-out Date</label>
              <input type="date" id="checkout" class="w-full p-2 border rounded-lg" required>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Guests</label>
              <select id="guests" class="w-full p-2 border rounded-lg">
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5+ Guests</option>
              </select>
            </div>
          </div>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: 'Proceed to Book',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#3b82f6',
      preConfirm: () => {
        const checkin = (document.getElementById('checkin') as HTMLInputElement).value
        const checkout = (document.getElementById('checkout') as HTMLInputElement).value
        const guests = (document.getElementById('guests') as HTMLSelectElement).value
        
        if (!checkin || !checkout) {
          Swal.showValidationMessage('Please select check-in and check-out dates')
          return false
        }
        
        return { checkin, checkout, guests }
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Booking Confirmed!',
          text: `Your booking for ${accommodationName} has been confirmed. You will receive a confirmation email shortly.`,
          icon: 'success',
          confirmButtonColor: '#3b82f6'
        })
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
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Find Your Perfect
            <span className="block text-primary-600">Stay</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover comfortable accommodations from luxury resorts to budget-friendly hostels across the Philippines.
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
              {accommodationTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
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

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="rating">Highest Rated</option>
              <option value="price_low">Price: Low to High</option>
              <option value="price_high">Price: High to Low</option>
              <option value="reviews">Most Reviewed</option>
            </select>
          </div>
        </motion.div>

        {/* Accommodations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {accommodations.map((accommodation, index) => (
            <motion.div
              key={accommodation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="glass-card rounded-xl overflow-hidden card-hover"
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={accommodation.images[0]}
                    alt={accommodation.name}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {accommodation.name}
                      </h3>
                      <span className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                        {accommodation.type}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-semibold">{accommodation.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    {accommodation.location}
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {accommodation.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Amenities</h4>
                    <div className="flex flex-wrap gap-2">
                      {accommodation.amenities.slice(0, 4).map((amenity) => {
                        const Icon = getAmenityIcon(amenity)
                        return (
                          <div key={amenity} className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded text-sm">
                            <Icon className="h-3 w-3" />
                            <span>{amenity}</span>
                          </div>
                        )
                      })}
                      {accommodation.amenities.length > 4 && (
                        <span className="text-gray-500 text-sm px-2 py-1">
                          +{accommodation.amenities.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">
                        {formatCurrency(accommodation.priceRange.min)}
                      </span>
                      <span className="text-gray-500 text-sm">
                        - {formatCurrency(accommodation.priceRange.max)}
                      </span>
                      <div className="text-sm text-gray-500">per night</div>
                    </div>
                    <div className="text-sm text-gray-500">
                      ({accommodation.reviewCount} reviews)
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Phone className="h-4 w-4" />
                      <span>{accommodation.contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Mail className="h-4 w-4" />
                      <span>{accommodation.contactInfo.email}</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleBookNow(accommodation.name)}
                      className="flex-1 btn-primary"
                    >
                      Book Now
                    </motion.button>
                    {accommodation.contactInfo.website && (
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={accommodation.contactInfo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary flex items-center justify-center"
                      >
                        <Globe className="h-4 w-4" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More accommodations would be loaded here */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Looking for more accommodations? We have hundreds more options available.
          </p>
          <button className="btn-primary">
            Load More Accommodations
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default Accommodations
