// // "use client"

// // import { useState, useEffect } from "react"
// // import { motion, AnimatePresence } from "framer-motion"
// // import { Search, MapPin, Building2, Filter } from "lucide-react"
// // import PropertyCard from "../components/PropertyCard"
// // import { properties } from "../data/mockData"

// // const Property = () => {
// //   const [filteredProperties, setFilteredProperties] = useState(properties)
// //   const [filters, setFilters] = useState({
// //     location: "",
// //     type: "",
// //     bedrooms: "",
// //     priceRange: "",
// //   })
// //   const [showFilters, setShowFilters] = useState(false)

// //   useEffect(() => {
// //     // Filter properties based on selected filters
// //     const filtered = properties.filter((property) => {
// //       let match = true

// //       if (filters.location && property.location.toLowerCase() !== filters.location.toLowerCase()) {
// //         match = false
// //       }

// //       if (filters.type && property.type.toLowerCase() !== filters.type.toLowerCase()) {
// //         match = false
// //       }

// //       if (filters.bedrooms && property.bedrooms !== filters.bedrooms) {
// //         match = false
// //       }

// //       if (filters.priceRange) {
// //         const [min, max] = filters.priceRange.split("-").map(Number)
// //         const price = Number.parseInt(property.price.replace(/[^0-9]/g, ""))
// //         if (price < min || (max && price > max)) {
// //           match = false
// //         }
// //       }

// //       return match
// //     })

// //     setFilteredProperties(filtered)
// //   }, [filters])

// //   const handleFilterChange = (e) => {
// //     const { name, value } = e.target
// //     setFilters((prev) => ({ ...prev, [name]: value }))
// //   }

// //   const clearFilters = () => {
// //     setFilters({
// //       location: "",
// //       type: "",
// //       bedrooms: "",
// //       priceRange: "",
// //     })
// //   }

// //   return (
// //     <>
// //       {/* Hero Section */}
// //       <section className="pt-32 pb-16 bg-gray-50">
// //         <div className="container mx-auto px-4 md:px-6">
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //             className="text-center max-w-3xl mx-auto"
// //           >
// //             <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Perfect Property</h1>
// //             <p className="text-xl text-gray-600 mb-8">
// //               Browse our extensive collection of properties to find your dream home
// //             </p>

// //             {/* Search Bar */}
// //             <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row gap-4">
// //               <div className="flex-grow">
// //                 <div className="relative">
// //                   <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
// //                   <input
// //                     type="text"
// //                     placeholder="Search by location..."
// //                     className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
// //                     value={filters.location}
// //                     onChange={(e) => setFilters((prev) => ({ ...prev, location: e.target.value }))}
// //                   />
// //                 </div>
// //               </div>
// //               <button className="bg-gray-200 p-2 rounded-lg md:hidden" onClick={() => setShowFilters(!showFilters)}>
// //                 <Filter className="h-5 w-5" />
// //               </button>
// //               <button className="btn-primary whitespace-nowrap">
// //                 <Search className="inline-block mr-2 h-4 w-4" /> Search
// //               </button>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Properties Section */}
// //       <section className="py-16">
// //         <div className="container mx-auto px-4 md:px-6">
// //           <div className="grid md:grid-cols-4 gap-8">
// //             {/* Filters - Desktop */}
// //             <div className="hidden md:block">
// //               <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
// //                 <h3 className="text-xl font-bold mb-6">Filters</h3>

// //                 <div className="space-y-6">
// //                   {/* Location Filter */}
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
// //                     <select
// //                       name="location"
// //                       value={filters.location}
// //                       onChange={handleFilterChange}
// //                       className="w-full p-2 border rounded-md"
// //                     >
// //                       <option value="">All Locations</option>
// //                       <option value="Bangalore">Bangalore</option>
// //                       <option value="Mumbai">Mumbai</option>
// //                       <option value="Delhi">Delhi</option>
// //                       <option value="Chennai">Chennai</option>
// //                     </select>
// //                   </div>

// //                   {/* Property Type Filter */}
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
// //                     <select
// //                       name="type"
// //                       value={filters.type}
// //                       onChange={handleFilterChange}
// //                       className="w-full p-2 border rounded-md"
// //                     >
// //                       <option value="">All Types</option>
// //                       <option value="Apartment">Apartment</option>
// //                       <option value="Villa">Villa</option>
// //                       <option value="House">House</option>
// //                       <option value="Plot">Plot</option>
// //                     </select>
// //                   </div>

// //                   {/* Bedrooms Filter */}
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
// //                     <select
// //                       name="bedrooms"
// //                       value={filters.bedrooms}
// //                       onChange={handleFilterChange}
// //                       className="w-full p-2 border rounded-md"
// //                     >
// //                       <option value="">Any</option>
// //                       <option value="1">1 BHK</option>
// //                       <option value="2">2 BHK</option>
// //                       <option value="3">3 BHK</option>
// //                       <option value="4+">4+ BHK</option>
// //                     </select>
// //                   </div>

// //                   {/* Price Range Filter */}
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
// //                     <select
// //                       name="priceRange"
// //                       value={filters.priceRange}
// //                       onChange={handleFilterChange}
// //                       className="w-full p-2 border rounded-md"
// //                     >
// //                       <option value="">Any Price</option>
// //                       <option value="0-2000000">Under ₹20 Lakhs</option>
// //                       <option value="2000000-5000000">₹20 Lakhs - ₹50 Lakhs</option>
// //                       <option value="5000000-10000000">₹50 Lakhs - ₹1 Crore</option>
// //                       <option value="10000000-20000000">₹1 Crore - ₹2 Crores</option>
// //                       <option value="20000000-">Above ₹2 Crores</option>
// //                     </select>
// //                   </div>

// //                   <button
// //                     onClick={clearFilters}
// //                     className="w-full py-2 text-primary font-medium border border-primary rounded-md hover:bg-primary/5 transition-colors"
// //                   >
// //                     Clear Filters
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Filters - Mobile */}
// //             <AnimatePresence>
// //               {showFilters && (
// //                 <motion.div
// //                   initial={{ height: 0, opacity: 0 }}
// //                   animate={{ height: "auto", opacity: 1 }}
// //                   exit={{ height: 0, opacity: 0 }}
// //                   className="md:hidden col-span-4 overflow-hidden"
// //                 >
// //                   <div className="bg-white p-6 rounded-lg shadow-md mb-6">
// //                     <h3 className="text-xl font-bold mb-6">Filters</h3>

// //                     <div className="space-y-6">
// //                       {/* Location Filter */}
// //                       <div>
// //                         <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
// //                         <select
// //                           name="location"
// //                           value={filters.location}
// //                           onChange={handleFilterChange}
// //                           className="w-full p-2 border rounded-md"
// //                         >
// //                           <option value="">All Locations</option>
// //                           <option value="Bangalore">Bangalore</option>
// //                           <option value="Mumbai">Mumbai</option>
// //                           <option value="Delhi">Delhi</option>
// //                           <option value="Chennai">Chennai</option>
// //                         </select>
// //                       </div>

// //                       {/* Property Type Filter */}
// //                       <div>
// //                         <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
// //                         <select
// //                           name="type"
// //                           value={filters.type}
// //                           onChange={handleFilterChange}
// //                           className="w-full p-2 border rounded-md"
// //                         >
// //                           <option value="">All Types</option>
// //                           <option value="Apartment">Apartment</option>
// //                           <option value="Villa">Villa</option>
// //                           <option value="House">House</option>
// //                           <option value="Plot">Plot</option>
// //                         </select>
// //                       </div>

// //                       {/* Bedrooms Filter */}
// //                       <div>
// //                         <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
// //                         <select
// //                           name="bedrooms"
// //                           value={filters.bedrooms}
// //                           onChange={handleFilterChange}
// //                           className="w-full p-2 border rounded-md"
// //                         >
// //                           <option value="">Any</option>
// //                           <option value="1">1 BHK</option>
// //                           <option value="2">2 BHK</option>
// //                           <option value="3">3 BHK</option>
// //                           <option value="4+">4+ BHK</option>
// //                         </select>
// //                       </div>

// //                       {/* Price Range Filter */}
// //                       <div>
// //                         <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
// //                         <select
// //                           name="priceRange"
// //                           value={filters.priceRange}
// //                           onChange={handleFilterChange}
// //                           className="w-full p-2 border rounded-md"
// //                         >
// //                           <option value="">Any Price</option>
// //                           <option value="0-2000000">Under ₹20 Lakhs</option>
// //                           <option value="2000000-5000000">₹20 Lakhs - ₹50 Lakhs</option>
// //                           <option value="5000000-10000000">₹50 Lakhs - ₹1 Crore</option>
// //                           <option value="10000000-20000000">₹1 Crore - ₹2 Crores</option>
// //                           <option value="20000000-">Above ₹2 Crores</option>
// //                         </select>
// //                       </div>

// //                       <button
// //                         onClick={clearFilters}
// //                         className="w-full py-2 text-primary font-medium border border-primary rounded-md hover:bg-primary/5 transition-colors"
// //                       >
// //                         Clear Filters
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               )}
// //             </AnimatePresence>

// //             {/* Properties Grid */}
// //             <div className="md:col-span-3">
// //               <div className="flex justify-between items-center mb-6">
// //                 <h2 className="text-2xl font-bold">{filteredProperties.length} Properties Found</h2>
// //                 <div className="flex items-center">
// //                   <span className="text-gray-600 mr-2">Sort by:</span>
// //                   <select className="p-2 border rounded-md">
// //                     <option>Newest</option>
// //                     <option>Price: Low to High</option>
// //                     <option>Price: High to Low</option>
// //                   </select>
// //                 </div>
// //               </div>

// //               {filteredProperties.length > 0 ? (
// //                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// //                   {filteredProperties.map((property) => (
// //                     <PropertyCard key={property.id} property={property} />
// //                   ))}
// //                 </div>
// //               ) : (
// //                 <div className="bg-white p-8 rounded-lg shadow-md text-center">
// //                   <Building2 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
// //                   <h3 className="text-xl font-bold mb-2">No properties found</h3>
// //                   <p className="text-gray-600 mb-4">We couldn't find any properties matching your search criteria.</p>
// //                   <button onClick={clearFilters} className="btn-primary">
// //                     Clear Filters
// //                   </button>
// //                 </div>
// //               )}

// //               {/* Pagination */}
// //               {filteredProperties.length > 0 && (
// //                 <div className="flex justify-center mt-12">
// //                   <nav className="flex items-center space-x-2">
// //                     <button className="px-3 py-1 rounded-md border hover:bg-gray-100">Previous</button>
// //                     <button className="px-3 py-1 rounded-md bg-primary text-white">1</button>
// //                     <button className="px-3 py-1 rounded-md border hover:bg-gray-100">2</button>
// //                     <button className="px-3 py-1 rounded-md border hover:bg-gray-100">3</button>
// //                     <button className="px-3 py-1 rounded-md border hover:bg-gray-100">Next</button>
// //                   </nav>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Call to Action */}
// //       <section className="py-16 bg-gray-50">
// //         <div className="container mx-auto px-4 md:px-6">
// //           <div className="bg-white rounded-xl p-8 md:p-12 shadow-md">
// //             <div className="grid md:grid-cols-2 gap-8 items-center">
// //               <div>
// //                 <h2 className="text-3xl font-bold mb-4">Can't find what you're looking for?</h2>
// //                 <p className="text-gray-600 mb-6">
// //                   Let us help you find the perfect property. Our expert team will search for properties that match your
// //                   requirements.
// //                 </p>
// //                 <button className="btn-primary">Contact Us</button>
// //               </div>
// //               <div className="hidden md:block">
// //                 <img
// //                   src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80"
// //                   alt="Contact Us"
// //                   className="rounded-lg w-full h-64 object-cover"
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   )
// // }

// // export default Property

// "use client"

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Search, MapPin, Building2, Filter, ChevronLeft, ChevronRight } from "lucide-react"
// import { properties } from "../data/mockData"

// // Property Card Component
// const PropertyCard = ({ property }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3 }}
//       className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
//     >
//       <div className="relative overflow-hidden h-48">
//         <img
//           src={property.image || "/placeholder.svg?height=400&width=600"}
//           alt={property.title}
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//         />
//         {property.status && (
//           <div className="absolute top-3 right-3">
//             <span className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-full">{property.status}</span>
//           </div>
//         )}
//       </div>
//       <div className="p-5">
//         <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors duration-300">
//           {property.title}
//         </h3>
//         <div className="flex items-center mb-3 text-gray-500">
//           <MapPin className="h-4 w-4 text-red-500 mr-1 flex-shrink-0" />
//           <span className="text-sm truncate">{property.location}</span>
//         </div>
//         <p className="text-gray-600 mb-4 line-clamp-2 text-sm">{property.description}</p>
//         <div className="flex justify-between items-center">
//           <div className="text-xl font-bold text-red-600">{property.price}</div>
//           <button className="px-3 py-1.5 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors duration-300">
//             View Details
//           </button>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// const Property = () => {
//   const [filteredProperties, setFilteredProperties] = useState(properties)
//   const [filters, setFilters] = useState({
//     location: "",
//     type: "",
//     bedrooms: "",
//     priceRange: "",
//   })
//   const [showFilters, setShowFilters] = useState(false)
//   const [currentPage, setCurrentPage] = useState(1)
//   const [sortOption, setSortOption] = useState("newest")
//   const propertiesPerPage = 6

//   // Filter and sort properties
//   useEffect(() => {
//     let filtered = [...properties]

//     // Apply filters
//     if (filters.location) {
//       filtered = filtered.filter((property) => property.location.toLowerCase().includes(filters.location.toLowerCase()))
//     }

//     if (filters.type) {
//       filtered = filtered.filter(
//         (property) => property.type && property.type.toLowerCase() === filters.type.toLowerCase(),
//       )
//     }

//     if (filters.bedrooms) {
//       if (filters.bedrooms === "4+") {
//         filtered = filtered.filter((property) => Number.parseInt(property.bedrooms) >= 4)
//       } else {
//         filtered = filtered.filter((property) => property.bedrooms === filters.bedrooms)
//       }
//     }

//     if (filters.priceRange) {
//       const [min, max] = filters.priceRange.split("-").map((val) => (val ? Number.parseInt(val) : null))
//       filtered = filtered.filter((property) => {
//         // Extract numeric value from price string (e.g., "₹1.2 Cr" -> 12000000)
//         let price = 0
//         if (property.price) {
//           const numericValue = property.price.match(/\d+(\.\d+)?/g)
//           if (numericValue) {
//             price = Number.parseFloat(numericValue[0])
//             // Convert to base value
//             if (property.price.includes("Cr")) price *= 10000000
//             else if (property.price.includes("Lakhs") || property.price.includes("Lakh")) price *= 100000
//           }
//         }

//         if (min !== null && max !== null) {
//           return price >= min && price <= max
//         } else if (min !== null) {
//           return price >= min
//         } else if (max !== null) {
//           return price <= max
//         }
//         return true
//       })
//     }

//     // Apply sorting
//     if (sortOption === "price-low-high") {
//       filtered.sort((a, b) => {
//         const priceA = Number.parseFloat(a.price.replace(/[^0-9.]/g, "")) || 0
//         const priceB = Number.parseFloat(b.price.replace(/[^0-9.]/g, "")) || 0
//         return priceA - priceB
//       })
//     } else if (sortOption === "price-high-low") {
//       filtered.sort((a, b) => {
//         const priceA = Number.parseFloat(a.price.replace(/[^0-9.]/g, "")) || 0
//         const priceB = Number.parseFloat(b.price.replace(/[^0-9.]/g, "")) || 0
//         return priceB - priceA
//       })
//     }
//     // For "newest", we keep the original order

//     setFilteredProperties(filtered)
//     setCurrentPage(1) // Reset to first page when filters change
//   }, [filters, sortOption])

//   // Get current properties for pagination
//   const indexOfLastProperty = currentPage * propertiesPerPage
//   const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage
//   const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty)
//   const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage)

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target
//     setFilters((prev) => ({ ...prev, [name]: value }))
//   }

//   const clearFilters = () => {
//     setFilters({
//       location: "",
//       type: "",
//       bedrooms: "",
//       priceRange: "",
//     })
//     setSortOption("newest")
//   }

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1)
//     }
//   }

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1)
//     }
//   }

//   const goToPage = (pageNumber) => {
//     setCurrentPage(pageNumber)
//   }

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="pt-24 pb-12 bg-gray-50">
//         <div className="container mx-auto px-4 md:px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center max-w-3xl mx-auto"
//           >
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Property</h1>
//             <p className="text-xl text-gray-600 mb-6">
//               Browse our extensive collection of properties to find your dream home
//             </p>

//             {/* Search Bar */}
//             <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row gap-4">
//               <div className="flex-grow">
//                 <div className="relative">
//                   <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                   <input
//                     type="text"
//                     placeholder="Search by location..."
//                     className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
//                     value={filters.location}
//                     onChange={(e) => setFilters((prev) => ({ ...prev, location: e.target.value }))}
//                   />
//                 </div>
//               </div>
//               <button className="bg-gray-200 p-2 rounded-lg md:hidden" onClick={() => setShowFilters(!showFilters)}>
//                 <Filter className="h-5 w-5" />
//               </button>
//               <button
//                 className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 whitespace-nowrap"
//                 onClick={() => {
//                   // This would typically trigger a search, but we're already filtering on change
//                 }}
//               >
//                 <Search className="inline-block mr-2 h-4 w-4" /> Search
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Properties Section */}
//       <section className="py-12">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="grid md:grid-cols-4 gap-8">
//             {/* Filters - Desktop */}
//             <div className="hidden md:block">
//               <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
//                 <h3 className="text-xl font-bold mb-6">Filters</h3>

//                 <div className="space-y-6">
//                   {/* Location Filter */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
//                     <select
//                       name="location"
//                       value={filters.location}
//                       onChange={handleFilterChange}
//                       className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                     >
//                       <option value="">All Locations</option>
//                       <option value="Bangalore">Bangalore</option>
//                       <option value="Whitefield">Whitefield</option>
//                       <option value="Indiranagar">Indiranagar</option>
//                       <option value="Koramangala">Koramangala</option>
//                       <option value="HSR Layout">HSR Layout</option>
//                       <option value="Sarjapur">Sarjapur</option>
//                       <option value="Electronic City">Electronic City</option>
//                     </select>
//                   </div>

//                   {/* Property Type Filter */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
//                     <select
//                       name="type"
//                       value={filters.type}
//                       onChange={handleFilterChange}
//                       className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                     >
//                       <option value="">All Types</option>
//                       <option value="Apartment">Apartment</option>
//                       <option value="Villa">Villa</option>
//                       <option value="House">House</option>
//                       <option value="Plot">Plot</option>
//                     </select>
//                   </div>

//                   {/* Bedrooms Filter */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
//                     <select
//                       name="bedrooms"
//                       value={filters.bedrooms}
//                       onChange={handleFilterChange}
//                       className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                     >
//                       <option value="">Any</option>
//                       <option value="1">1 BHK</option>
//                       <option value="2">2 BHK</option>
//                       <option value="3">3 BHK</option>
//                       <option value="4+">4+ BHK</option>
//                     </select>
//                   </div>

//                   {/* Price Range Filter */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
//                     <select
//                       name="priceRange"
//                       value={filters.priceRange}
//                       onChange={handleFilterChange}
//                       className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                     >
//                       <option value="">Any Price</option>
//                       <option value="0-2000000">Under ₹20 Lakhs</option>
//                       <option value="2000000-5000000">₹20 Lakhs - ₹50 Lakhs</option>
//                       <option value="5000000-10000000">₹50 Lakhs - ₹1 Crore</option>
//                       <option value="10000000-20000000">₹1 Crore - ₹2 Crores</option>
//                       <option value="20000000-">Above ₹2 Crores</option>
//                     </select>
//                   </div>

//                   <button
//                     onClick={clearFilters}
//                     className="w-full py-2 text-red-600 font-medium border border-red-600 rounded-md hover:bg-red-50 transition-colors"
//                   >
//                     Clear Filters
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Filters - Mobile */}
//             <AnimatePresence>
//               {showFilters && (
//                 <motion.div
//                   initial={{ height: 0, opacity: 0 }}
//                   animate={{ height: "auto", opacity: 1 }}
//                   exit={{ height: 0, opacity: 0 }}
//                   className="md:hidden col-span-4 overflow-hidden"
//                 >
//                   <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//                     <h3 className="text-xl font-bold mb-6">Filters</h3>

//                     <div className="space-y-6">
//                       {/* Location Filter */}
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
//                         <select
//                           name="location"
//                           value={filters.location}
//                           onChange={handleFilterChange}
//                           className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                         >
//                           <option value="">All Locations</option>
//                           <option value="Bangalore">Bangalore</option>
//                           <option value="Whitefield">Whitefield</option>
//                           <option value="Indiranagar">Indiranagar</option>
//                           <option value="Koramangala">Koramangala</option>
//                           <option value="HSR Layout">HSR Layout</option>
//                           <option value="Sarjapur">Sarjapur</option>
//                           <option value="Electronic City">Electronic City</option>
//                         </select>
//                       </div>

//                       {/* Property Type Filter */}
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
//                         <select
//                           name="type"
//                           value={filters.type}
//                           onChange={handleFilterChange}
//                           className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                         >
//                           <option value="">All Types</option>
//                           <option value="Apartment">Apartment</option>
//                           <option value="Villa">Villa</option>
//                           <option value="House">House</option>
//                           <option value="Plot">Plot</option>
//                         </select>
//                       </div>

//                       {/* Bedrooms Filter */}
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
//                         <select
//                           name="bedrooms"
//                           value={filters.bedrooms}
//                           onChange={handleFilterChange}
//                           className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                         >
//                           <option value="">Any</option>
//                           <option value="1">1 BHK</option>
//                           <option value="2">2 BHK</option>
//                           <option value="3">3 BHK</option>
//                           <option value="4+">4+ BHK</option>
//                         </select>
//                       </div>

//                       {/* Price Range Filter */}
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
//                         <select
//                           name="priceRange"
//                           value={filters.priceRange}
//                           onChange={handleFilterChange}
//                           className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                         >
//                           <option value="">Any Price</option>
//                           <option value="0-2000000">Under ₹20 Lakhs</option>
//                           <option value="2000000-5000000">₹20 Lakhs - ₹50 Lakhs</option>
//                           <option value="5000000-10000000">₹50 Lakhs - ₹1 Crore</option>
//                           <option value="10000000-20000000">₹1 Crore - ₹2 Crores</option>
//                           <option value="20000000-">Above ₹2 Crores</option>
//                         </select>
//                       </div>

//                       <button
//                         onClick={clearFilters}
//                         className="w-full py-2 text-red-600 font-medium border border-red-600 rounded-md hover:bg-red-50 transition-colors"
//                       >
//                         Clear Filters
//                       </button>
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             {/* Properties Grid */}
//             <div className="md:col-span-3">
//               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
//                 <h2 className="text-2xl font-bold">{filteredProperties.length} Properties Found</h2>
//                 <div className="flex items-center">
//                   <span className="text-gray-600 mr-2">Sort by:</span>
//                   <select
//                     className="p-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                     value={sortOption}
//                     onChange={(e) => setSortOption(e.target.value)}
//                   >
//                     <option value="newest">Newest</option>
//                     <option value="price-low-high">Price: Low to High</option>
//                     <option value="price-high-low">Price: High to Low</option>
//                   </select>
//                 </div>
//               </div>

//               {currentProperties.length > 0 ? (
//                 <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
//                   {currentProperties.map((property) => (
//                     <PropertyCard key={property.id} property={property} />
//                   ))}
//                 </div>
//               ) : (
//                 <div className="bg-white p-8 rounded-lg shadow-md text-center">
//                   <Building2 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
//                   <h3 className="text-xl font-bold mb-2">No properties found</h3>
//                   <p className="text-gray-600 mb-4">We couldn't find any properties matching your search criteria.</p>
//                   <button
//                     onClick={clearFilters}
//                     className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
//                   >
//                     Clear Filters
//                   </button>
//                 </div>
//               )}

//               {/* Pagination */}
//               {filteredProperties.length > 0 && (
//                 <div className="flex justify-center mt-10">
//                   <nav className="flex items-center space-x-2">
//                     <button
//                       onClick={handlePrevPage}
//                       disabled={currentPage === 1}
//                       className={`flex items-center px-3 py-1 rounded-md border ${
//                         currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-100 text-gray-700"
//                       }`}
//                     >
//                       <ChevronLeft className="h-4 w-4 mr-1" /> Previous
//                     </button>

//                     {Array.from({ length: totalPages }, (_, i) => i + 1)
//                       .filter((page) => {
//                         // Show first page, last page, current page, and pages around current page
//                         return page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)
//                       })
//                       .map((page, index, array) => {
//                         // Add ellipsis if there are gaps
//                         if (index > 0 && array[index - 1] !== page - 1) {
//                           return (
//                             <span key={`ellipsis-${page}`} className="px-3 py-1">
//                               ...
//                             </span>
//                           )
//                         }

//                         return (
//                           <button
//                             key={page}
//                             onClick={() => goToPage(page)}
//                             className={`px-3 py-1 rounded-md ${
//                               currentPage === page ? "bg-red-500 text-white" : "border hover:bg-gray-100"
//                             }`}
//                           >
//                             {page}
//                           </button>
//                         )
//                       })}

//                     <button
//                       onClick={handleNextPage}
//                       disabled={currentPage === totalPages}
//                       className={`flex items-center px-3 py-1 rounded-md border ${
//                         currentPage === totalPages
//                           ? "text-gray-400 cursor-not-allowed"
//                           : "hover:bg-gray-100 text-gray-700"
//                       }`}
//                     >
//                       Next <ChevronRight className="h-4 w-4 ml-1" />
//                     </button>
//                   </nav>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-12 bg-gray-50">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="bg-white rounded-xl p-8 md:p-12 shadow-md">
//             <div className="grid md:grid-cols-2 gap-8 items-center">
//               <div>
//                 <h2 className="text-3xl font-bold mb-4">Can't find what you're looking for?</h2>
//                 <p className="text-gray-600 mb-6">
//                   Let us help you find the perfect property. Our expert team will search for properties that match your
//                   requirements.
//                 </p>
//                 <button className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300">
//                   Contact Us
//                 </button>
//               </div>
//               <div className="hidden md:block">
//                 <img
//                   src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80"
//                   alt="Contact Us"
//                   className="rounded-lg w-full h-64 object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Property

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Search,
  MapPin,
  Building2,
  Filter,
  ChevronLeft,
  ChevronRight,
  Home,
  Tag,
  Bath,
  BedDouble,
  X,
  ArrowRight,
} from "lucide-react"
import { Link } from "react-router-dom"

// Property Card Component
const PropertyCard = ({ property }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={property.image || "/placeholder.svg?height=400&width=600"}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {property.status && (
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-full">{property.status}</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors duration-300">
          {property.title}
        </h3>
        <div className="flex items-center mb-3 text-gray-500">
          <MapPin className="h-4 w-4 text-red-500 mr-1 flex-shrink-0" />
          <span className="text-sm truncate">{property.location}</span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2 text-sm">{property.description}</p>
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-red-600">{property.price}</div>
          <button className="px-3 py-1.5 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors duration-300">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  )
}

const Property = () => {
  // Property data from reference websites
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
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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

  const [filteredProperties, setFilteredProperties] = useState(propertyListings)
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    bedrooms: "",
    priceRange: "",
  })
  const [showFilters, setShowFilters] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [sortOption, setSortOption] = useState("newest")
  const propertiesPerPage = 6

  // Filter and sort properties
  useEffect(() => {
    let filtered = [...propertyListings]

    // Apply filters
    if (filters.location) {
      filtered = filtered.filter((property) => property.location.toLowerCase().includes(filters.location.toLowerCase()))
    }

    if (filters.type) {
      filtered = filtered.filter(
        (property) => property.type && property.type.toLowerCase() === filters.type.toLowerCase(),
      )
    }

    if (filters.bedrooms) {
      if (filters.bedrooms === "4+") {
        filtered = filtered.filter((property) => Number.parseInt(property.bedrooms) >= 4)
      } else {
        filtered = filtered.filter((property) => property.bedrooms === filters.bedrooms)
      }
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split("-").map((val) => (val ? Number.parseInt(val) : null))
      filtered = filtered.filter((property) => {
        // Extract numeric value from price string (e.g., "₹1.2 Cr" -> 12000000)
        let price = 0
        if (property.price) {
          const numericValue = property.price.match(/\d+(\.\d+)?/g)
          if (numericValue) {
            price = Number.parseFloat(numericValue[0])
            // Convert to base value
            if (property.price.includes("Cr")) price *= 10000000
            else if (property.price.includes("Lakhs") || property.price.includes("Lakh")) price *= 100000
          }
        }

        if (min !== null && max !== null) {
          return price >= min && price <= max
        } else if (min !== null) {
          return price >= min
        } else if (max !== null) {
          return price <= max
        }
        return true
      })
    }

    // Apply sorting
    if (sortOption === "price-low-high") {
      filtered.sort((a, b) => {
        const priceA = Number.parseFloat(a.price.replace(/[^0-9.]/g, "")) || 0
        const priceB = Number.parseFloat(b.price.replace(/[^0-9.]/g, "")) || 0
        return priceA - priceB
      })
    } else if (sortOption === "price-high-low") {
      filtered.sort((a, b) => {
        const priceA = Number.parseFloat(a.price.replace(/[^0-9.]/g, "")) || 0
        const priceB = Number.parseFloat(b.price.replace(/[^0-9.]/g, "")) || 0
        return priceB - priceA
      })
    }
    // For "newest", we keep the original order

    setFilteredProperties(filtered)
    setCurrentPage(1) // Reset to first page when filters change
  }, [filters, sortOption])

  // Get current properties for pagination
  const indexOfLastProperty = currentPage * propertiesPerPage
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage
  const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty)
  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage)

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters((prev) => ({ ...prev, [name]: value }))
  }

  const clearFilters = () => {
    setFilters({
      location: "",
      type: "",
      bedrooms: "",
      priceRange: "",
    })
    setSortOption("newest")
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gray-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/20">
              Explore Properties
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Property</h1>
            <p className="text-xl text-gray-300 mb-6">
              Browse our extensive collection of properties to find your dream home in Karnataka
            </p>

            {/* Search Bar */}
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-md flex flex-col md:flex-row gap-4 border border-white/20">
              <div className="flex-grow">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by location..."
                    className="w-full pl-10 pr-4 py-2 bg-white/90 backdrop-blur-sm border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={filters.location}
                    onChange={(e) => setFilters((prev) => ({ ...prev, location: e.target.value }))}
                  />
                </div>
              </div>
              <button className="bg-gray-200 p-2 rounded-lg md:hidden" onClick={() => setShowFilters(!showFilters)}>
                <Filter className="h-5 w-5 text-gray-700" />
              </button>
              <button
                className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                onClick={() => {
                  // This would typically trigger a search, but we're already filtering on change
                }}
              >
                <Search className="inline-block mr-2 h-4 w-4" /> Search
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Filters - Desktop */}
            <div className="hidden md:block">
              <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="h-5 w-5 text-red-500" />
                  <h3 className="text-xl font-bold">Filters</h3>
                </div>

                <div className="space-y-6">
                  {/* Location Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <select
                      name="location"
                      value={filters.location}
                      onChange={handleFilterChange}
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">All Locations</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Whitefield">Whitefield</option>
                      <option value="Indiranagar">Indiranagar</option>
                      <option value="Koramangala">Koramangala</option>
                      <option value="HSR Layout">HSR Layout</option>
                      <option value="Sarjapur">Sarjapur</option>
                      <option value="Electronic City">Electronic City</option>
                    </select>
                  </div>

                  {/* Property Type Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                    <select
                      name="type"
                      value={filters.type}
                      onChange={handleFilterChange}
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">All Types</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Villa">Villa</option>
                      <option value="House">House</option>
                      <option value="Plot">Plot</option>
                      <option value="Farmland">Farmland</option>
                    </select>
                  </div>

                  {/* Bedrooms Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                    <select
                      name="bedrooms"
                      value={filters.bedrooms}
                      onChange={handleFilterChange}
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Any</option>
                      <option value="1">1 BHK</option>
                      <option value="2">2 BHK</option>
                      <option value="3">3 BHK</option>
                      <option value="4+">4+ BHK</option>
                    </select>
                  </div>

                  {/* Price Range Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                    <select
                      name="priceRange"
                      value={filters.priceRange}
                      onChange={handleFilterChange}
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Any Price</option>
                      <option value="0-2000000">Under ₹20 Lakhs</option>
                      <option value="2000000-5000000">₹20 Lakhs - ₹50 Lakhs</option>
                      <option value="5000000-10000000">₹50 Lakhs - ₹1 Crore</option>
                      <option value="10000000-20000000">₹1 Crore - ₹2 Crores</option>
                      <option value="20000000-">Above ₹2 Crores</option>
                    </select>
                  </div>

                  <button
                    onClick={clearFilters}
                    className="w-full py-2 text-red-600 font-medium border border-red-600 rounded-md hover:bg-red-50 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>

            {/* Filters - Mobile */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="md:hidden col-span-4 overflow-hidden"
                >
                  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <Filter className="h-5 w-5 text-red-500" />
                        <h3 className="text-xl font-bold">Filters</h3>
                      </div>
                      <button onClick={() => setShowFilters(false)}>
                        <X className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="space-y-6">
                      {/* Location Filter */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                        <select
                          name="location"
                          value={filters.location}
                          onChange={handleFilterChange}
                          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        >
                          <option value="">All Locations</option>
                          <option value="Bangalore">Bangalore</option>
                          <option value="Whitefield">Whitefield</option>
                          <option value="Indiranagar">Indiranagar</option>
                          <option value="Koramangala">Koramangala</option>
                          <option value="HSR Layout">HSR Layout</option>
                          <option value="Sarjapur">Sarjapur</option>
                          <option value="Electronic City">Electronic City</option>
                        </select>
                      </div>

                      {/* Property Type Filter */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                        <select
                          name="type"
                          value={filters.type}
                          onChange={handleFilterChange}
                          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        >
                          <option value="">All Types</option>
                          <option value="Apartment">Apartment</option>
                          <option value="Villa">Villa</option>
                          <option value="House">House</option>
                          <option value="Plot">Plot</option>
                          <option value="Farmland">Farmland</option>
                        </select>
                      </div>

                      {/* Bedrooms Filter */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                        <select
                          name="bedrooms"
                          value={filters.bedrooms}
                          onChange={handleFilterChange}
                          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        >
                          <option value="">Any</option>
                          <option value="1">1 BHK</option>
                          <option value="2">2 BHK</option>
                          <option value="3">3 BHK</option>
                          <option value="4+">4+ BHK</option>
                        </select>
                      </div>

                      {/* Price Range Filter */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                        <select
                          name="priceRange"
                          value={filters.priceRange}
                          onChange={handleFilterChange}
                          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        >
                          <option value="">Any Price</option>
                          <option value="0-2000000">Under ₹20 Lakhs</option>
                          <option value="2000000-5000000">₹20 Lakhs - ₹50 Lakhs</option>
                          <option value="5000000-10000000">₹50 Lakhs - ₹1 Crore</option>
                          <option value="10000000-20000000">₹1 Crore - ₹2 Crores</option>
                          <option value="20000000-">Above ₹2 Crores</option>
                        </select>
                      </div>

                      <button
                        onClick={clearFilters}
                        className="w-full py-2 text-red-600 font-medium border border-red-600 rounded-md hover:bg-red-50 transition-colors"
                      >
                        Clear Filters
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Properties Grid */}
            <div className="md:col-span-3">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Home className="h-6 w-6 text-red-500" />
                  {filteredProperties.length} Properties Found
                </h2>
                <div className="flex items-center">
                  <span className="text-gray-600 mr-2">Sort by:</span>
                  <select
                    className="p-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="newest">Newest</option>
                    <option value="price-low-high">Price: Low to High</option>
                    <option value="price-high-low">Price: High to Low</option>
                  </select>
                </div>
              </div>

              {currentProperties.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {currentProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <Building2 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">No properties found</h3>
                  <p className="text-gray-600 mb-4">We couldn't find any properties matching your search criteria.</p>
                  <button
                    onClick={clearFilters}
                    className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Clear Filters
                  </button>
                </div>
              )}

              {/* Pagination */}
              {filteredProperties.length > 0 && (
                <div className="flex justify-center mt-10">
                  <nav className="flex items-center space-x-2">
                    <button
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                      className={`flex items-center px-3 py-1 rounded-md border ${
                        currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      <ChevronLeft className="h-4 w-4 mr-1" /> Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                      .filter((page) => {
                        // Show first page, last page, current page, and pages around current page
                        return page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)
                      })
                      .map((page, index, array) => {
                        // Add ellipsis if there are gaps
                        if (index > 0 && array[index - 1] !== page - 1) {
                          return (
                            <span key={`ellipsis-${page}`} className="px-3 py-1">
                              ...
                            </span>
                          )
                        }

                        return (
                          <button
                            key={page}
                            onClick={() => goToPage(page)}
                            className={`px-3 py-1 rounded-md ${
                              currentPage === page ? "bg-red-500 text-white" : "border hover:bg-gray-100"
                            }`}
                          >
                            {page}
                          </button>
                        )
                      })}

                    <button
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                      className={`flex items-center px-3 py-1 rounded-md border ${
                        currentPage === totalPages
                          ? "text-gray-400 cursor-not-allowed"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      Next <ChevronRight className="h-4 w-4 ml-1" />
                    </button>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Property Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Properties</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer the best selection of properties in Karnataka with premium features and amenities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BedDouble className="h-10 w-10 text-white" />,
                title: "Spacious Layouts",
                description:
                  "Our properties feature thoughtfully designed layouts that maximize space and comfort for modern living.",
                color: "bg-gradient-to-br from-red-500 to-red-600",
              },
              {
                icon: <Tag className="h-10 w-10 text-white" />,
                title: "Premium Locations",
                description:
                  "All our properties are situated in prime locations with excellent connectivity and nearby amenities.",
                color: "bg-gradient-to-br from-blue-500 to-blue-600",
              },
              {
                icon: <Bath className="h-10 w-10 text-white" />,
                title: "Quality Finishes",
                description:
                  "Experience luxury living with high-quality finishes, premium fixtures, and modern design elements.",
                color: "bg-gradient-to-br from-green-500 to-green-600",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group"
              >
                <div
                  className={`${feature.color} rounded-xl p-4 inline-flex mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Can't find what you're looking for?</h2>
              <p className="text-gray-300 mb-6">
                Let us help you find the perfect property. Our expert team will search for properties that match your
                requirements.
              </p>
              <Link
                to="/contact"
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2 group"
              >
                Contact Us
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80"
                alt="Contact Us"
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Property
