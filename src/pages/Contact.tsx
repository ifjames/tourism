import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, HelpCircle, Headphones } from 'lucide-react'
import Swal from 'sweetalert2'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  })

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+63 (2) 8123-4567',
      description: 'Mon-Fri 8AM-6PM PST'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@phtouristfinder.com',
      description: 'Response within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '123 Tourism Street, Makati City',
      description: 'Metro Manila, Philippines 1229'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday',
      description: '8:00 AM - 6:00 PM PST'
    }
  ]

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry', icon: MessageCircle },
    { value: 'booking', label: 'Booking Support', icon: HelpCircle },
    { value: 'partnership', label: 'Partnership', icon: Headphones },
    { value: 'feedback', label: 'Feedback', icon: Send }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        title: 'Missing Information',
        text: 'Please fill in all required fields',
        icon: 'warning',
        confirmButtonColor: '#3b82f6'
      })
      return
    }

    Swal.fire({
      title: 'Message Sent!',
      html: `
        <div class="text-left">
          <p class="mb-2">Thank you for contacting us, <strong>${formData.name}</strong>!</p>
          <p class="mb-4">We've received your message and will get back to you within 24 hours.</p>
          <div class="bg-blue-50 p-4 rounded-lg">
            <p class="text-sm text-blue-800">
              <strong>Reference ID:</strong> #${Date.now().toString().slice(-6)}
            </p>
          </div>
        </div>
      `,
      icon: 'success',
      confirmButtonColor: '#3b82f6',
      confirmButtonText: 'Got it!'
    }).then(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        type: 'general'
      })
    })
  }

  const faqs = [
    {
      question: 'How can I book a tour or accommodation?',
      answer: 'You can book directly through our platform by browsing destinations, accommodations, or activities and clicking the "Book Now" button.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and various local payment methods including GCash and PayMaya.'
    },
    {
      question: 'Can I cancel or modify my booking?',
      answer: 'Yes, cancellation and modification policies vary by provider. Please check the specific terms when booking or contact us for assistance.'
    },
    {
      question: 'Do you offer group discounts?',
      answer: 'Yes, we offer special rates for groups of 10 or more. Contact us for custom group packages and pricing.'
    }
  ]

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
            Get In
            <span className="block text-primary-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about destinations, bookings, or need travel assistance? We're here to help make your Philippine adventure unforgettable.
          </p>
        </motion.div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl text-center"
              >
                <div className="bg-gradient-to-r from-primary-600 to-secondary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-primary-600 font-semibold mb-1">{info.details}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </motion.div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Inquiry Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {inquiryTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Brief subject of your inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us how we can help you..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="border-b border-gray-200 pb-4 last:border-b-0"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Need Immediate Assistance?</h3>
              <p className="text-gray-600 mb-6">
                For urgent matters or immediate support, you can reach us directly through these channels:
              </p>
              
              <div className="space-y-4">
                <motion.a
                  href="tel:+6328123456"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-3 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
                >
                  <Phone className="h-5 w-5 text-primary-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Call Us</div>
                    <div className="text-sm text-gray-600">+63 (2) 8123-4567</div>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:info@phtouristfinder.com"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-3 p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors"
                >
                  <Mail className="h-5 w-5 text-secondary-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Email Us</div>
                    <div className="text-sm text-gray-600">info@phtouristfinder.com</div>
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <div className="glass-card p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Visit Our Office</h2>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="h-12 w-12 mx-auto mb-2" />
                <p className="font-semibold">Interactive Map</p>
                <p className="text-sm">123 Tourism Street, Makati City</p>
                <p className="text-sm">Metro Manila, Philippines 1229</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
