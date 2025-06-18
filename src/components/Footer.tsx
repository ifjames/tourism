import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    destinations: [
      { name: 'Luzon', path: '/destinations?region=luzon' },
      { name: 'Visayas', path: '/destinations?region=visayas' },
      { name: 'Mindanao', path: '/destinations?region=mindanao' },
      { name: 'Featured Spots', path: '/destinations?featured=true' }
    ],
    services: [
      { name: 'Accommodations', path: '/accommodations' },
      { name: 'Activities', path: '/activities' },
      { name: 'Travel Guides', path: '/guides' },
      { name: 'Trip Planning', path: '/plan' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Contact', path: '/contact' },
      { name: 'Careers', path: '/careers' },
      { name: 'Press', path: '/press' }
    ]
  }

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/phtouristfinder' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/phtouristfinder' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/phtouristfinder' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-primary-600 to-secondary-600 p-2 rounded-lg"
              >
                <MapPin className="h-6 w-6 text-white" />
              </motion.div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg">
                  PH Tourist
                </span>
                <span className="text-sm text-primary-400 -mt-1">
                  Spot Finder
                </span>
              </div>
            </Link>
            <p className="text-gray-300 mb-4">
              Discover the beauty of the Philippines with our comprehensive guide to tourist destinations, accommodations, and activities.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Destinations</h3>
            <ul className="space-y-2">
              {footerLinks.destinations.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">+63 (2) 8123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">info@phtouristfinder.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5" />
                <span className="text-gray-300">
                  123 Tourism Street<br />
                  Makati City, Metro Manila<br />
                  Philippines 1229
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} PH Tourist Spot Finder. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-primary-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-primary-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
