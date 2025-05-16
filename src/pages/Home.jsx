// // // "use client"

// // // import { useRef, useEffect } from "react"
// // // import { Link } from "react-router-dom"
// // // import { motion, useInView, useAnimation } from "framer-motion"
// // // import { Search, ArrowRight } from "lucide-react"
// // // import PropertyCard from "../components/PropertyCard"
// // // import DeveloperLogo from "../components/DeveloperLogo"
// // // import { featuredProperties, developers } from "../data/mockData"

// // // const Home = () => {
// // //   const controls = useAnimation()
// // //   const ref = useRef(null)
// // //   const isInView = useInView(ref, { once: true, amount: 0.3 })

// // //   useEffect(() => {
// // //     if (isInView) {
// // //       controls.start("visible")
// // //     }
// // //   }, [controls, isInView])

// // //   return (
// // //     <>
// // //       {/* Hero Section */}
// // //       <section className="relative h-screen flex items-center">
// // //         <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
// // //         <div
// // //           className="absolute inset-0 bg-cover bg-center"
// // //           style={{
// // //             backgroundImage:
// // //               "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80')",
// // //           }}
// // //         ></div>

// // //         <div className="container mx-auto px-4 md:px-6 relative z-20">
// // //           <div className="grid md:grid-cols-2 gap-8 items-center">
// // //             <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
// // //               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Find Your Dream Properties Today</h1>
// // //               <p className="text-xl text-gray-200 mb-8">
// // //                 Looking for residential property in Bangalore? We've got you covered with the best properties in prime
// // //                 locations.
// // //               </p>

// // //               <div className="flex flex-wrap gap-4">
// // //                 <Link to="/property" className="btn-primary">
// // //                   Browse Properties
// // //                 </Link>
// // //                 <Link to="/about" className="btn-secondary">
// // //                   Learn More
// // //                 </Link>
// // //               </div>
// // //             </motion.div>

// // //             <motion.div
// // //               initial={{ opacity: 0, x: 50 }}
// // //               animate={{ opacity: 1, x: 0 }}
// // //               transition={{ duration: 0.8, delay: 0.3 }}
// // //               className="bg-white p-6 rounded-xl shadow-lg"
// // //             >
// // //               <h2 className="text-2xl font-bold mb-4 text-center">Find Properties</h2>
// // //               <p className="text-gray-600 mb-6 text-center">
// // //                 Type of property: Residential or commercial
// // //                 <br />
// // //                 Purpose of purchase: Residential or investment
// // //                 <br />
// // //                 BHK's: 1, 2, 3, 4+
// // //               </p>
// // //               <div className="flex justify-center">
// // //                 <Link to="/property" className="btn-primary flex items-center">
// // //                   Search Now <ArrowRight className="ml-2 h-5 w-5" />
// // //                 </Link>
// // //               </div>
// // //             </motion.div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Property Categories */}
// // //       <section className="py-16 bg-gray-50">
// // //         <div className="container mx-auto px-4 md:px-6">
// // //           <div className="text-center mb-12">
// // //             <h2 className="section-title">Browse By Property Type</h2>
// // //             <p className="section-subtitle mx-auto">
// // //               Explore our wide range of properties to find what suits your needs
// // //             </p>
// // //           </div>

// // //           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
// // //             {["Apartments", "Villas", "Plots", "Commercial", "PG/Hostels", "Farmlands"].map((category, index) => (
// // //               <motion.div
// // //                 key={category}
// // //                 initial={{ opacity: 0, y: 20 }}
// // //                 animate={{ opacity: 1, y: 0 }}
// // //                 transition={{ duration: 0.5, delay: index * 0.1 }}
// // //                 className="bg-amber-100 rounded-lg p-4 text-center cursor-pointer hover:shadow-md transition-all"
// // //               >
// // //                 <div className="font-medium">{category}</div>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Featured Properties Carousel */}
// // //       <section className="py-16">
// // //         <div className="container mx-auto px-4 md:px-6">
// // //           <div className="flex justify-between items-center mb-8">
// // //             <div>
// // //               <h2 className="section-title">Featured Properties</h2>
// // //               <p className="text-gray-600">Handpicked properties for you</p>
// // //             </div>
// // //             <Link to="/property" className="text-primary font-medium flex items-center">
// // //               Explore more <ArrowRight className="ml-1 h-4 w-4" />
// // //             </Link>
// // //           </div>

// // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full ">
// // //             {featuredProperties.slice(0, 3).map((property) => (
// // //               <PropertyCard key={property.id} property={property} />
// // //             ))}
// // //           </div>


// // //           {/* <div className="text-center mt-10">
// // //             <p className="text-lg text-gray-600 mb-4">This should be Carousel slide</p>
// // //           </div> */}
// // //         </div>
// // //       </section>

// // //       {/* CTA Banner */}
// // //       <section className="py-8 bg-purple-100">
// // //         <div className="container mx-auto px-4 md:px-6">
// // //           <div className="bg-gradient-to-r from-green-800 to-green-600 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
// // //             <div className="text-white mb-4 md:mb-0">
// // //               <h3 className="text-2xl font-bold">Looking for Land developments?</h3>
// // //               <p>Get Free Consultation From Our Agent</p>
// // //             </div>
// // //             <div className="flex items-center">
// // //               <div className="text-white mr-4">
// // //                 {/* <p>+91 9732300007</p> */}
// // //               </div>
// // //               <button className="bg-white text-green-800 px-4 py-2 rounded font-medium">Get Started</button>
// // //             </div>
// // //           </div 
// // //           >
// // //         </div>
// // //       </section>

// // //       {/* Upcoming Projects */}
// // //       <section className="py-16 bg-gray-50" ref={ref}>
// // //         <div className="container mx-auto px-4 md:px-6">
// // //           <div className="text-center mb-12">
// // //             <h2 className="section-title">Upcoming Apartments</h2>
// // //             <p className="section-subtitle mx-auto">Hot Locations in Bangalore</p>
// // //           </div>

// // //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // //             <motion.div
// // //               variants={{
// // //                 hidden: { opacity: 0 },
// // //                 visible: { opacity: 1 },
// // //               }}
// // //               initial="hidden"
// // //               animate={controls}
// // //               transition={{ duration: 0.5, delay: 0.2 }}
// // //               className="col-span-2"
// // //             >
// // //               {/* <div className="bg-white rounded-lg overflow-hidden shadow-md">
// // //                 <div className="grid grid-cols-2 gap-2 p-2">
// // //                   {[1, 2, 3, 4].map((item) => (
// // //                     <div key={item} className="relative h-40 overflow-hidden rounded-lg">
// // //                       <img
// // //                         src={`https://images.unsplash.com/photo-156051888${item + 3000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
// // //                         alt={`Location ${item}`}
// // //                         className="w-full h-full object-cover"
// // //                       />
// // //                       <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-3">
// // //                         <h3 className="text-white font-medium text-sm">Sarjapur Road</h3>
// // //                         <p className="text-white text-xs">Luxury Homes</p>
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div> */}
// // //               <div className="bg-white rounded-lg overflow-hidden shadow-md">
// // //                 <div className="grid grid-cols-2 gap-2 p-2">
// // //                   {[
// // //                     { id: 1, location: "Goravalahalli yelachenahalli", type: "Exclusive Property", image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1743606769/7_kgm7rs.png" },
// // //                     { id: 2, location: "Kolaturu", type: "Exclusive Property", image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1743606769/8_b0spvp.png" },
// // //                     { id: 3, location: "Irabanahalli", type: "Exclusive Property", image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1743606770/9_q4kren.png" },
// // //                     { id: 4, location: "Hoskote", type: "Exclusive Property", image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1743606770/10_cgulkr.png" },
// // //                   ].map((item) => (
// // //                     <div key={item.id} className="relative h-40 overflow-hidden rounded-lg">
// // //                       <img
// // //                         src={item.image}
// // //                         alt={item.location}
// // //                         className="w-full h-full"
// // //                       />
// // //                       <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-3">
// // //                         <h3 className="text-white font-medium text-sm">{item.location}</h3>
// // //                         <p className="text-white text-xs">{item.type}</p>
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>

// // //             </motion.div>

// // //             {/* <motion.div
// // //               variants={{
// // //                 hidden: { opacity: 0, x: 50 },
// // //                 visible: { opacity: 1, x: 0 },
// // //               }}
// // //               initial="hidden"
// // //               animate={controls}
// // //               transition={{ duration: 0.5, delay: 0.4 }}
// // //               className="flex items-center justify-center bg-white rounded-lg p-8 shadow-md"
// // //             >
// // //               <h3 className="text-2xl font-bold">Location</h3>
// // //             </motion.div> */}
// // //           <motion.div
// // //             variants={{
// // //               hidden: { opacity: 0, x: 50 },
// // //               visible: { opacity: 1, x: 0 },
// // //             }}
// // //             initial="hidden"
// // //             animate={controls}
// // //             transition={{ duration: 0.5, delay: 0.4 }}
// // //             className="flex items-center justify-center bg-white rounded-lg p-4 shadow-md"
// // //           >
// // //             <iframe
// // //               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31113.019705332385!2d77.5945626!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f2e85b03%3A0x58d1e2e6803ff0b3!2sBangalore!5e0!3m2!1sen!2sin!4v1712584000000"
// // //               width="100%"
// // //               height="250"
// // //               allowFullScreen
// // //               loading="lazy"
// // //               className="rounded-lg shadow-md"
// // //             ></iframe>
// // //           </motion.div>
          
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Property Finder */}
// // //       <section className="py-16">
// // //         <div className="container mx-auto px-4 md:px-6">
// // //           <div className="max-w-3xl mx-auto text-center">
// // //             <h2 className="section-title">Property Finder</h2>
// // //             {/* <p className="text-gray-600 mb-2">Property type: villa, apartment, studio</p>
// // //             <p className="text-gray-600 mb-2">BHK's</p> */}
// // //             <p className="text-gray-600 mb-8">Find Your Perfect Property – Effortless, Fast, and Reliable.</p>

// // //             <div className="bg-white p-6 rounded-lg shadow-md">
// // //               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
// // //                 <div>
// // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
// // //                   <select className="w-full p-2 border rounded-md">
// // //                     <option>Select Location</option>
// // //                     <option>Bangalore</option>
// // //                     <option>Mumbai</option>
// // //                     <option>Delhi</option>
// // //                   </select>
// // //                 </div>
// // //                 <div>
// // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
// // //                   <select className="w-full p-2 border rounded-md">
// // //                     <option>Select Type</option>
// // //                     <option>Apartment</option>
// // //                     <option>Villa</option>
// // //                     <option>Studio</option>
// // //                   </select>
// // //                 </div>
// // //                 <div>
// // //                   <label className="block text-sm font-medium text-gray-700 mb-1">BHK</label>
// // //                   <select className="w-full p-2 border rounded-md">
// // //                     <option>Select BHK</option>
// // //                     <option>1 BHK</option>
// // //                     <option>2 BHK</option>
// // //                     <option>3 BHK</option>
// // //                     <option>4+ BHK</option>
// // //                   </select>
// // //                 </div>
// // //               </div>
// // //               <button className="btn-primary w-full">
// // //                 <Search className="inline-block mr-2 h-4 w-4" /> Find Properties
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Developers Section */}
// // //       <section className="py-16 bg-gray-50">
// // //         <div className="container mx-auto px-4 md:px-6">
// // //           <div className="text-center mb-12">
// // //             <h2 className="section-title">Our developing Partners</h2>
// // //           </div>

// // //           <div className="bg-black p-4 rounded-lg shadow-md">
// // //             <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
// // //               {developers.map((developer) => (
// // //                 <DeveloperLogo key={developer.id} developer={developer} />
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* About Us Preview */}
// // //       <section className="py-16">
// // //         <div className="container mx-auto px-4 md:px-6">
// // //           <div className="grid md:grid-cols-2 gap-8 items-center">
// // //             <div>
// // //               <h2 className="section-title">About PropertyNearme</h2>
// // //               <p className="text-gray-600 mb-6">
// // //                 PropertyNearme is a premier real estate company dedicated to helping clients find their dream properties.
// // //                 With years of experience in the industry, we have established ourselves as a trusted name in real estate
// // //                 services.
// // //               </p>
// // //               <p className="text-gray-600 mb-6">
// // //                 Our team of expert agents is committed to providing personalized service to meet your specific needs.
// // //                 Whether you're looking to buy, sell, or invest in property, we're here to guide you every step of the
// // //                 way.
// // //               </p>
// // //               <Link to="/about" className="btn-primary inline-flex items-center">
// // //                 Learn More <ArrowRight className="ml-2 h-4 w-4" />
// // //               </Link>
// // //             </div>
// // //             <div className="relative">
// // //               <img
// // //                 src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
// // //                 alt="About Us"
// // //                 className="rounded-lg shadow-lg"
// // //               />
// // //               {/* <div className="absolute -bottom-6 -left-6 bg-primary text-white p-4 rounded-lg shadow-lg">
// // //                 <p className="text-2xl font-bold">10+</p>
// // //                 <p>Years of Experience</p>
// // //               </div> */}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Call to Action */}
// // //       <section className="py-16 bg-gray-900 text-white">
// // //         <div className="container mx-auto px-4 md:px-6 text-center">
// // //           <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
// // //           <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
// // //             Join thousands of satisfied customers who found their perfect property with PropertyNearme
// // //           </p>
// // //           <div className="flex flex-col sm:flex-row justify-center gap-4">
// // //             <Link to="/property" className="btn-primary">
// // //               Browse Properties
// // //             </Link>
// // //             <Link
// // //               to="/contact"
// // //               className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium transition-all hover:bg-gray-100"
// // //             >
// // //               Contact Us
// // //             </Link>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </>
// // //   )
// // // }

// // // export default Home

// // "use client"

// // import { useRef, useEffect } from "react"
// // import { Link } from "react-router-dom"
// // import { motion, useInView, useAnimation } from "framer-motion"
// // import { Search, ArrowRight } from "lucide-react"
// // import PropertyCard from "../components/PropertyCard"
// // import DeveloperLogo from "../components/DeveloperLogo"
// // import { featuredProperties, developers } from "../data/mockData"

// // const Home = () => {
// //   const controls = useAnimation()
// //   const ref = useRef(null)
// //   const isInView = useInView(ref, { once: true, amount: 0.3 })

// //   useEffect(() => {
// //     if (isInView) {
// //       controls.start("visible")
// //     }
// //   }, [controls, isInView])

// //   return (
// //     <>
// //       {/* Hero Section */}
// //       <section className="relative h-screen flex items-center">
// //         <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
// //         <div
// //           className="absolute inset-0 bg-cover bg-center"
// //           style={{
// //             backgroundImage:
// //               "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80')",
// //           }}
// //         ></div>

// //         <div className="container mx-auto px-4 md:px-6 relative z-20">
// //           <div className="grid md:grid-cols-2 gap-8 items-center">
// //             <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
// //               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
// //                 Find Your Dream Properties Today
// //               </h1>
// //               <p className="text-xl text-gray-200 mb-8">
// //                 Looking for residential property in Bangalore? We've got you covered with the best properties in prime
// //                 locations.
// //               </p>

// //               <div className="flex flex-wrap gap-4">
// //                 <Link to="/property" className="btn-primary">
// //                   Browse Properties
// //                 </Link>
// //                 <Link to="/about" className="btn-secondary">
// //                   Learn More
// //                 </Link>
// //               </div>
// //             </motion.div>

// //             <motion.div
// //               initial={{ opacity: 0, x: 50 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.8, delay: 0.3 }}
// //               className="bg-white p-6 rounded-xl shadow-lg"
// //             >
// //               <h2 className="text-2xl font-bold mb-4 text-center">Find Properties</h2>
// //               <p className="text-gray-600 mb-6 text-center">
// //                 Type of property: Residential or commercial
// //                 <br />
// //                 Purpose of purchase: Residential or investment
// //                 <br />
// //                 BHK's: 1, 2, 3, 4+
// //               </p>
// //               <div className="flex justify-center">
// //                 <Link to="/property" className="btn-primary flex items-center">
// //                   Search Now <ArrowRight className="ml-2 h-5 w-5" />
// //                 </Link>
// //               </div>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Property Categories */}
// //       <section className="py-16 bg-gray-50">
// //         <div className="container mx-auto px-4 md:px-6">
// //           <div className="text-center mb-12">
// //             <h2 className="section-title">Browse By Property Type</h2>
// //             <p className="section-subtitle mx-auto">
// //               Explore our wide range of properties to find what suits your needs
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
// //             {[
// //               {
// //                 name: "Apartments",
// //                 image:
// //                   "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
// //               },
// //               {
// //                 name: "Villas",
// //                 image:
// //                   "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
// //               },
// //               {
// //                 name: "Plots",
// //                 image:
// //                   "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
// //               },
// //               {
// //                 name: "Commercial",
// //                 image:
// //                   "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
// //               },
// //               // {
// //               //   name: "PG/Hostels",
// //               //   image:
// //               //     "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
// //               // },
// //               {
// //                 name: "Farmlands",
// //                 image:
// //                   "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
// //               },
// //             ].map((category, index) => (
// //               <motion.div
// //                 key={category.name}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.5, delay: index * 0.1 }}
// //                 className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer group"
// //               >
// //                 <div className="relative h-36 overflow-hidden">
// //                   <img
// //                     src={category.image || "/placeholder.svg"}
// //                     alt={category.name}
// //                     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
// //                   />
// //                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
// //                 </div>
// //                 <div className="p-4 text-center">
// //                   <h3 className="font-medium text-lg">{category.name}</h3>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Featured Properties Carousel */}
// //       <section className="py-16">
// //         <div className="container mx-auto px-4 md:px-6">
// //           <div className="flex justify-between items-center mb-8">
// //             <div>
// //               <h2 className="section-title">Trending Properties</h2>
// //               <p className="text-gray-600">Handpicked properties for you</p>
// //             </div>
// //             <Link to="/property" className="text-primary font-medium flex items-center">
// //               Explore more <ArrowRight className="ml-1 h-4 w-4" />
// //             </Link>
// //           </div>

// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full ">
// //             {featuredProperties.slice(0, 3).map((property) => (
// //               <PropertyCard key={property.id} property={property} />
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Banner */}
// //       <section className="py-8 bg-purple-100">
// //         <div className="container mx-auto px-4 md:px-6">
// //           <div className="bg-gradient-to-r from-green-800 to-green-600 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
// //             <div className="text-white mb-4 md:mb-0">
// //               <h3 className="text-2xl font-bold">Looking for Land developments?</h3>
// //               <p>Get Free Consultation From Our Agent</p>
// //             </div>
// //             <div className="flex items-center">
// //               <div className="text-white mr-4">{/* <p>+91 9732300007</p> */}</div>
// //               <button className="bg-white text-green-800 px-4 py-2 rounded font-medium">Get Started</button>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Upcoming Projects */}
// //       <section className="py-16 bg-gray-50" ref={ref}>
// //         <div className="container mx-auto px-4 md:px-6">
// //           <div className="text-center mb-12">
// //             <h2 className="section-title">Upcoming Apartments</h2>
// //             <p className="section-subtitle mx-auto">Hot Locations in Bangalore</p>
// //           </div>

// //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// //             {/* <motion.div
// //               variants={{
// //                 hidden: { opacity: 0 },
// //                 visible: { opacity: 1 },
// //               }}
// //               initial="hidden"
// //               animate={controls}
// //               transition={{ duration: 0.5, delay: 0.2 }}
// //               className="col-span-2"
// //             >
// //               <div className="bg-white rounded-lg overflow-hidden shadow-md">
// //                 <div className="grid grid-cols-2 gap-2 p-2">
// //                   {[
// //                     {
// //                       id: 1,
// //                       location: "Goravalahalli yelachenahalli",
// //                       type: "Exclusive Property",
// //                       image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1743606769/7_kgm7rs.png",
// //                     },
// //                     {
// //                       id: 2,
// //                       location: "Kolaturu",
// //                       type: "Exclusive Property",
// //                       image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1743606769/8_b0spvp.png",
// //                     },
// //                     {
// //                       id: 3,
// //                       location: "Irabanahalli",
// //                       type: "Exclusive Property",
// //                       image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1743606770/9_q4kren.png",
// //                     },
// //                     {
// //                       id: 4,
// //                       location: "Hoskote",
// //                       type: "Exclusive Property",
// //                       image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1743606770/10_cgulkr.png",
// //                     },
// //                   ].map((item) => (
// //                     <div key={item.id} className="relative h-40 overflow-hidden rounded-lg">
// //                       <img
// //                         src={item.image || "/placeholder.svg"}
// //                         alt={item.location}
// //                         className="w-full h-full object-cover"
// //                       />
// //                       <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-3">
// //                         <h3 className="text-white font-medium text-sm">{item.location}</h3>
// //                         <p className="text-white text-xs">{item.type}</p>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </motion.div> */}

// // <motion.div
// //               variants={{
// //                 hidden: { opacity: 0 },
// //                 visible: { opacity: 1 },
// //               }}
// //               initial="hidden"
// //               animate={controls}
// //               transition={{ duration: 0.5, delay: 0.2 }}
// //               className="col-span-2"
// //             >
// //               <div className="bg-white rounded-lg overflow-hidden shadow-md">
// //                 <div className="grid grid-cols-2 gap-2 p-2">
// //                   {[
// //                     {
// //                       id: 1,
// //                       location: "Whitefield",
// //                       type: "Exclusive Property",
// //                       image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1747341000/whitefield_qkjhlh.jpg",
// //                     },
// //                     {
// //                       id: 2,
// //                       location: "Sarjapura Road",
// //                       type: "Exclusive Property",
// //                       image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1747341000/sarjapur_road_uqtft3.jpg",
// //                     },
// //                     {
// //                       id: 3,
// //                       location: "Yelahanka",
// //                       type: "Exclusive Property",
// //                       image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1747341000/yelahanka_bglops.jpg",
// //                     },
// //                     {
// //                       id: 4,
// //                       location: "Electronic City",
// //                       type: "Exclusive Property",
// //                       image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1747341000/electronic_aklsnm.jpg",
// //                     },
// //                   ].map((item) => (
// //                     <div key={item.id} className="relative h-40 overflow-hidden rounded-lg">
// //                       <img
// //                         src={item.image || "/placeholder.svg"}
// //                         alt={item.location}
// //                         className="w-full h-full object-cover"
// //                       />
// //                       <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-3">
// //                         <h3 className="text-white font-medium text-sm">{item.location}</h3>
// //                         <p className="text-white text-xs">{item.type}</p>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </motion.div>

// //             <motion.div
// //               variants={{
// //                 hidden: { opacity: 0, x: 50 },
// //                 visible: { opacity: 1, x: 0 },
// //               }}
// //               initial="hidden"
// //               animate={controls}
// //               transition={{ duration: 0.5, delay: 0.4 }}
// //               className="flex items-center justify-center bg-white rounded-lg p-4 shadow-md"
// //             >
// //               <iframe
// //                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31113.019705332385!2d77.5945626!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f2e85b03%3A0x58d1e2e6803ff0b3!2sBangalore!5e0!3m2!1sen!2sin!4v1712584000000"
// //                 width="100%"
// //                 height="250"
// //                 allowFullScreen
// //                 loading="lazy"
// //                 className="rounded-lg shadow-md"
// //               ></iframe>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Property Finder */}
// //       {/* <section className="py-16">
// //         <div className="container mx-auto px-4 md:px-6">
// //           <div className="max-w-3xl mx-auto text-center">
// //             <h2 className="section-title">Property Finder</h2>
// //             <p className="text-gray-600 mb-8">Find Your Perfect Property – Effortless, Fast, and Reliable.</p>

// //             <div className="bg-white p-6 rounded-lg shadow-md">
// //               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
// //                   <select className="w-full p-2 border rounded-md">
// //                     <option>Select Location</option>
// //                     <option>Bangalore</option>
// //                     <option>Mumbai</option>
// //                     <option>Delhi</option>
// //                   </select>
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
// //                   <select className="w-full p-2 border rounded-md">
// //                     <option>Select Type</option>
// //                     <option>Apartment</option>
// //                     <option>Villa</option>
// //                     <option>Studio</option>
// //                   </select>
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">BHK</label>
// //                   <select className="w-full p-2 border rounded-md">
// //                     <option>Select BHK</option>
// //                     <option>1 BHK</option>
// //                     <option>2 BHK</option>
// //                     <option>3 BHK</option>
// //                     <option>4+ BHK</option>
// //                   </select>
// //                 </div>
// //               </div>
// //               <button className="btn-primary w-full">
// //                 <Search className="inline-block mr-2 h-4 w-4" /> Find Properties
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </section> */}

// //       {/* Developers Section */}
// //       <section className="py-16 bg-gray-50">
// //         <div className="container mx-auto px-4 md:px-6">
// //           <div className="text-center mb-12">
// //             <h2 className="section-title">Our developing Partners</h2>
// //           </div>

// //           <div className="bg-black p-4 rounded-lg shadow-md">
// //             <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
// //               {developers.map((developer) => (
// //                 <DeveloperLogo key={developer.id} developer={developer} />
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* About Us Preview */}
// //       <section className="py-16">
// //         <div className="container mx-auto px-4 md:px-6">
// //           <div className="grid md:grid-cols-2 gap-8 items-center">
// //             <div>
// //               <h2 className="section-title">About PropertyNearme</h2>
// //               <p className="text-gray-600 mb-6">
// //                 PropertyNearme is a premier real estate company dedicated to helping clients find their dream
// //                 properties. With years of experience in the industry, we have established ourselves as a trusted name in
// //                 real estate services.
// //               </p>
// //               <p className="text-gray-600 mb-6">
// //                 Our team of expert agents is committed to providing personalized service to meet your specific needs.
// //                 Whether you're looking to buy, sell, or invest in property, we're here to guide you every step of the
// //                 way.
// //               </p>
// //               <Link to="/about" className="btn-primary inline-flex items-center">
// //                 Learn More <ArrowRight className="ml-2 h-4 w-4" />
// //               </Link>
// //             </div>
// //             <div className="relative">
// //               <img
// //                 src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
// //                 alt="About Us"
// //                 className="rounded-lg shadow-lg w-full h-auto"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Call to Action */}
// //       <section className="py-16 bg-gray-900 text-white">
// //         <div className="container mx-auto px-4 md:px-6 text-center">
// //           <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
// //           <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
// //             Join thousands of satisfied customers who found their perfect property with PropertyNearme
// //           </p>
// //           <div className="flex flex-col sm:flex-row justify-center gap-4">
// //             <Link to="/property" className="btn-primary">
// //               Browse Properties
// //             </Link>
// //             <Link
// //               to="/contact"
// //               className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium transition-all hover:bg-gray-100"
// //             >
// //               Contact Us
// //             </Link>
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   )
// // }

// // export default Home

// // Home.jsx
// "use client"

// import { useRef, useEffect } from "react"
// import { Link } from "react-router-dom"
// import { motion, useInView, useAnimation } from "framer-motion"
// import { Search, ArrowRight } from "lucide-react"
// import PropertyCard from "../components/PropertyCard"
// import DeveloperLogo from "../components/DeveloperLogo"
// import { featuredProperties, developers } from "../data/mockData"

// const Home = () => {
//   const controls = useAnimation()
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, amount: 0.3 })

//   useEffect(() => {
//     if (isInView) {
//       controls.start("visible")
//     }
//   }, [controls, isInView])

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative h-screen flex items-center">
//         <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80')",
//           }}
//         ></div>

//         <div className="container mx-auto px-4 md:px-6 relative z-20">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <motion.div 
//               initial={{ opacity: 0, y: 50 }} 
//               animate={{ opacity: 1, y: 0 }} 
//               transition={{ duration: 0.8 }}
//             >
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
//                 Find Your Dream Home in Bangalore
//               </h1>
//               <p className="text-xl text-gray-200 mb-8">
//                 Discover premium residential properties in Bangalore's most sought-after locations
//               </p>

//               <div className="flex flex-wrap gap-4">
//                 <Link 
//                   to="/property" 
//                   className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
//                 >
//                   Browse Properties
//                 </Link>
//                 <Link 
//                   to="/about" 
//                   className="px-8 py-3 bg-white text-gray-900 rounded-lg font-bold border border-white hover:bg-transparent hover:text-white transition-all duration-300"
//                 >
//                   Learn More
//                 </Link>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               className="bg-white p-6 rounded-xl shadow-lg"
//             >
//               <h2 className="text-2xl font-bold mb-4 text-center">Find Properties</h2>
//               <p className="text-gray-600 mb-6 text-center">
//                 Search by property type, location, and budget to find your perfect home
//               </p>
//               <div className="flex justify-center">
//                 <Link 
//                   to="/property" 
//                   className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center"
//                 >
//                   Search Now <ArrowRight className="ml-2 h-5 w-5" />
//                 </Link>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Property Categories */}
//       <section className="py-16 bg-gradient-to-b from-white to-gray-50">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse By Property Type</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Explore our wide range of properties to find what suits your needs
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//             {[
//               {
//                 name: "Apartments",
//                 image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//                 link: "/property?type=Apartment"
//               },
//               {
//                 name: "Villas",
//                 image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//                 link: "/property?type=Villa"
//               },
//               {
//                 name: "Plots",
//                 image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//                 link: "/property?type=Plot"
//               },
//               {
//                 name: "Commercial",
//                 image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//                 link: "/property?type=Commercial"
//               },
//               {
//                 name: "Farmlands",
//                 image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//                 link: "/property?type=Farmland"
//               },
//             ].map((category, index) => (
//               <motion.div
//                 key={category.name}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 whileHover={{ y: -5 }}
//               >
//                 <Link to={category.link}>
//                   <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer group h-full flex flex-col">
//                     <div className="relative h-40 overflow-hidden">
//                       <img
//                         src={category.image}
//                         alt={category.name}
//                         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//                     </div>
//                     <div className="p-4 text-center flex-grow flex items-center justify-center">
//                       <h3 className="font-medium text-lg">{category.name}</h3>
//                     </div>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured Properties Carousel */}
//       <section className="py-16">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="flex justify-between items-center mb-8">
//             <div>
//               <h2 className="text-3xl font-bold mb-2">Featured Properties</h2>
//               <p className="text-gray-600">Handpicked properties in prime Bangalore locations</p>
//             </div>
//             <Link 
//               to="/property" 
//               className="text-red-600 font-medium flex items-center hover:text-red-700 transition-colors"
//             >
//               Explore more <ArrowRight className="ml-1 h-4 w-4" />
//             </Link>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
//             {featuredProperties.slice(0, 3).map((property) => (
//               <PropertyCard key={property.id} property={property} />
//             ))}
//           </div>
//         </div>
//       </section>
//      {/* CTA Banner */}
//         <section className="py-8 bg-purple-100">
//          <div className="container mx-auto px-4 md:px-6">
//            <div className="bg-gradient-to-r from-green-800 to-green-600 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
//              <div className="text-white mb-4 md:mb-0">
//                <h3 className="text-2xl font-bold">Looking for Land developments?</h3>
//                <p>Get Free Consultation From Our Agent</p>
//              </div>
//              <div className="flex items-center">
//                <div className="text-white mr-4">{/* <p>+91 9732300007</p> */}</div>
//                <button className="bg-white text-green-800 px-4 py-2 rounded font-medium">Get Started</button>
//              </div>
//            </div>
//          </div>
//        </section>
//        {/* Upcoming Projects */}
//        <section className="py-16 bg-gray-50" ref={ref}>
//          <div className="container mx-auto px-4 md:px-6">
//            <div className="text-center mb-12">
//              <h2 className="section-title">Upcoming Apartments</h2>
//              <p className="section-subtitle mx-auto">Hot Locations in Bangalore</p>
//            </div>
//            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//              {/* <motion.div
//                variants={{
//                 hidden: { opacity: 0 },
//                 visible: { opacity: 1 },
//               }}
//               initial="hidden"
//               animate={controls}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="col-span-2"
//             >
//               <div className="bg-white rounded-lg overflow-hidden shadow-md">
//                 <div className="grid grid-cols-2 gap-2 p-2">
//                   {[
//                     {
//                       id: 1,
//                       location: "Goravalahalli yelachenahalli",
//                       type: "Exclusive Property",
//                       image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1743606769/7_kgm7rs.png",
//                     },
//                     {
//                       id: 2,
//                       location: "Kolaturu",
//                       type: "Exclusive Property",
//                       image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1743606769/8_b0spvp.png",
//                     },
//                     {
//                       id: 3,
//                       location: "Irabanahalli",
//                       type: "Exclusive Property",
//                       image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1743606770/9_q4kren.png",
//                     },
//                     {
//                       id: 4,
//                       location: "Hoskote",
//                       type: "Exclusive Property",
//                       image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1743606770/10_cgulkr.png",
//                     },
//                   ].map((item) => (
//                     <div key={item.id} className="relative h-40 overflow-hidden rounded-lg">
//                       <img
//                         src={item.image || "/placeholder.svg"}
//                         alt={item.location}
//                         className="w-full h-full object-cover"
//                       />
//                       <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-3">
//                         <h3 className="text-white font-medium text-sm">{item.location}</h3>
//                         <p className="text-white text-xs">{item.type}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>  */}

// <motion.div
//               variants={{
//                 hidden: { opacity: 0 },
//                 visible: { opacity: 1 },
//               }}
//               initial="hidden"
//               animate={controls}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="col-span-2"
//             >
//               <div className="bg-white rounded-lg overflow-hidden shadow-md">
//                 <div className="grid grid-cols-2 gap-2 p-2">
//                   {[
//                     {
//                       id: 1,
//                       location: "Whitefield",
//                       type: "Exclusive Property",
//                       image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1747341000/whitefield_qkjhlh.jpg",
//                     },
//                     {
//                       id: 2,
//                       location: "Sarjapura Road",
//                       type: "Exclusive Property",
//                       image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1747341000/sarjapur_road_uqtft3.jpg",
//                     },
//                     {
//                       id: 3,
//                       location: "Yelahanka",
//                       type: "Exclusive Property",
//                       image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1747341000/yelahanka_bglops.jpg",
//                     },
//                     {
//                       id: 4,
//                       location: "Electronic City",
//                       type: "Exclusive Property",
//                       image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1747341000/electronic_aklsnm.jpg",
//                     },
//                   ].map((item) => (
//                     <div key={item.id} className="relative h-40 overflow-hidden rounded-lg">
//                       <img
//                         src={item.image || "/placeholder.svg"}
//                         alt={item.location}
//                         className="w-full h-full object-cover"
//                       />
//                       <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-3">
//                         <h3 className="text-white font-medium text-sm">{item.location}</h3>
//                         <p className="text-white text-xs">{item.type}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               variants={{
//                 hidden: { opacity: 0, x: 50 },
//                 visible: { opacity: 1, x: 0 },
//               }}
//               initial="hidden"
//               animate={controls}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               className="flex items-center justify-center bg-white rounded-lg p-4 shadow-md"
//             >
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31113.019705332385!2d77.5945626!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f2e85b03%3A0x58d1e2e6803ff0b3!2sBangalore!5e0!3m2!1sen!2sin!4v1712584000000"
//                 width="100%"
//                 height="250"
//                 allowFullScreen
//                 loading="lazy"
//                 className="rounded-lg shadow-md"
//               ></iframe>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Property Finder */}
//       {/* <section className="py-16">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="max-w-3xl mx-auto text-center">
//             <h2 className="section-title">Property Finder</h2>
//             <p className="text-gray-600 mb-8">Find Your Perfect Property – Effortless, Fast, and Reliable.</p>

//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
//                   <select className="w-full p-2 border rounded-md">
//                     <option>Select Location</option>
//                     <option>Bangalore</option>
//                     <option>Mumbai</option>
//                     <option>Delhi</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
//                   <select className="w-full p-2 border rounded-md">
//                     <option>Select Type</option>
//                     <option>Apartment</option>
//                     <option>Villa</option>
//                     <option>Studio</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">BHK</label>
//                   <select className="w-full p-2 border rounded-md">
//                     <option>Select BHK</option>
//                     <option>1 BHK</option>
//                     <option>2 BHK</option>
//                     <option>3 BHK</option>
//                     <option>4+ BHK</option>
//                   </select>
//                 </div>
//               </div>
//               <button className="btn-primary w-full">
//                 <Search className="inline-block mr-2 h-4 w-4" /> Find Properties
//               </button>
//             </div>
//           </div>
//         </div>
//       </section> */}

//       {/* Developers Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center mb-12">
//             <h2 className="section-title">Our developing Partners</h2>
//           </div>

//           <div className="bg-black p-4 rounded-lg shadow-md">
//             <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
//               {developers.map((developer) => (
//                 <DeveloperLogo key={developer.id} developer={developer} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Us Preview */}
//       <section className="py-16">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div>
//               <h2 className="section-title">About PropertyNearme</h2>
//               <p className="text-gray-600 mb-6">
//                 PropertyNearme is a premier real estate company dedicated to helping clients find their dream
//                 properties. With years of experience in the industry, we have established ourselves as a trusted name in
//                 real estate services.
//               </p>
//               <p className="text-gray-600 mb-6">
//                 Our team of expert agents is committed to providing personalized service to meet your specific needs.
//                 Whether you're looking to buy, sell, or invest in property, we're here to guide you every step of the
//                 way.
//               </p>
//               <Link to="/about" className="btn-primary inline-flex items-center">
//                 Learn More <ArrowRight className="ml-2 h-4 w-4" />
//               </Link>
//             </div>
//             <div className="relative">
//               <img
//                 src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
//                 alt="About Us"
//                 className="rounded-lg shadow-lg w-full h-auto"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-16 bg-gray-900 text-white">
//         <div className="container mx-auto px-4 md:px-6 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
//           <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//             Join thousands of satisfied customers who found their perfect property with PropertyNearme
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <Link to="/property" className="btn-primary">
//               Browse Properties
//             </Link>
//             <Link
//               to="/contact"
//               className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium transition-all hover:bg-gray-100"
//             >
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Home

"use client"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import PropertyCard from "../components/PropertyCard"
import DeveloperLogo from "../components/DeveloperLogo"
import PropertyTypeSection from "../components/PropertyTypeSection"
import PropertyHero from "../components/PropertyHero"
import ServicesSection from "../components/ServicesSection"
import { featuredProperties, developers } from "../data/mockData"

const Home = () => {
  return (
    <>
      {/* Hero Section - Improved */}
      <PropertyHero />

      {/* Property Categories - New Section */}
      <PropertyTypeSection />

      {/* Featured Properties Carousel */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Properties</h2>
              <p className="text-gray-600">Handpicked properties in prime Karnataka locations</p>
            </div>
            <Link
              to="/property"
              className="text-red-600 font-medium flex items-center hover:text-red-700 transition-colors"
            >
              Explore more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {featuredProperties.slice(0, 3).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Improved */}
      <ServicesSection />

      {/* CTA Banner */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-r from-green-800 to-green-600 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
            <div className="text-white mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">Looking for Land developments?</h3>
              <p>Get Free Consultation From Our Expert Agents</p>
            </div>
            <div className="flex items-center">
              <button className="bg-white text-green-800 px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Upcoming Apartments</h2>
            <p className="text-xl text-gray-600">Hot Locations in Karnataka</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="col-span-2"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="grid grid-cols-2 gap-2 p-2">
                  {[
                    {
                      id: 1,
                      location: "Whitefield",
                      type: "Exclusive Property",
                      image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1747341000/whitefield_qkjhlh.jpg",
                    },
                    {
                      id: 2,
                      location: "Sarjapura Road",
                      type: "Exclusive Property",
                      image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1747341000/sarjapur_road_uqtft3.jpg",
                    },
                    {
                      id: 3,
                      location: "Yelahanka",
                      type: "Exclusive Property",
                      image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1747341000/yelahanka_bglops.jpg",
                    },
                    {
                      id: 4,
                      location: "Electronic City",
                      type: "Exclusive Property",
                      image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1747341000/electronic_aklsnm.jpg",
                    },
                  ].map((item) => (
                    <div key={item.id} className="relative h-40 overflow-hidden rounded-lg group">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.location}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-3">
                        <h3 className="text-white font-medium text-sm">{item.location}</h3>
                        <p className="text-white text-xs">{item.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center bg-white rounded-lg p-4 shadow-md"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31113.019705332385!2d77.5945626!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f2e85b03%3A0x58d1e2e6803ff0b3!2sBangalore!5e0!3m2!1sen!2sin!4v1712584000000"
                width="100%"
                height="250"
                allowFullScreen
                loading="lazy"
                className="rounded-lg shadow-md"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Developers Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Development Partners</h2>
            <p className="text-xl text-gray-600">Working with the best developers in Karnataka</p>
          </div>

          <div className="bg-black p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {developers.map((developer) => (
                <DeveloperLogo key={developer.id} developer={developer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">About PropertyNearme</h2>
              <p className="text-gray-600 mb-6">
                PropertyNearme is a premier real estate company dedicated to helping clients find their dream properties
                in Karnataka. With years of experience in the industry, we have established ourselves as a trusted name
                in real estate services.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of expert agents is committed to providing personalized service to meet your specific needs.
                Whether you're looking to buy, sell, or invest in property, we're here to guide you every step of the
                way.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 border-2 border-red-500 rounded-2xl translate-x-6 translate-y-6" />
              <img
                src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                alt="About Us"
                className="rounded-2xl shadow-2xl w-full h-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who found their perfect property with PropertyNearme
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/property"
              className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Browse Properties
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-gray-900 rounded-lg font-bold transition-all hover:bg-gray-100"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
