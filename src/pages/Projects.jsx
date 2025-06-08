// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { projects } from "../data/mockData"

// const Projects = () => {
//   const [activeTab, setActiveTab] = useState("ongoing")

//   const tabs = [
//     { id: "ongoing", label: "Ongoing Projects" },
//     { id: "completed", label: "Completed Projects" },
//     { id: "upcoming", label: "Upcoming Projects" },
//   ]

//   const filteredProjects = projects.filter((project) => project.status === activeTab)

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="pt-32 pb-16 bg-gray-50">
//         <div className="container mx-auto px-4 md:px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center max-w-3xl mx-auto"
//           >
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
//             <p className="text-xl text-gray-600">Discover our portfolio of exceptional real estate projects</p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Projects Tabs */}
//       <section className="py-16">
//         <div className="container mx-auto px-4 md:px-6">
//           {/* Tabs */}
//           <div className="flex flex-wrap justify-center mb-12">
//             <div className="bg-gray-100 p-1 rounded-lg inline-flex">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`px-6 py-2 rounded-lg font-medium transition-all ${
//                     activeTab === tab.id ? "bg-primary text-primary" : "text-gray-700 hover:bg-gray-200"
//                   }`}
//                 >
//                   {tab.label}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Projects Grid */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.3 }}
//               className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//             >
//               {filteredProjects.map((project) => (
//                 <motion.div
//                   key={project.id}
//                   whileHover={{ y: -5 }}
//                   className="bg-white rounded-lg overflow-hidden shadow-md"
//                 >
//                   <div className="relative">
//                     <img
//                       src={project.image || "/placeholder.svg"}
//                       alt={project.name}
//                       className="w-full h-64 object-cover"
//                     />
//                     <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
//                       {project.status === "ongoing"
//                         ? "Ongoing"
//                         : project.status === "completed"
//                           ? "Completed"
//                           : "Upcoming"}
//                     </div>
//                   </div>
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold mb-2">{project.name}</h3>
//                     <div className="flex items-center mb-4">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5 text-gray-500 mr-1"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                         />
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                         />
//                       </svg>
//                       <span className="text-gray-600">{project.location}</span>
//                     </div>
//                     <p className="text-gray-600 mb-4">{project.description}</p>
//                     <div className="flex justify-between items-center">
//                       <div>
//                         <span className="text-gray-600">Starting from</span>
//                         <div className="text-xl font-bold text-primary">{project.price}</div>
//                       </div>
//                       <button className="btn-primary">View Details</button>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </AnimatePresence>

//           {filteredProjects.length === 0 && (
//             <div className="text-center py-12">
//               <h3 className="text-xl font-medium text-gray-600">No projects found in this category.</h3>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="bg-white rounded-xl p-8 md:p-12 shadow-md">
//             <div className="grid md:grid-cols-2 gap-8 items-center">
//               <div>
//                 <h2 className="text-3xl font-bold mb-4">Interested in our projects?</h2>
//                 <p className="text-gray-600 mb-6">
//                   Contact our team to learn more about our current and upcoming projects. We're here to help you find
//                   the perfect property.
//                 </p>
//                 <button className="btn-primary">Get in Touch</button>
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

// export default Projects

// "use client"

// import { useState, useRef } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { projects } from "../data/mockData"
// import { MapPin, ChevronRight, ArrowRight, Clock, Calendar, Star, Building } from "lucide-react"

// const Projects = () => {
//   const [activeTab, setActiveTab] = useState("ongoing")
//   const [hoveredProject, setHoveredProject] = useState(null)
//   const constraintsRef = useRef(null)

//   const tabs = [
//     { id: "ongoing", label: "Ongoing Projects", icon: <Clock className="w-4 h-4" /> },
//     { id: "completed", label: "Completed Projects", icon: <Star className="w-4 h-4" /> },
//     { id: "upcoming", label: "Upcoming Projects", icon: <Calendar className="w-4 h-4" /> },
//   ]

//   const filteredProjects = projects.filter((project) => project.status === activeTab)

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
//   }

//   const tabVariants = {
//     inactive: { scale: 1 },
//     active: { scale: 1.05, transition: { type: "spring", stiffness: 300, damping: 20 } },
//   }

//   return (
//     <div className="bg-gradient-to-b from-gray-50 to-white">
//       {/* Hero Section */}
//       <section className="pt-32 pb-20 relative overflow-hidden">
//         <div className="absolute inset-0 z-0 opacity-10">
//           <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-30" />
//           <div className="absolute w-96 h-96 bg-red-500 rounded-full -top-20 -left-20 blur-3xl opacity-20" />
//           <div className="absolute w-96 h-96 bg-red-600 rounded-full -bottom-20 -right-20 blur-3xl opacity-20" />
//         </div>

//         <div className="container mx-auto px-4 md:px-6 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="text-center max-w-3xl mx-auto"
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="inline-block mb-6"
//             >
//               <span className="px-4 py-2 rounded-full bg-red-50 text-red-600 font-medium text-sm border border-red-100">
//                 Our Portfolio
//               </span>
//             </motion.div>
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent"
//             >
//               Exceptional Real Estate Projects
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="text-xl text-slate-600 mb-8"
//             >
//               Discover our portfolio of carefully crafted properties designed with your comfort and lifestyle in mind
//             </motion.p>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.5 }}
//             >
//               <a
//                 href="#projects"
//                 className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-medium shadow-lg shadow-red-200 hover:shadow-xl hover:shadow-red-200 transition-all duration-300 group"
//               >
//                 Explore Projects
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </a>
//             </motion.div>
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.6 }}
//           className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"
//         />
//       </section>

//       {/* Projects Tabs */}
//       <section id="projects" className="py-16">
//         <div className="container mx-auto px-4 md:px-6">
//           {/* Tabs */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="flex flex-wrap justify-center mb-16"
//           >
//             <div className="bg-white p-2 rounded-2xl inline-flex shadow-lg shadow-slate-200/50">
//               {tabs.map((tab) => (
//                 <motion.button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   variants={tabVariants}
//                   animate={activeTab === tab.id ? "active" : "inactive"}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
//                     activeTab === tab.id
//                       ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md"
//                       : "text-slate-600 hover:bg-slate-100"
//                   }`}
//                 >
//                   {tab.icon}
//                   {tab.label}
//                 </motion.button>
//               ))}
//             </div>
//           </motion.div>

//           {/* Projects Grid */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab}
//               initial="hidden"
//               animate="visible"
//               exit={{ opacity: 0, y: -20 }}
//               variants={containerVariants}
//               className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//               ref={constraintsRef}
//             >
//               {filteredProjects.map((project) => (
//                 <motion.div
//                   key={project.id}
//                   variants={itemVariants}
//                   whileHover={{ y: -10, transition: { duration: 0.3 } }}
//                   onHoverStart={() => setHoveredProject(project.id)}
//                   onHoverEnd={() => setHoveredProject(null)}
//                   className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 group"
//                 >
//                   <div className="relative overflow-hidden">
//                     <motion.div
//                       whileHover={{ scale: 1.05 }}
//                       transition={{ duration: 0.5 }}
//                       className="relative h-64 overflow-hidden"
//                     >
//                       <img
//                         src={project.image || "/placeholder.svg?height=400&width=600"}
//                         alt={project.name}
//                         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     </motion.div>

//                     <div className="absolute top-4 right-4 z-10">
//                       <span
//                         className={`px-4 py-1.5 rounded-full text-sm font-medium ${
//                           project.status === "ongoing"
//                             ? "bg-amber-100 text-amber-600"
//                             : project.status === "completed"
//                               ? "bg-green-100 text-green-600"
//                               : "bg-purple-100 text-purple-600"
//                         }`}
//                       >
//                         {project.status === "ongoing"
//                           ? "Ongoing"
//                           : project.status === "completed"
//                             ? "Completed"
//                             : "Upcoming"}
//                       </span>
//                     </div>

//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{
//                         opacity: hoveredProject === project.id ? 1 : 0,
//                         y: hoveredProject === project.id ? 0 : 20,
//                       }}
//                       transition={{ duration: 0.3 }}
//                       className="absolute bottom-0 left-0 right-0 p-4 text-white z-10"
//                     >
//                       <div className="flex items-center gap-2 text-sm">
//                         <Building className="w-4 h-4" />
//                         <span>{project.type || "Residential"}</span>
//                       </div>
//                     </motion.div>
//                   </div>

//                   <div className="p-6">
//                     <h3 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-red-600 transition-colors duration-300">
//                       {project.name}
//                     </h3>
//                     <div className="flex items-center mb-4 text-slate-500">
//                       <MapPin className="h-4 w-4 text-red-500 mr-1 flex-shrink-0" />
//                       <span className="text-sm">{project.location}</span>
//                     </div>
//                     <p className="text-slate-600 mb-6 line-clamp-2">{project.description}</p>
//                     <div className="flex justify-between items-center">
//                       <div>
//                         <span className="text-sm text-slate-500">Starting from</span>
//                         <div className="text-xl font-bold text-red-600">{project.price}</div>
//                       </div>
//                       <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="inline-flex items-center gap-1 px-4 py-2 bg-red-50 text-red-600 rounded-lg font-medium hover:bg-red-100 transition-colors duration-300"
//                       >
//                         View Details
//                         <ChevronRight className="w-4 h-4" />
//                       </motion.button>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </AnimatePresence>

//           {filteredProjects.length === 0 && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.6 }}
//               className="text-center py-16"
//             >
//               <div className="inline-block p-4 bg-slate-100 rounded-full mb-4">
//                 <Building className="w-8 h-8 text-slate-400" />
//               </div>
//               <h3 className="text-xl font-medium text-slate-600 mb-2">No projects found in this category</h3>
//               <p className="text-slate-500 max-w-md mx-auto">
//                 We're constantly working on new projects. Check back soon or explore other categories.
//               </p>
//             </motion.div>
//           )}
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-20 bg-slate-50">
//         <div className="container mx-auto px-4 md:px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 overflow-hidden relative"
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
//                   className="text-3xl md:text-4xl font-bold mb-4 text-slate-800"
//                 >
//                   Interested in our projects?
//                 </motion.h2>
//                 <motion.p
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: 0.1 }}
//                   className="text-slate-600 mb-8"
//                 >
//                   Contact our team to learn more about our current and upcoming projects. We're here to help you find
//                   the perfect property that meets all your requirements.
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
//                     className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-medium shadow-lg shadow-red-200/50 hover:shadow-xl hover:shadow-red-200/50 transition-all duration-300 flex items-center gap-2 group"
//                   >
//                     Get in Touch
//                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                   </motion.button>
//                 </motion.div>
//               </div>
//               <div className="hidden md:block">
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
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

// export default Projects


"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { projects } from "../data/mockData"
import { MapPin, ChevronRight, ArrowRight, Clock, Calendar, Star, Building } from "lucide-react"

const Projects = () => {
  const [activeTab, setActiveTab] = useState("ongoing")
  const [hoveredProject, setHoveredProject] = useState(null)
  const constraintsRef = useRef(null)

  const tabs = [
    { id: "ongoing", label: "Ongoing Projects", icon: <Clock className="w-4 h-4" /> },
    { id: "completed", label: "Completed Projects", icon: <Star className="w-4 h-4" /> },
    { id: "upcoming", label: "Upcoming Projects", icon: <Calendar className="w-4 h-4" /> },
  ]

  const filteredProjects = projects.filter((project) => project.status === activeTab)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  const tabVariants = {
    inactive: { scale: 1 },
    active: { scale: 1.05, transition: { type: "spring", stiffness: 300, damping: 20 } },
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden bg-gray-700">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-30" />
          <div className="absolute w-96 h-96 bg-red-500 rounded-full -top-20 -left-20 blur-3xl opacity-20" />
          <div className="absolute w-96 h-96 bg-red-600 rounded-full -bottom-20 -right-20 blur-3xl opacity-20" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 rounded-full bg-red-50 text-red-600 font-medium text-sm border border-red-100">
                Our Portfolio
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent"
            >
              Exceptional Real Estate Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-white mb-6"
            >
              Discover our portfolio of carefully crafted properties designed with your comfort and lifestyle in mind
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-medium shadow-red-200 hover:shadow-xl hover:shadow-red-200 transition-all duration-300 group"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-0 left-0 right-0 h-24"
        />
      </section>

      {/* Projects Tabs */}
      <section id="projects" className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center mb-10"
          >
            <div className="bg-white p-2 rounded-2xl inline-flex shadow-lg shadow-slate-200/50">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  variants={tabVariants}
                  animate={activeTab === tab.id ? "active" : "inactive"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              ref={constraintsRef}
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 group"
                >
                  <div className="relative overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      className="relative h-64 overflow-hidden"
                    >
                      <img
                        src={project.image || "/placeholder.svg?height=400&width=600"}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>

                    <div className="absolute top-4 right-4 z-10">
                      <span
                        className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                          project.status === "ongoing"
                            ? "bg-amber-100 text-amber-600"
                            : project.status === "completed"
                              ? "bg-green-100 text-green-600"
                              : "bg-purple-100 text-purple-600"
                        }`}
                      >
                        {project.status === "ongoing"
                          ? "Ongoing"
                          : project.status === "completed"
                            ? "Completed"
                            : "Upcoming"}
                      </span>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                        y: hoveredProject === project.id ? 0 : 20,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-0 right-0 p-4 text-white z-10"
                    >
                      <div className="flex items-center gap-2 text-sm">
                        <Building className="w-4 h-4" />
                        <span>{project.type || "Residential"}</span>
                      </div>
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-red-600 transition-colors duration-300">
                      {project.name}
                    </h3>
                    <div className="flex items-center mb-4 text-slate-500">
                      <MapPin className="h-4 w-4 text-red-500 mr-1 flex-shrink-0" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <p className="text-slate-600 mb-6 line-clamp-2">{project.description}</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-sm text-slate-500">Starting from</span>
                        <div className="text-xl font-bold text-red-600">{project.price}</div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-1 px-4 py-2 bg-red-50 text-red-600 rounded-lg font-medium hover:bg-red-100 transition-colors duration-300"
                      >
                        View Details
                        <ChevronRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <div className="inline-block p-4 bg-slate-100 rounded-full mb-4">
                <Building className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-medium text-slate-600 mb-2">No projects found in this category</h3>
              <p className="text-slate-500 max-w-md mx-auto">
                We're constantly working on new projects. Check back soon or explore other categories.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 overflow-hidden relative"
          >
            <div className="absolute w-96 h-96 bg-red-500 rounded-full -top-20 -right-20 blur-3xl opacity-10" />
            <div className="absolute w-96 h-96 bg-red-600 rounded-full -bottom-20 -left-20 blur-3xl opacity-10" />

            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl md:text-3xl font-bold mb-3 text-slate-800"
                >
                  Interested in our projects?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-slate-600 mb-6"
                >
                  Contact our team to learn more about our current and upcoming projects. We're here to help you find
                  the perfect property that meets all your requirements.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-medium shadow-lg shadow-red-200/50 hover:shadow-xl hover:shadow-red-200/50 transition-all duration-300 flex items-center gap-2 group"
                  >
                    Get in Touch
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </motion.div>
              </div>
              <div className="hidden md:block">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
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

export default Projects

