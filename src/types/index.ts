export interface TouristSpot {
  id: string
  name: string
  description: string
  location: string
  region: string
  province: string
  category: 'beach' | 'mountain' | 'historical' | 'cultural' | 'urban' | 'natural'
  images: string[]
  rating: number
  reviewCount: number
  bestTimeToVisit: string
  entryFee?: number
  activities: string[]
  coordinates: {
    lat: number
    lng: number
  }
  featured: boolean
}

export interface Accommodation {
  id: string
  name: string
  type: 'hotel' | 'resort' | 'hostel' | 'villa' | 'guesthouse'
  description: string
  location: string
  images: string[]
  rating: number
  reviewCount: number
  priceRange: {
    min: number
    max: number
  }
  amenities: string[]
  contactInfo: {
    phone: string
    email: string
    website?: string
  }
  coordinates: {
    lat: number
    lng: number
  }
}

export interface Activity {
  id: string
  name: string
  description: string
  type: 'adventure' | 'cultural' | 'food' | 'nature' | 'entertainment'
  location: string
  duration: string
  difficulty: 'easy' | 'moderate' | 'challenging'
  price: number
  images: string[]
  rating: number
  reviewCount: number
  includes: string[]
  requirements: string[]
}

export interface Region {
  id: string
  name: string
  description: string
  image: string
  provinces: string[]
  touristSpots: TouristSpot[]
  popularDestinations: string[]
}
