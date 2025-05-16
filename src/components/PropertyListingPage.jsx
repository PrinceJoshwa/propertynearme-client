"use client"

import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import PropertyCard from "./PropertyCard"

// Sample property data based on the reference websites
const propertyListings = [
  // Lodha Hosa Road
  {
    id: "lodha-1",
    title: "Lodha Hosa Road",
    description: "Premium 3 BHK apartments with world-class amenities in South Bangalore",
    price: "₹1.2 Cr",
    location: "Hosa Road, Bangalore",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bedrooms: "3",
    bathrooms: "3",
    area: "1650 sq.ft",
    status: "Ready to Move",
    type: "Apartment",
    developer: "Lodha Group",
  },
  // Eden by Sentient
  {
    id: "eden-1",
    title: "Eden by Sentient",
    description: "Luxury garden homes with private terraces and sustainable design",
    price: "₹2.5 Cr",
    location: "Whitefield, Bangalore",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bedrooms: "4",
    bathrooms: "4",
    area: "2800 sq.ft",
    status: "Under Construction",
    type: "Villa",
    developer: "Sentient Developers",
  },
  // RRL Palacio
  {
    id: "rrl-1",
    title: "RRL Palacio",
    description: "Spanish-inspired luxury apartments with premium finishes and amenities",
    price: "₹95 Lakhs",
    location: "Electronic City, Bangalore",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bedrooms: "2",
    bathrooms: "2",
    area: "1250 sq.ft",
    status: "Ready to Move",
    type: "Apartment",
    developer: "RRL Builders",
  },
  // Abhee Riviera Royale
  {
    id: "abhee-1",
    title: "Abhee Riviera Royale",
    description: "Riverside luxury apartments with panoramic views and premium amenities",
    price: "₹1.8 Cr",
    location: "Kudlu, Bangalore",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bedrooms: "3",
    bathrooms: "3",
    area: "2100 sq.ft",
    status: "Ready to Move",
    type: "Apartment",
    developer: "Abhee Ventures",
  },
  // NBR Whitefield
  {
    id: "nbr-1",
    title: "NBR Trifecta",
    description: "Modern apartments in Whitefield with excellent connectivity and amenities",
    price: "₹85 Lakhs",
    location: "Whitefield, Bangalore",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bedrooms: "2",
    bathrooms: "2",
    area: "1150 sq.ft",
    status: "Under Construction",
    type: "Apartment",
    developer: "NBR Group",
  },
  // Sattva Signet
  {
    id: "sattva-1",
    title: "Sattva Signet",
    description: "Signature luxury apartments with premium specifications and amenities",
    price: "₹1.5 Cr",
    location: "Devanahalli, Bangalore",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bedrooms: "3",
    bathrooms: "3",
    area: "1850 sq.ft",
    status: "Under Construction",
    type: "Apartment",
    developer: "Sattva Group",
  },
  // Keerti Regalia
  {
    id: "keerti-1",
    title: "Keerti Regalia",
    description: "Premium apartments with contemporary design and lifestyle amenities",
    price: "₹1.1 Cr",
    location: "Sarjapur Road, Bangalore",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bedrooms: "3",
    bathrooms: "2",
    area: "1550 sq.ft",
    status: "Ready to Move",
    type: "Apartment",
    developer: "Keerti Estates",
  },
  // Keerti Krishna Viva
  {
    id: "keerti-2",
    title: "Keerti Krishna Viva",
    description: "Contemporary living spaces with excellent connectivity and amenities",
    price: "₹75 Lakhs",
    location: "Kengeri, Bangalore",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bedrooms: "2",
    bathrooms: "2",
    area: "1100 sq.ft",
    status: "Ready to Move",
    type: "Apartment",
    developer: "Keerti Estates",
  },
  // Klassik Landmark
  {
    id: "klassik-1",
    title: "Klassik Landmark",
    description: "Iconic residential development with premium specifications and amenities",
    price: "₹1.3 Cr",
    location: "Sarjapur Road, Bangalore",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bedrooms: "3",
    bathrooms: "3",
    area: "1750 sq.ft",
    status: "Ready to Move",
    type: "Apartment",
    developer: "Klassik Group",
  },
  // JRC Wildwood
  {
    id: "jrc-1",
    title: "JRC Wildwood",
    description: "Nature-inspired living with lush greenery and modern amenities",
    price: "₹2.8 Cr",
    location: "Bannerghatta Road, Bangalore",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bedrooms: "4",
    bathrooms: "4",
    area: "3200 sq.ft",
    status: "Under Construction",
    type: "Villa",
    developer: "JRC Projects",
  },
  // Farmland 1
  {
    id: "farm-1",
    title: "Green Acres Farmland",
    description: "Premium agricultural land with excellent soil quality and water resources",
    price: "₹70 Lakhs per acre",
    location: "Nelamangala, Bangalore",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    area: "5 acres",
    status: "Available",
    type: "Farmland",
  },
  // Plot 1
  {
    id: "plot-1",
    title: "Premium Residential Plot",
    description: "BMRDA approved residential plot in gated community with amenities",
    price: "₹85 Lakhs",
    location: "Devanahalli, Bangalore",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    area: "2400 sq.ft",
    status: "Available",
    type: "Plot",
  },
]

const PropertyListingPage = () => {
  const location = useLocation()
  const [filteredProperties, setFilteredProperties] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get property type from URL query params
    const params = new URLSearchParams(location.search)
    const propertyType = params.get("type")

    setLoading(true)

    // Filter properties based on type
    setTimeout(() => {
      if (propertyType) {
        const filtered = propertyListings.filter((property) => property.type === propertyType)
        setFilteredProperties(filtered)
      } else {
        setFilteredProperties(propertyListings)
      }
      setLoading(false)
    }, 500) // Simulate loading
  }, [location])

  // Get the current property type for the heading
  const getCurrentType = () => {
    const params = new URLSearchParams(location.search)
    return params.get("type") || "All Properties"
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{getCurrentType()} in Karnataka</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the best {getCurrentType().toLowerCase()} options available in prime locations
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
          </div>
        ) : (
          <>
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-lg shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto text-gray-400 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <h3 className="text-xl font-bold mb-2">No properties found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any {getCurrentType().toLowerCase()} matching your criteria.
                </p>
                <button
                  onClick={() => window.history.back()}
                  className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Go Back
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default PropertyListingPage
