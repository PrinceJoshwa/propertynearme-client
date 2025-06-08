// "use client"
// import { motion } from "framer-motion"
// import { Search, MapPin, Building, Tag } from "lucide-react"
// import { Link } from "react-router-dom"

// const PropertyHero = () => {
//   return (
//     <section className="relative h-screen flex items-center">
//       {/* Background with overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80')",
//         }}
//       ></div>

//       {/* Content */}
//       <div className="container mx-auto px-4 md:px-6 relative z-20">
//         <div className="grid md:grid-cols-2 gap-8 items-center">
//           <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
//               Find Your Dream Home in Karnataka
//             </h1>
//             <p className="text-xl text-gray-200 mb-8">
//               Discover premium residential properties in Bangalore's most sought-after locations
//             </p>

//             <div className="flex flex-wrap gap-4">
//               <Link
//                 to="/property"
//                 className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
//               >
//                 Browse Properties
//               </Link>
//               <Link
//                 to="/about"
//                 className="px-8 py-3 bg-white text-gray-900 rounded-lg font-bold border border-white hover:bg-transparent hover:text-white transition-all duration-300"
//               >
//                 Learn More
//               </Link>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="bg-white p-6 rounded-xl shadow-lg"
//           >
//             <h2 className="text-2xl font-bold mb-4 text-center">Find Properties</h2>

//             <div className="space-y-4 mb-6">
//               <div className="relative">
//                 <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 <select className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
//                   <option value="">Select Location</option>
//                   <option value="Bangalore">Bangalore</option>
//                   <option value="Whitefield">Whitefield</option>
//                   <option value="Electronic City">Electronic City</option>
//                   <option value="Sarjapur">Sarjapur Road</option>
//                   <option value="HSR Layout">HSR Layout</option>
//                 </select>
//               </div>

//               <div className="relative">
//                 <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 <select className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
//                   <option value="">Property Type</option>
//                   <option value="Apartment">Apartment</option>
//                   <option value="Villa">Villa</option>
//                   <option value="Plot">Plot</option>
//                   <option value="Farmland">Farmland</option>
//                   <option value="Commercial">Commercial</option>
//                 </select>
//               </div>

//               <div className="relative">
//                 <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 <select className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
//                   <option value="">Budget</option>
//                   <option value="0-5000000">Under ₹50 Lakhs</option>
//                   <option value="5000000-10000000">₹50 Lakhs - ₹1 Crore</option>
//                   <option value="10000000-20000000">₹1 Crore - ₹2 Crores</option>
//                   <option value="20000000-">Above ₹2 Crores</option>
//                 </select>
//               </div>
//             </div>

//             <Link
//               to="/property"
//               className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
//             >
//               <Search className="mr-2 h-5 w-5" /> Search Properties
//             </Link>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 1 }}
//         className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
//       >
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
//           className="flex flex-col items-center"
//         >
//           <span className="text-white text-sm mb-2">Scroll Down</span>
//           <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//           </svg>
//         </motion.div>
//       </motion.div>
//     </section>
//   )
// }

// export default PropertyHero

"use client"
import { motion } from "framer-motion"
import { Search, MapPin, Building, Tag, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const PropertyHero = () => {
  return (
    <section className="relative h-screen flex items-center pt-64 md:pt-24">
      {/* Background with overlay and gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80')",
        }}
      ></div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-red-500/20 rounded-full blur-3xl z-5"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl z-5"></div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-black/30 to-transparent backdrop-blur-sm p-8 rounded-2xl"
          >
            {/* <div className="inline-block px-4 py-1.5 bg-red-500/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-red-500/30">
              Find Your Dream Properties
            </div> */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Discover Perfect Propertie
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Premium residential and commercial properties in Bangalore's most sought-after locations
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/property"
                className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 group flex items-center"
              >
                Browse Properties
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-bold border border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20"
          >
            <h2 className="text-2xl font-bold mb-4 text-center text-white">Find Properties</h2>

            <div className="space-y-4 mb-6">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select className="w-full pl-10 pr-4 py-3 bg-white/90 backdrop-blur-sm border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                  <option value="">Select Location</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Whitefield">Whitefield</option>
                  <option value="Electronic City">Electronic City</option>
                  <option value="Sarjapur">Sarjapur Road</option>
                  <option value="HSR Layout">HSR Layout</option>
                </select>
              </div>

              <div className="relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select className="w-full pl-10 pr-4 py-3 bg-white/90 backdrop-blur-sm border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                  <option value="">Property Type</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Villa">Villa</option>
                  <option value="Plot">Plot</option>
                  <option value="Farmland">Farmland</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>

              <div className="relative">
                <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select className="w-full pl-10 pr-4 py-3 bg-white/90 backdrop-blur-sm border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                  <option value="">Budget</option>
                  <option value="0-5000000">Under ₹50 Lakhs</option>
                  <option value="5000000-10000000">₹50 Lakhs - ₹1 Crore</option>
                  <option value="10000000-20000000">₹1 Crore - ₹2 Crores</option>
                  <option value="20000000-">Above ₹2 Crores</option>
                </select>
              </div>
            </div>

            <Link
              to="/property"
              className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Search className="mr-2 h-5 w-5" /> Search Properties
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <span className="text-white text-sm mb-2">Scroll Down</span>
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default PropertyHero
