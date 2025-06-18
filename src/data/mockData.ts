import { TouristSpot, Accommodation, Activity, Region } from '../types'

export const touristSpots: TouristSpot[] = [
  {
    id: '1',
    name: 'El Nido, Palawan',
    description: 'A stunning tropical paradise featuring pristine beaches, crystal-clear waters, dramatic limestone cliffs, and hidden lagoons.',
    location: 'El Nido, Palawan',
    region: 'MIMAROPA',
    province: 'Palawan',
    category: 'beach',
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800'
    ],
    rating: 4.8,
    reviewCount: 2547,
    bestTimeToVisit: 'November to May',
    entryFee: 200,
    activities: ['Island Hopping', 'Snorkeling', 'Kayaking', 'Rock Climbing', 'Beach Relaxation'],
    coordinates: { lat: 11.1949, lng: 119.4013 },
    featured: true
  },
  {
    id: '2',
    name: 'Boracay',
    description: 'World-famous for its powdery white sand beaches, vibrant nightlife, and crystal-clear waters perfect for various water activities.',
    location: 'Malay, Aklan',
    region: 'Western Visayas',
    province: 'Aklan',
    category: 'beach',
    images: [
      'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800',
      'https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800',
      'https://images.unsplash.com/photo-1573160103600-9cb3455e0bd3?w=800'
    ],
    rating: 4.7,
    reviewCount: 4821,
    bestTimeToVisit: 'November to April',
    entryFee: 75,
    activities: ['Water Sports', 'Beach Parties', 'Parasailing', 'Scuba Diving', 'Spa Treatments'],
    coordinates: { lat: 11.9674, lng: 121.9248 },
    featured: true
  },
  {
    id: '3',
    name: 'Banaue Rice Terraces',
    description: 'Ancient rice terraces carved into the mountains, often called the "Eighth Wonder of the World" by locals.',
    location: 'Banaue, Ifugao',
    region: 'Cordillera Administrative Region',
    province: 'Ifugao',
    category: 'cultural',
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800'
    ],
    rating: 4.9,
    reviewCount: 1876,
    bestTimeToVisit: 'March to May, October to November',
    entryFee: 30,
    activities: ['Hiking', 'Cultural Tour', 'Photography', 'Village Visit'],
    coordinates: { lat: 16.9265, lng: 121.0571 },
    featured: true
  },
  {
    id: '4',
    name: 'Chocolate Hills',
    description: 'Over 1,200 cone-shaped hills that turn chocolate brown during dry season, creating a unique geological wonder.',
    location: 'Carmen, Bohol',
    region: 'Central Visayas',
    province: 'Bohol',
    category: 'natural',
    images: [
      'https://images.unsplash.com/photo-1580466055128-b6e0e3e1b1b0?w=800',
      'https://images.unsplash.com/photo-1580466055128-b6e0e3e1b1b0?w=800',
      'https://images.unsplash.com/photo-1580466055128-b6e0e3e1b1b0?w=800'
    ],
    rating: 4.6,
    reviewCount: 3245,
    bestTimeToVisit: 'February to May',
    entryFee: 60,
    activities: ['Sightseeing', 'Photography', 'ATV Riding', 'Biking'],
    coordinates: { lat: 9.8965, lng: 124.1694 },
    featured: true
  },
  {
    id: '5',
    name: 'Intramuros',
    description: 'Historic walled city in Manila featuring Spanish colonial architecture, museums, and centuries-old churches.',
    location: 'Manila',
    region: 'National Capital Region',
    province: 'Metro Manila',
    category: 'historical',
    images: [
      'https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=800',
      'https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=800',
      'https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=800'
    ],
    rating: 4.4,
    reviewCount: 2156,
    bestTimeToVisit: 'November to February',
    entryFee: 0,
    activities: ['Walking Tour', 'Museum Visit', 'Horse-drawn Carriage', 'Historical Learning'],
    coordinates: { lat: 14.5906, lng: 120.9754 },
    featured: false
  },
  {
    id: '6',
    name: 'Mayon Volcano',
    description: 'Perfect cone-shaped active volcano known for its near-perfect symmetry and breathtaking views.',
    location: 'Albay',
    region: 'Bicol Region',
    province: 'Albay',
    category: 'mountain',
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'
    ],
    rating: 4.7,
    reviewCount: 1654,
    bestTimeToVisit: 'December to May',
    entryFee: 0,
    activities: ['Volcano Viewing', 'Hiking', 'Photography', 'ATV Tours'],
    coordinates: { lat: 13.2577, lng: 123.6857 },
    featured: true
  }
]

export const accommodations: Accommodation[] = [
  {
    id: '1',
    name: 'El Nido Resorts Pangulasian Island',
    type: 'resort',
    description: 'Luxury eco-resort on a private island offering pristine beaches, world-class amenities, and sustainable tourism practices.',
    location: 'Bacuit Bay, El Nido, Palawan',
    images: [
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800'
    ],
    rating: 4.9,
    reviewCount: 856,
    priceRange: { min: 25000, max: 45000 },
    amenities: ['Private Beach', 'Spa', 'Diving Center', 'Restaurant', 'Bar', 'WiFi'],
    contactInfo: {
      phone: '+63-2-8902-5534',
      email: 'reservations@elnidoresorts.com',
      website: 'https://www.elnidoresorts.com'
    },
    coordinates: { lat: 11.1949, lng: 119.4013 }
  },
  {
    id: '2',
    name: 'Shangri-La Boracay',
    type: 'resort',
    description: 'Premium beachfront resort offering luxury accommodations, multiple dining options, and exclusive beach access.',
    location: 'Boracay Island, Aklan',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800'
    ],
    rating: 4.8,
    reviewCount: 2341,
    priceRange: { min: 15000, max: 35000 },
    amenities: ['Beach Access', 'Multiple Pools', 'Kids Club', 'Spa', 'Fitness Center', 'Multiple Restaurants'],
    contactInfo: {
      phone: '+63-36-288-4988',
      email: 'slbr@shangri-la.com',
      website: 'https://www.shangri-la.com'
    },
    coordinates: { lat: 11.9674, lng: 121.9248 }
  }
]

export const activities: Activity[] = [
  {
    id: '1',
    name: 'Island Hopping Tour A',
    description: 'Explore the most beautiful lagoons and beaches of El Nido including Big Lagoon, Small Lagoon, and Secret Lagoon.',
    type: 'adventure',
    location: 'El Nido, Palawan',
    duration: '6-8 hours',
    difficulty: 'easy',
    price: 1400,
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800'
    ],
    rating: 4.7,
    reviewCount: 1234,
    includes: ['Boat Transfer', 'Snorkeling Gear', 'Lunch', 'Tour Guide'],
    requirements: ['Swimming Ability', 'Sun Protection', 'Comfortable Swimwear']
  },
  {
    id: '2',
    name: 'Tarsier Sanctuary Visit',
    description: 'Visit the world\'s smallest primates in their natural habitat and learn about conservation efforts.',
    type: 'nature',
    location: 'Corella, Bohol',
    duration: '2-3 hours',
    difficulty: 'easy',
    price: 300,
    images: [
      'https://images.unsplash.com/photo-1580466055128-b6e0e3e1b1b0?w=800'
    ],
    rating: 4.5,
    reviewCount: 876,
    includes: ['Entrance Fee', 'Guided Tour', 'Educational Materials'],
    requirements: ['Quiet Behavior', 'No Flash Photography', 'Comfortable Walking Shoes']
  }
]

export const regions: Region[] = [
  {
    id: '1',
    name: 'Luzon',
    description: 'The largest island of the Philippines, home to the capital Manila and diverse landscapes from beaches to mountains.',
    image: 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=800',
    provinces: ['Manila', 'Bataan', 'Batangas', 'Bulacan', 'Cavite', 'Laguna', 'Quezon', 'Rizal'],
    touristSpots: touristSpots.filter(spot => ['NCR', 'Cordillera', 'Bicol'].includes(spot.region)),
    popularDestinations: ['Manila', 'Baguio', 'Vigan', 'Banaue', 'Tagaytay']
  },
  {
    id: '2',
    name: 'Visayas',
    description: 'Central island group known for pristine beaches, diving spots, and rich cultural heritage.',
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800',
    provinces: ['Aklan', 'Bohol', 'Cebu', 'Iloilo', 'Negros Oriental', 'Negros Occidental', 'Siquijor'],
    touristSpots: touristSpots.filter(spot => ['Western Visayas', 'Central Visayas'].includes(spot.region)),
    popularDestinations: ['Boracay', 'Cebu City', 'Bohol', 'Siquijor', 'Dumaguete']
  },
  {
    id: '3',
    name: 'Mindanao',
    description: 'Southern island known for diverse cultures, pristine nature, and adventure destinations.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    provinces: ['Davao', 'Bukidnon', 'Camiguin', 'Surigao del Norte', 'Misamis Oriental'],
    touristSpots: touristSpots.filter(spot => ['Davao', 'Northern Mindanao'].includes(spot.region)),
    popularDestinations: ['Davao City', 'Camiguin', 'Siargao', 'Bukidnon', 'Cagayan de Oro']
  }
]
