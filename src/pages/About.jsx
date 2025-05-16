// // "use client"

// // import { motion } from "framer-motion"
// // import { Users, Award, Building, CheckCircle } from "lucide-react"

// // const About = () => {
// //   const fadeIn = {
// //     hidden: { opacity: 0, y: 20 },
// //     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// //   }

// //   return (
// //     <>
// //       {/* Hero Section */}
// //       <section className="pt-32 pb-16 bg-gray-50">
// //         <div className="container mx-auto px-4 md:px-6">
// //           <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center max-w-3xl mx-auto">
// //             <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
// //             <p className="text-xl text-gray-600">
// //               We're on a mission to help everyone find their perfect place to call home
// //             </p>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Our Story */}
// //       <section className="py-16">
// //         <div className="container mx-auto px-4 md:px-6">
// //           <div className="grid md:grid-cols-2 gap-12 items-center">
// //             <motion.div
// //               initial={{ opacity: 0, x: -50 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.6 }}
// //             >
// //               <h2 className="section-title">Our Story</h2>
// //               <p className="text-gray-600 mb-6">
// //                 Founded in 2010, PropertyNearme began with a simple mission: to make the process of buying, selling, and
// //                 renting properties as seamless and stress-free as possible. What started as a small team of passionate
// //                 real estate enthusiasts has grown into a full-service real estate company with a nationwide presence.
// //               </p>
// //               <p className="text-gray-600 mb-6">
// //                 Over the years, we've helped thousands of families find their dream homes, investors secure profitable
// //                 properties, and sellers get the best value for their real estate assets. Our journey has been defined by
// //                 our unwavering commitment to client satisfaction and our deep understanding of the real estate market.
// //               </p>
// //               <p className="text-gray-600">
// //                 Today, we continue to innovate and evolve, leveraging the latest technologies and market insights to
// //                 provide our clients with exceptional service and results.
// //               </p>
// //             </motion.div>
// //             <motion.div
// //               initial={{ opacity: 0, x: 50 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.6, delay: 0.2 }}
// //             >
// //               <img
// //                 src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
// //                 alt="Our Story"
// //                 className="rounded-lg shadow-lg w-full h-auto"
// //               />
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Our Values */}
// //       <section className="py-16 bg-gray-50">
// //         <div className="container mx-auto px-4 md:px-6">
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.6 }}
// //             className="text-center max-w-3xl mx-auto mb-12"
// //           >
// //             <h2 className="section-title">Our Values</h2>
// //             <p className="section-subtitle mx-auto">The principles that guide everything we do</p>
// //           </motion.div>

// //           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
// //             {[
// //               {
// //                 icon: <Users className="h-10 w-10 text-primary" />,
// //                 title: "Client-Centric",
// //                 description: "We put our clients' needs first, always striving to exceed expectations.",
// //               },
// //               {
// //                 icon: <Award className="h-10 w-10 text-primary" />,
// //                 title: "Excellence",
// //                 description: "We are committed to delivering excellence in every aspect of our service.",
// //               },
// //               {
// //                 icon: <CheckCircle className="h-10 w-10 text-primary" />,
// //                 title: "Integrity",
// //                 description: "We operate with honesty, transparency, and ethical standards.",
// //               },
// //               {
// //                 icon: <Building className="h-10 w-10 text-primary" />,
// //                 title: "Innovation",
// //                 description: "We continuously evolve and innovate to improve our services.",
// //               },
// //             ].map((value, index) => (
// //               <motion.div
// //                 key={value.title}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.6, delay: index * 0.1 }}
// //                 className="bg-white p-6 rounded-lg shadow-md"
// //               >
// //                 <div className="mb-4">{value.icon}</div>
// //                 <h3 className="text-xl font-bold mb-2">{value.title}</h3>
// //                 <p className="text-gray-600">{value.description}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Team */}
// //       <section className="py-16">
// //         <div className="container mx-auto px-4 md:px-6">
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.6 }}
// //             className="text-center max-w-3xl mx-auto mb-12"
// //           >
// //             <h2 className="section-title">Our Team</h2>
// //             <p className="section-subtitle mx-auto">Meet the experts who make it all happen</p>
// //           </motion.div>

// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {[
// //               {
// //                 name: "John Smith",
// //                 position: "CEO & Founder",
// //                 image:
// //                   "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
// //               },
// //               {
// //                 name: "Sarah Johnson",
// //                 position: "Head of Sales",
// //                 image:
// //                   "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
// //               },
// //               {
// //                 name: "Michael Brown",
// //                 position: "Senior Property Consultant",
// //                 image:
// //                   "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
// //               },
// //             ].map((member, index) => (
// //               <motion.div
// //                 key={member.name}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.6, delay: index * 0.1 }}
// //                 className="bg-white rounded-lg overflow-hidden shadow-md"
// //               >
// //                 <img
// //                   src={member.image || "/placeholder.svg"}
// //                   alt={member.name}
// //                   className="w-full h-80 object-cover object-center"
// //                 />
// //                 <div className="p-6">
// //                   <h3 className="text-xl font-bold mb-1">{member.name}</h3>
// //                   <p className="text-gray-600 mb-4">{member.position}</p>
// //                   <div className="flex space-x-4">
// //                     <a href="#" className="text-gray-400 hover:text-primary">
// //                       <svg
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         width="20"
// //                         height="20"
// //                         fill="currentColor"
// //                         viewBox="0 0 16 16"
// //                       >
// //                         <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
// //                       </svg>
// //                     </a>
// //                     <a href="#" className="text-gray-400 hover:text-primary">
// //                       <svg
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         width="20"
// //                         height="20"
// //                         fill="currentColor"
// //                         viewBox="0 0 16 16"
// //                       >
// //                         <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
// //                       </svg>
// //                     </a>
// //                     <a href="#" className="text-gray-400 hover:text-primary">
// //                       <svg
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         width="20"
// //                         height="20"
// //                         fill="currentColor"
// //                         viewBox="0 0 16 16"
// //                       >
// //                         <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
// //                       </svg>
// //                     </a>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Stats */}
// //       <section className="py-16 bg-primary text-white">
// //         <div className="container mx-auto px-4 md:px-6">
// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
// //             {[
// //               { number: "1000+", label: "Properties Sold" },
// //               { number: "500+", label: "Happy Clients" },
// //               { number: "10+", label: "Years Experience" },
// //               { number: "20+", label: "Expert Agents" },
// //             ].map((stat, index) => (
// //               <motion.div
// //                 key={stat.label}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.6, delay: index * 0.1 }}
// //                 className="text-center"
// //               >
// //                 <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
// //                 <div className="text-lg">{stat.label}</div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Call to Action */}
// //       <section className="py-16">
// //         <div className="container mx-auto px-4 md:px-6">
// //           <div className="bg-gray-900 text-white rounded-xl p-8 md:p-12">
// //             <div className="grid md:grid-cols-2 gap-8 items-center">
// //               <div>
// //                 <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
// //                 <p className="text-gray-300 mb-6">
// //                   Our team of experts is ready to help you find the perfect property. Get in touch with us today!
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

// // export default About

// // "use client"

// // import { useRef } from "react"
// // import { motion, useInView } from "framer-motion"
// // import { Users, Award, Building, ArrowRight, Heart, Shield, Lightbulb } from "lucide-react"

// // const About = () => {
// //   const ref = useRef(null)
// //   const isInView = useInView(ref, { once: true, amount: 0.2 })

// //   // Animation variants
// //   const fadeIn = {
// //     hidden: { opacity: 0, y: 20 },
// //     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// //   }

// //   const staggerContainer = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: {
// //         staggerChildren: 0.1,
// //       },
// //     },
// //   }

// //   const itemVariant = {
// //     hidden: { opacity: 0, y: 20 },
// //     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// //   }

// //   const scaleIn = {
// //     hidden: { opacity: 0, scale: 0.8 },
// //     visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
// //   }

// //   return (
// //     <div className="bg-gradient-to-b from-slate-50 to-white">
// //       {/* Hero Section */}
// //       <section className="pt-32 pb-20 relative overflow-hidden">
// //         <div className="absolute inset-0 z-0 opacity-10">
// //           <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-30" />
// //           <div className="absolute w-96 h-96 bg-red-500 rounded-full -top-20 -left-20 blur-3xl opacity-20" />
// //           <div className="absolute w-96 h-96 bg-red-600 rounded-full -bottom-20 -right-20 blur-3xl opacity-20" />
// //         </div>

// //         <div className="container mx-auto px-4 md:px-6 relative z-10">
// //           <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center max-w-3xl mx-auto">
// //             <motion.div
// //               initial={{ scale: 0.9, opacity: 0 }}
// //               animate={{ scale: 1, opacity: 1 }}
// //               transition={{ duration: 0.5, delay: 0.2 }}
// //               className="inline-block mb-6"
// //             >
// //               <span className="px-4 py-2 rounded-full bg-red-50 text-red-600 font-medium text-sm border border-red-100">
// //                 Our Story
// //               </span>
// //             </motion.div>
// //             <motion.h1
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: 0.3 }}
// //               className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent"
// //             >
// //               About Us
// //             </motion.h1>
// //             <motion.p
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: 0.4 }}
// //               className="text-xl text-slate-600"
// //             >
// //               We're on a mission to help everyone find their perfect place to call home
// //             </motion.p>
// //           </motion.div>
// //         </div>

// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ duration: 1, delay: 0.6 }}
// //           className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"
// //         />
// //       </section>

// //       {/* Our Story */}
// //       <section className="py-20">
// //         <div className="container mx-auto px-4 md:px-6">
// //           <div className="grid md:grid-cols-2 gap-16 items-center">
// //             <motion.div
// //               initial={{ opacity: 0, x: -50 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.8 }}
// //             >
// //               <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-6">
// //                 Since 2010
// //               </div>
// //               <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">Our Story</h2>
// //               <div className="space-y-6">
// //                 <motion.p
// //                   initial={{ opacity: 0, y: 20 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ duration: 0.6, delay: 0.1 }}
// //                   className="text-slate-600"
// //                 >
// //                   Founded in 2010, PropertyNearme began with a simple mission: to make the process of buying, selling,
// //                   and renting properties as seamless and stress-free as possible. What started as a small team of
// //                   passionate real estate enthusiasts has grown into a full-service real estate company with a nationwide
// //                   presence.
// //                 </motion.p>
// //                 <motion.p
// //                   initial={{ opacity: 0, y: 20 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ duration: 0.6, delay: 0.2 }}
// //                   className="text-slate-600"
// //                 >
// //                   Over the years, we've helped thousands of families find their dream homes, investors secure profitable
// //                   properties, and sellers get the best value for their real estate assets. Our journey has been defined
// //                   by our unwavering commitment to client satisfaction and our deep understanding of the real estate
// //                   market.
// //                 </motion.p>
// //                 <motion.p
// //                   initial={{ opacity: 0, y: 20 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ duration: 0.6, delay: 0.3 }}
// //                   className="text-slate-600"
// //                 >
// //                   Today, we continue to innovate and evolve, leveraging the latest technologies and market insights to
// //                   provide our clients with exceptional service and results.
// //                 </motion.p>
// //               </div>
// //             </motion.div>
// //             <motion.div
// //               initial={{ opacity: 0, x: 50 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.8, delay: 0.2 }}
// //               className="relative"
// //             >
// //               <div className="absolute inset-0 border-2 border-red-500 rounded-2xl translate-x-6 translate-y-6" />
// //               <img
// //                 src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
// //                 alt="Our Story"
// //                 className="rounded-2xl shadow-2xl w-full h-auto relative z-10"
// //               />
// //               <motion.div
// //                 initial={{ opacity: 0, scale: 0 }}
// //                 whileInView={{ opacity: 1, scale: 1 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.6, delay: 0.6 }}
// //                 className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 z-20"
// //               >
// //                 <div className="flex items-center gap-3">
// //                   <div className="bg-red-500 text-white p-3 rounded-xl">
// //                     <Building className="w-6 h-6" />
// //                   </div>
// //                   <div>
// //                     <div className="text-sm text-slate-500">Projects Completed</div>
// //                     <div className="text-2xl font-bold text-slate-800">500+</div>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Our Values */}
// //       <section className="py-20 bg-slate-50" ref={ref}>
// //         <div className="container mx-auto px-4 md:px-6">
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
// //             transition={{ duration: 0.6 }}
// //             className="text-center max-w-3xl mx-auto mb-16"
// //           >
// //             <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-6">
// //               What Drives Us
// //             </div>
// //             <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">Our Values</h2>
// //             <p className="text-xl text-slate-600">The principles that guide everything we do</p>
// //           </motion.div>

// //           <motion.div
// //             variants={staggerContainer}
// //             initial="hidden"
// //             animate={isInView ? "visible" : "hidden"}
// //             className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
// //           >
// //             {[
// //               {
// //                 icon: <Heart className="h-10 w-10 text-white" />,
// //                 color: "bg-red-500",
// //                 title: "Client-Centric",
// //                 description: "We put our clients' needs first, always striving to exceed expectations.",
// //               },
// //               {
// //                 icon: <Award className="h-10 w-10 text-white" />,
// //                 color: "bg-red-600",
// //                 title: "Excellence",
// //                 description: "We are committed to delivering excellence in every aspect of our service.",
// //               },
// //               {
// //                 icon: <Shield className="h-10 w-10 text-white" />,
// //                 color: "bg-red-500",
// //                 title: "Integrity",
// //                 description: "We operate with honesty, transparency, and ethical standards.",
// //               },
// //               {
// //                 icon: <Lightbulb className="h-10 w-10 text-white" />,
// //                 color: "bg-red-600",
// //                 title: "Innovation",
// //                 description: "We continuously evolve and innovate to improve our services.",
// //               },
// //             ].map((value, index) => (
// //               <motion.div
// //                 key={value.title}
// //                 variants={itemVariant}
// //                 className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-slate-100 group"
// //               >
// //                 <div
// //                   className={`${value.color} rounded-2xl p-4 inline-flex mb-6 group-hover:scale-110 transition-transform duration-300`}
// //                 >
// //                   {value.icon}
// //                 </div>
// //                 <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-red-600 transition-colors duration-300">
// //                   {value.title}
// //                 </h3>
// //                 <p className="text-slate-600">{value.description}</p>
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Team */}
// //       <section className="py-20">
// //         <div className="container mx-auto px-4 md:px-6">
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.6 }}
// //             className="text-center max-w-3xl mx-auto mb-16"
// //           >
// //             <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-6">
// //               Meet Our Experts
// //             </div>
// //             <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">Our Team</h2>
// //             <p className="text-xl text-slate-600">The professionals who make it all happen</p>
// //           </motion.div>

// //           <motion.div
// //             variants={staggerContainer}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //             className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
// //           >
// //             {[
// //               {
// //                 name: "John Smith",
// //                 position: "CEO & Founder",
// //                 image:
// //                   "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
// //               },
// //               {
// //                 name: "Sarah Johnson",
// //                 position: "Head of Sales",
// //                 image:

// //                   "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
// //               },
// //               {
// //                 name: "Michael Brown",
// //                 position: "Senior Property Consultant",
// //                 image:
// //                   "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
// //               },
// //             ].map((member, index) => (
// //               <motion.div key={member.name} variants={itemVariant} className="group">
// //                 <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-slate-100">
// //                   <div className="relative overflow-hidden">
// //                     <img
// //                       src={member.image || "/placeholder.svg?height=400&width=300"}
// //                       alt={member.name}
// //                       className="w-full h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
// //                     />
// //                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// //                   </div>
// //                   <div className="p-6 relative">
// //                     <motion.div
// //                       variants={scaleIn}
// //                       className="absolute -top-8 right-6 bg-red-500 text-white p-3 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
// //                     >
// //                       <Users className="w-6 h-6" />
// //                     </motion.div>
// //                     <h3 className="text-xl font-bold mb-1 text-slate-800 group-hover:text-red-600 transition-colors duration-300">
// //                       {member.name}
// //                     </h3>
// //                     <p className="text-slate-500 mb-4">{member.position}</p>
// //                     <div className="flex space-x-4">
// //                       <a href="#" className="text-slate-400 hover:text-red-500 transition-colors duration-300">
// //                         <svg
// //                           xmlns="http://www.w3.org/2000/svg"
// //                           width="20"
// //                           height="20"
// //                           fill="currentColor"
// //                           viewBox="0 0 16 16"
// //                         >
// //                           <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
// //                         </svg>
// //                       </a>
// //                       <a href="#" className="text-slate-400 hover:text-red-500 transition-colors duration-300">
// //                         <svg
// //                           xmlns="http://www.w3.org/2000/svg"
// //                           width="20"
// //                           height="20"
// //                           fill="currentColor"
// //                           viewBox="0 0 16 16"
// //                         >
// //                           <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
// //                         </svg>
// //                       </a>
// //                       <a href="#" className="text-slate-400 hover:text-red-500 transition-colors duration-300">
// //                         <svg
// //                           xmlns="http://www.w3.org/2000/svg"
// //                           width="20"
// //                           height="20"
// //                           fill="currentColor"
// //                           viewBox="0 0 16 16"
// //                         >
// //                           <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
// //                         </svg>
// //                       </a>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Stats */}
// //       <section className="py-20 relative overflow-hidden">
// //         <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600" />
// //         <div className="absolute w-96 h-96 bg-white rounded-full -top-20 -left-20 blur-3xl opacity-10" />
// //         <div className="absolute w-96 h-96 bg-white rounded-full -bottom-20 -right-20 blur-3xl opacity-10" />

// //         <div className="container mx-auto px-4 md:px-6 relative z-10">
// //           <motion.div
// //             variants={staggerContainer}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //             className="grid grid-cols-2 md:grid-cols-4 gap-8"
// //           >
// //             {[
// //               { number: "1000+", label: "Properties Sold" },
// //               { number: "500+", label: "Happy Clients" },
// //               { number: "10+", label: "Years Experience" },
// //               { number: "20+", label: "Expert Agents" },
// //             ].map((stat, index) => (
// //               <motion.div key={stat.label} variants={itemVariant} className="text-center">
// //                 <motion.div
// //                   initial={{ scale: 0.5, opacity: 0 }}
// //                   whileInView={{ scale: 1, opacity: 1 }}
// //                   viewport={{ once: true }}
// //                   transition={{ type: "spring", stiffness: 200, damping: 10, delay: index * 0.1 }}
// //                   className="text-4xl md:text-5xl font-bold mb-2 text-white"
// //                 >
// //                   {stat.number}
// //                 </motion.div>
// //                 <div className="text-lg text-white/80">{stat.label}</div>
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Call to Action */}
// //       <section className="py-20">
// //         <div className="container mx-auto px-4 md:px-6">
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.6 }}
// //             className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 overflow-hidden relative"
// //           >
// //             <div className="absolute w-96 h-96 bg-red-500 rounded-full -top-20 -right-20 blur-3xl opacity-10" />
// //             <div className="absolute w-96 h-96 bg-red-600 rounded-full -bottom-20 -left-20 blur-3xl opacity-10" />

// //             <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
// //               <div>
// //                 <motion.h2
// //                   initial={{ opacity: 0, y: 20 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ duration: 0.6 }}
// //                   className="text-3xl md:text-4xl font-bold mb-4"
// //                 >
// //                   Ready to Find Your Dream Home?
// //                 </motion.h2>
// //                 <motion.p
// //                   initial={{ opacity: 0, y: 20 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ duration: 0.6, delay: 0.1 }}
// //                   className="text-slate-300 mb-8"
// //                 >
// //                   Our team of experts is ready to help you find the perfect property. Get in touch with us today!
// //                 </motion.p>
// //                 <motion.div
// //                   initial={{ opacity: 0, y: 20 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ duration: 0.6, delay: 0.2 }}
// //                 >
// //                   <motion.button
// //                     whileHover={{ scale: 1.05 }}
// //                     whileTap={{ scale: 0.95 }}
// //                     className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-medium shadow-lg shadow-red-900/20 hover:shadow-xl hover:shadow-red-900/20 transition-all duration-300 flex items-center gap-2 group"
// //                   >
// //                     Contact Us
// //                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
// //                   </motion.button>
// //                 </motion.div>
// //               </div>
// //               <div className="hidden md:block">
// //                 <motion.div
// //                   initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
// //                   whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ duration: 0.6, delay: 0.3 }}
// //                   className="relative"
// //                 >
// //                   <div className="absolute inset-0 border-2 border-red-500 rounded-2xl -rotate-3 scale-105" />
// //                   <img
// //                     src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80"
// //                     alt="Contact Us"
// //                     className="rounded-2xl w-full h-80 object-cover rotate-3 shadow-lg"
// //                   />
// //                 </motion.div>
// //               </div>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>
// //     </div>
// //   )
// // }

// // export default About

// "use client"

// import { useRef } from "react"
// import { motion, useInView } from "framer-motion"
// import { Users, Award, Building, ArrowRight, Heart, Shield, Lightbulb } from "lucide-react"

// const About = () => {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, amount: 0.2 })

//   // Animation variants
//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   }

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   }

//   const itemVariant = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   }

//   const scaleIn = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
//   }

//   return (
//     <div className="bg-gradient-to-b from-slate-50 to-white">
//       {/* Hero Section */}
//       <section className="pt-24 pb-16 relative overflow-hidden">
//         <div className="absolute inset-0 z-0 opacity-10">
//           <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-30" />
//           <div className="absolute w-96 h-96 bg-red-500 rounded-full -top-20 -left-20 blur-3xl opacity-20" />
//           <div className="absolute w-96 h-96 bg-red-600 rounded-full -bottom-20 -right-20 blur-3xl opacity-20" />
//         </div>

//         <div className="container mx-auto px-4 md:px-6 relative z-10">
//           <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center max-w-3xl mx-auto">
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="inline-block mb-6"
//             >
//               <span className="px-4 py-2 rounded-full bg-red-50 text-red-600 font-medium text-sm border border-red-100">
//                 Our Story
//               </span>
//             </motion.div>
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent"
//             >
//               About Us
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="text-xl text-slate-600"
//             >
//               We're on a mission to help everyone find their perfect place to call home
//             </motion.p>
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.6 }}
//           className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"
//         />
//       </section>

//       {/* Our Story */}
//       <section className="py-12">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-6">
//                 Since 2010
//               </div>
//               <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">Our Story</h2>
//               <div className="space-y-6">
//                 <motion.p
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: 0.1 }}
//                   className="text-slate-600"
//                 >
//                   Founded in 2010, PropertyNearme began with a simple mission: to make the process of buying, selling,
//                   and renting properties as seamless and stress-free as possible. What started as a small team of
//                   passionate real estate enthusiasts has grown into a full-service real estate company with a nationwide
//                   presence.
//                 </motion.p>
//                 <motion.p
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: 0.2 }}
//                   className="text-slate-600"
//                 >
//                   Over the years, we've helped thousands of families find their dream homes, investors secure profitable
//                   properties, and sellers get the best value for their real estate assets. Our journey has been defined
//                   by our unwavering commitment to client satisfaction and our deep understanding of the real estate
//                   market.
//                 </motion.p>
//                 <motion.p
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: 0.3 }}
//                   className="text-slate-600"
//                 >
//                   Today, we continue to innovate and evolve, leveraging the latest technologies and market insights to
//                   provide our clients with exceptional service and results.
//                 </motion.p>
//               </div>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="relative"
//             >
//               <div className="absolute inset-0 border-2 border-red-500 rounded-2xl translate-x-6 translate-y-6" />
//               <img
//                 src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
//                 alt="Our Story"
//                 className="rounded-2xl shadow-2xl w-full h-auto relative z-10"
//               />
//               <motion.div
//                 initial={{ opacity: 0, scale: 0 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.6 }}
//                 className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 z-20"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="bg-red-500 text-white p-3 rounded-xl">
//                     <Building className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-slate-500">Projects Completed</div>
//                     <div className="text-2xl font-bold text-slate-800">500+</div>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Our Values */}
//       <section className="py-12 bg-slate-50" ref={ref}>
//         <div className="container mx-auto px-4 md:px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6 }}
//             className="text-center max-w-3xl mx-auto mb-10"
//           >
//             <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-6">
//               What Drives Us
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">Our Values</h2>
//             <p className="text-xl text-slate-600">The principles that guide everything we do</p>
//           </motion.div>

//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
//           >
//             {[
//               {
//                 icon: <Heart className="h-10 w-10 text-white" />,
//                 color: "bg-red-500",
//                 title: "Client-Centric",
//                 description: "We put our clients' needs first, always striving to exceed expectations.",
//               },
//               {
//                 icon: <Award className="h-10 w-10 text-white" />,
//                 color: "bg-red-600",
//                 title: "Excellence",
//                 description: "We are committed to delivering excellence in every aspect of our service.",
//               },
//               {
//                 icon: <Shield className="h-10 w-10 text-white" />,
//                 color: "bg-red-500",
//                 title: "Integrity",
//                 description: "We operate with honesty, transparency, and ethical standards.",
//               },
//               {
//                 icon: <Lightbulb className="h-10 w-10 text-white" />,
//                 color: "bg-red-600",
//                 title: "Innovation",
//                 description: "We continuously evolve and innovate to improve our services.",
//               },
//             ].map((value, index) => (
//               <motion.div
//                 key={value.title}
//                 variants={itemVariant}
//                 className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-slate-100 group"
//               >
//                 <div
//                   className={`${value.color} rounded-2xl p-4 inline-flex mb-6 group-hover:scale-110 transition-transform duration-300`}
//                 >
//                   {value.icon}
//                 </div>
//                 <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-red-600 transition-colors duration-300">
//                   {value.title}
//                 </h3>
//                 <p className="text-slate-600">{value.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Team */}
//       <section className="py-12">
//         <div className="container mx-auto px-4 md:px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center max-w-3xl mx-auto mb-10"
//           >
//             <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-6">
//               Meet Our Experts
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">Our Team</h2>
//             <p className="text-xl text-slate-600">The professionals who make it all happen</p>
//           </motion.div>

//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//           >
//             {[
//               {
//                 name: "John Smith",
//                 position: "CEO & Founder",
//                 // image:
//                   // "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//               },
//               {
//                 name: "Sarah Johnson",
//                 position: "Head of Sales",
//                 // image:
//                   // "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
//               },
//               {
//                 name: "Michael Brown",
//                 position: "Senior Property Consultant",
//                 // image:
//                   // "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//               },
//             ].map((member, index) => (
//               <motion.div key={member.name} variants={itemVariant} className="group">
//                 <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-slate-100">
//                   <div className="relative overflow-hidden">
//                     <img
//                       src={member.image || "/placeholder.svg?height=400&width=300"}
//                       alt={member.name}
//                       className="w-full h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   </div>
//                   <div className="p-6 relative">
//                     <motion.div
//                       variants={scaleIn}
//                       className="absolute -top-8 right-6 bg-red-500 text-white p-3 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                     >
//                       <Users className="w-6 h-6" />
//                     </motion.div>
//                     <h3 className="text-xl font-bold mb-1 text-slate-800 group-hover:text-red-600 transition-colors duration-300">
//                       {member.name}
//                     </h3>
//                     <p className="text-slate-500 mb-4">{member.position}</p>
//                     <div className="flex space-x-4">
//                       <a href="#" className="text-slate-400 hover:text-red-500 transition-colors duration-300">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="20"
//                           height="20"
//                           fill="currentColor"
//                           viewBox="0 0 16 16"
//                         >
//                           <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
//                         </svg>
//                       </a>
//                       <a href="#" className="text-slate-400 hover:text-red-500 transition-colors duration-300">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="20"
//                           height="20"
//                           fill="currentColor"
//                           viewBox="0 0 16 16"
//                         >
//                           <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
//                         </svg>
//                       </a>
//                       <a href="#" className="text-slate-400 hover:text-red-500 transition-colors duration-300">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="20"
//                           height="20"
//                           fill="currentColor"
//                           viewBox="0 0 16 16"
//                         >
//                           <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
//                         </svg>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Stats */}
//       <section className="py-12 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600" />
//         <div className="absolute w-96 h-96 bg-white rounded-full -top-20 -left-20 blur-3xl opacity-10" />
//         <div className="absolute w-96 h-96 bg-white rounded-full -bottom-20 -right-20 blur-3xl opacity-10" />

//         <div className="container mx-auto px-4 md:px-6 relative z-10">
//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid grid-cols-2 md:grid-cols-4 gap-8"
//           >
//             {[
//               { number: "1000+", label: "Properties Sold" },
//               { number: "500+", label: "Happy Clients" },
//               { number: "10+", label: "Years Experience" },
//               { number: "20+", label: "Expert Agents" },
//             ].map((stat, index) => (
//               <motion.div key={stat.label} variants={itemVariant} className="text-center">
//                 <motion.div
//                   initial={{ scale: 0.5, opacity: 0 }}
//                   whileInView={{ scale: 1, opacity: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ type: "spring", stiffness: 200, damping: 10, delay: index * 0.1 }}
//                   className="text-4xl md:text-5xl font-bold mb-2 text-white"
//                 >
//                   {stat.number}
//                 </motion.div>
//                 <div className="text-lg text-white/80">{stat.label}</div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-12">
//         <div className="container mx-auto px-4 md:px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 overflow-hidden relative"
//           >
//             <div className="absolute w-96 h-96 bg-red-500 rounded-full -top-20 -right-20 blur-3xl opacity-10" />
//             <div className="absolute w-96 h-96 bg-red-600 rounded-full -bottom-20 -left-20 blur-3xl opacity-10" />

//             <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
//               <div>
//                 <motion.h2
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6 }}
//                   className="text-3xl md:text-4xl font-bold mb-4"
//                 >
//                   Ready to Find Your Dream Home?
//                 </motion.h2>
//                 <motion.p
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: 0.1 }}
//                   className="text-slate-300 mb-8"
//                 >
//                   Our team of experts is ready to help you find the perfect property. Get in touch with us today!
//                 </motion.p>
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: 0.2 }}
//                 >
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-medium shadow-lg shadow-red-900/20 hover:shadow-xl hover:shadow-red-900/20 transition-all duration-300 flex items-center gap-2 group"
//                   >
//                     Contact Us
//                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                   </motion.button>
//                 </motion.div>
//               </div>
//               <div className="hidden md:block">
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
//                   whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: 0.3 }}
//                   className="relative"
//                 >
//                   <div className="absolute inset-0 border-2 border-red-500 rounded-2xl -rotate-3 scale-105" />
//                   <img
//                     src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80"
//                     alt="Contact Us"
//                     className="rounded-2xl w-full h-80 object-cover rotate-3 shadow-lg"
//                   />
//                 </motion.div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default About

"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Users, Award, Building, ArrowRight, Heart, Shield, Lightbulb } from "lucide-react"
import { Link } from "react-router-dom"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden bg-gray-700">
        <div className="absolute inset-0 z-0">
          <div className="absolute w-96 h-96 bg-white/10 rounded-full -top-20 -left-20 blur-3xl"></div>
          <div className="absolute w-96 h-96 bg-white/10 rounded-full -bottom-20 -right-20 blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80')] bg-cover bg-center opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 rounded-full bg-white/20 text-white font-medium text-sm border border-white/30">
                Our Story
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-white/90"
            >
              We're on a mission to help everyone find their perfect place to call home
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-400 to-transparent"
        />
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-6">
                Since 2010
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">Our Story</h2>
              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-slate-600"
                >
                  Founded in 2010, PropertyNearme began with a simple mission: to make the process of buying, selling,
                  and renting properties as seamless and stress-free as possible. What started as a small team of
                  passionate real estate enthusiasts has grown into a full-service real estate company with a nationwide
                  presence.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-slate-600"
                >
                  Over the years, we've helped thousands of families find their dream homes, investors secure profitable
                  properties, and sellers get the best value for their real estate assets. Our journey has been defined
                  by our unwavering commitment to client satisfaction and our deep understanding of the real estate
                  market.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-slate-600"
                >
                  Today, we continue to innovate and evolve, leveraging the latest technologies and market insights to
                  provide our clients with exceptional service and results.
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 border-2 border-red-500 rounded-2xl translate-x-6 translate-y-6" />
              <img
                src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                alt="Our Story"
                className="rounded-2xl shadow-2xl w-full h-auto relative z-10"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-red-500 text-white p-3 rounded-xl">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Projects Completed</div>
                    <div className="text-2xl font-bold text-slate-800">500+</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-6">
              What Drives Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">Our Values</h2>
            <p className="text-xl text-slate-600">The principles that guide everything we do</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: <Heart className="h-10 w-10 text-white" />,
                color: "bg-gradient-to-br from-red-500 to-red-600",
                title: "Client-Centric",
                description: "We put our clients' needs first, always striving to exceed expectations.",
              },
              {
                icon: <Award className="h-10 w-10 text-white" />,
                color: "bg-gradient-to-br from-amber-500 to-amber-600",
                title: "Excellence",
                description: "We are committed to delivering excellence in every aspect of our service.",
              },
              {
                icon: <Shield className="h-10 w-10 text-white" />,
                color: "bg-gradient-to-br from-blue-500 to-blue-600",
                title: "Integrity",
                description: "We operate with honesty, transparency, and ethical standards.",
              },
              {
                icon: <Lightbulb className="h-10 w-10 text-white" />,
                color: "bg-gradient-to-br from-purple-500 to-purple-600",
                title: "Innovation",
                description: "We continuously evolve and innovate to improve our services.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariant}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-slate-100 group"
              >
                <div
                  className={`${value.color} rounded-2xl p-4 inline-flex mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-red-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-6">
              Meet Our Experts
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">Our Team</h2>
            <p className="text-xl text-slate-600">The professionals who make it all happen</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {[
              {
                name: "John Smith",
                position: "CEO & Founder",
                image:
                  "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              },
              {
                name: "Sarah Johnson",
                position: "Head of Sales",
                image:
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
              },
              {
                name: "Michael Brown",
                position: "Senior Property Consultant",
                image:
                  "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              },
            ].map((member, index) => (
              <motion.div key={member.name} variants={itemVariant} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-slate-100">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg?height=400&width=300"}
                      alt={member.name}
                      className="w-full h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 relative">
                    <motion.div
                      variants={scaleIn}
                      className="absolute -top-8 right-6 bg-red-500 text-white p-3 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <Users className="w-6 h-6" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-1 text-slate-800 group-hover:text-red-600 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-slate-500 mb-4">{member.position}</p>
                    <div className="flex space-x-4">
                      <a href="#" className="text-slate-400 hover:text-red-500 transition-colors duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                      </a>
                      <a href="#" className="text-slate-400 hover:text-red-500 transition-colors duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                      </a>
                      <a href="#" className="text-slate-400 hover:text-red-500 transition-colors duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Stats */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700" />
        <div className="absolute w-96 h-96 bg-white/10 rounded-full -top-20 -left-20 blur-3xl" />
        <div className="absolute w-96 h-96 bg-white/10 rounded-full -bottom-20 -right-20 blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "1000+", label: "Properties Sold" },
              { number: "500+", label: "Happy Clients" },
              { number: "10+", label: "Years Experience" },
              { number: "20+", label: "Expert Agents" },
            ].map((stat, index) => (
              <motion.div key={stat.label} variants={itemVariant} className="text-center">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 10, delay: index * 0.1 }}
                  className="text-4xl md:text-5xl font-bold mb-2 text-white"
                >
                  {stat.number}
                </motion.div>
                <div className="text-lg text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 overflow-hidden relative"
          >
            <div className="absolute w-96 h-96 bg-red-500/20 rounded-full -top-20 -right-20 blur-3xl" />
            <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full -bottom-20 -left-20 blur-3xl" />

            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl md:text-4xl font-bold mb-4 text-white"
                >
                  Ready to Find Your Dream Home?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-gray-300 mb-8"
                >
                  Our team of experts is ready to help you find the perfect property. Get in touch with us today!
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Link
                    to="/contact"
                    className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group inline-flex"
                  >
                    Contact Us
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
              <div className="hidden md:block">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative"
                >
                  <div className="absolute inset-0 border-2 border-red-500 rounded-2xl -rotate-3 scale-105" />
                  <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80"
                    alt="Contact Us"
                    className="rounded-2xl w-full h-80 object-cover rotate-3 shadow-lg"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
