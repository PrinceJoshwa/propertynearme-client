"use client"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const propertyTypes = [
  {
    name: "Apartments",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    link: "/property?type=Apartment",
    description: "Modern living spaces in prime locations",
  },
  {
    name: "Villas",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    link: "/property?type=Villa",
    description: "Luxury homes with premium amenities",
  },
  {
    name: "Plots",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    link: "/property?type=Plot",
    description: "Build your dream home your way",
  },
  {
    name: "Farmlands",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    link: "/property?type=Farmland",
    description: "Expansive agricultural properties",
  },
  {
    name: "Commercial",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    link: "/property?type=Commercial",
    description: "Prime spaces for your business",
  },
]

const PropertyTypeSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse By Property Type</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of properties to find what suits your needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {propertyTypes.map((type, index) => (
            <motion.div
              key={type.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link to={type.link} className="block h-full">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={type.image || "/placeholder.svg"}
                      alt={type.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors duration-300">
                      {type.name}
                    </h3>
                    <p className="text-gray-600 text-sm flex-grow">{type.description}</p>
                    <div className="mt-4 text-red-600 text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Properties
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PropertyTypeSection
