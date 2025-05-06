"use client"

import { motion } from "framer-motion"
import { MapPin, Bed, Bath, Square } from "lucide-react"
import { Link } from "react-router-dom"

const PropertyCard = ({ property }) => {
  return (
    <motion.div whileHover={{ y: -5 }} className="bg-white rounded-xl overflow-hidden shadow-md">
      <div className="relative">
        <img src={property.image || "/placeholder.svg"} alt={property.title} className="w-full h-50 object-cover" />
        <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
          {property.status}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center mb-2">
          <MapPin className="h-4 w-4 text-gray-500 mr-1" />
          <span className="text-gray-600 text-sm">{property.location}</span>
        </div>
        <h3 className="text-lg font-bold mb-2">{property.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{property.description}</p>

        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <Bed className="h-4 w-4 text-gray-500 mr-1" />
            <span className="text-gray-600 text-sm">{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 text-gray-500 mr-1" />
            <span className="text-gray-600 text-sm">{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 text-gray-500 mr-1" />
            <span className="text-gray-600 text-sm">{property.area} acre</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-primary">{property.price}</div>
          <Link to={`/property/${property.id}`} className="text-primary font-medium hover:underline">
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default PropertyCard

