

// "use client"
// import { Link } from "react-router-dom"
// import { motion } from "framer-motion"
// import { ArrowRight } from "lucide-react"
// import PropertyCard from "../components/PropertyCard"
// import DeveloperLogo from "../components/DeveloperLogo"
// import PropertyTypeSection from "../components/PropertyTypeSection"
// import PropertyHero from "../components/PropertyHero"
// import ServicesSection from "../components/ServicesSection"
// import { featuredProperties, developers } from "../data/mockData"

// const Home = () => {
//   return (
//     <>
//       {/* Hero Section - Improved */}
//       <PropertyHero />

//       {/* Property Categories - New Section */}
//       <PropertyTypeSection />

//       {/* Featured Properties Carousel */}
//       <section className="py-16">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="flex justify-between items-center mb-8">
//             <div>
//               <h2 className="text-3xl font-bold mb-2">Featured Properties</h2>
//               <p className="text-gray-600">Handpicked properties in prime Karnataka locations</p>
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

//       {/* Services Section - Improved */}
//       <ServicesSection />

//       {/* CTA Banner */}
//       <section className="py-8">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="bg-gradient-to-r from-green-800 to-green-600 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
//             <div className="text-white mb-4 md:mb-0">
//               <h3 className="text-2xl font-bold">Looking for Land developments?</h3>
//               <p>Get Free Consultation From Our Expert Agents</p>
//             </div>
//             <div className="flex items-center">
//               <button className="bg-white text-green-800 px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all">
//                 Get Started
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Upcoming Projects */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">Upcoming Apartments</h2>
//             <p className="text-xl text-gray-600">Hot Locations in Karnataka</p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
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
//                     <div key={item.id} className="relative h-40 overflow-hidden rounded-lg group">
//                       <img
//                         src={item.image || "/placeholder.svg"}
//                         alt={item.location}
//                         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
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

//       {/* Developers Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">Our Development Partners</h2>
//             <p className="text-xl text-gray-600">Working with the best developers in Karnataka</p>
//           </div>

//           <div className="bg-black p-6 rounded-lg shadow-md">
//             <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
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
//               <h2 className="text-3xl font-bold mb-4">About PropertyNearme</h2>
//               <p className="text-gray-600 mb-6">
//                 PropertyNearme is a premier real estate company dedicated to helping clients find their dream properties
//                 in Karnataka. With years of experience in the industry, we have established ourselves as a trusted name
//                 in real estate services.
//               </p>
//               <p className="text-gray-600 mb-6">
//                 Our team of expert agents is committed to providing personalized service to meet your specific needs.
//                 Whether you're looking to buy, sell, or invest in property, we're here to guide you every step of the
//                 way.
//               </p>
//               <Link
//                 to="/about"
//                 className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 group"
//               >
//                 Learn More
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </Link>
//             </div>
//             <div className="relative">
//               <div className="absolute inset-0 border-2 border-red-500 rounded-2xl translate-x-6 translate-y-6" />
//               <img
//                 src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
//                 alt="About Us"
//                 className="rounded-2xl shadow-2xl w-full h-auto relative z-10"
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
//             <Link
//               to="/property"
//               className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
//             >
//               Browse Properties
//             </Link>
//             <Link
//               to="/contact"
//               className="px-8 py-3 bg-white text-gray-900 rounded-lg font-bold transition-all hover:bg-gray-100"
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
