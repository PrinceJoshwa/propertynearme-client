// "use client"
// import { motion } from "framer-motion"
// import { Home, Building, MapPin, Search, Key, Users, FileText, Briefcase } from "lucide-react"

// const services = [
//   {
//     icon: <Home className="h-10 w-10 text-white" />,
//     title: "Residential Properties",
//     description:
//       "Find your dream home from our extensive collection of apartments, villas, and houses in prime locations.",
//     color: "bg-red-500",
//   },
//   {
//     icon: <Building className="h-10 w-10 text-white" />,
//     title: "Commercial Properties",
//     description: "Discover premium office spaces, retail shops, and commercial plots for your business needs.",
//     color: "bg-red-600",
//   },
//   {
//     icon: <MapPin className="h-10 w-10 text-white" />,
//     title: "Land & Plots",
//     description: "Invest in high-potential land and plots in developing areas with excellent appreciation value.",
//     color: "bg-red-500",
//   },
//   {
//     icon: <Search className="h-10 w-10 text-white" />,
//     title: "Property Consultation",
//     description: "Get expert advice on property investment, legal documentation, and market trends.",
//     color: "bg-red-600",
//   },
//   {
//     icon: <Key className="h-10 w-10 text-white" />,
//     title: "Property Management",
//     description: "We handle maintenance, tenant relations, and rent collection for your investment properties.",
//     color: "bg-red-500",
//   },
//   {
//     icon: <Users className="h-10 w-10 text-white" />,
//     title: "Legal Assistance",
//     description: "Our legal experts ensure smooth property transactions with proper documentation and verification.",
//     color: "bg-red-600",
//   },
//   {
//     icon: <FileText className="h-10 w-10 text-white" />,
//     title: "Documentation",
//     description: "We assist with all property-related documentation, from sale deeds to registration processes.",
//     color: "bg-red-500",
//   },
//   {
//     icon: <Briefcase className="h-10 w-10 text-white" />,
//     title: "Investment Advisory",
//     description: "Get professional guidance on property investments to maximize returns and minimize risks.",
//     color: "bg-red-600",
//   },
// ]

// const ServicesSection = () => {
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

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="text-center mb-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-4"
//           >
//             Our Services
//           </motion.div>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="text-3xl md:text-4xl font-bold mb-4"
//           >
//             Comprehensive Real Estate Solutions
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="text-xl text-gray-600 max-w-3xl mx-auto"
//           >
//             We offer a wide range of services to meet all your real estate needs in Karnataka
//           </motion.p>
//         </div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
//         >
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 group"
//             >
//               <div
//                 className={`${service.color} rounded-full p-4 inline-flex mb-4 group-hover:scale-110 transition-transform duration-300`}
//               >
//                 {service.icon}
//               </div>
//               <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 transition-colors duration-300">
//                 {service.title}
//               </h3>
//               <p className="text-gray-600">{service.description}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default ServicesSection

"use client"
import { motion } from "framer-motion"
import { Home, Building, MapPin, Search, Key, Users, FileText, Briefcase } from "lucide-react"

const services = [
  {
    icon: <Home className="h-10 w-10 text-white" />,
    title: "Residential Properties",
    description:
      "Find your dream home from our extensive collection of apartments, villas, and houses in prime locations.",
    color: "bg-gradient-to-br from-red-500 to-red-600",
  },
  {
    icon: <Building className="h-10 w-10 text-white" />,
    title: "Commercial Properties",
    description: "Discover premium office spaces, retail shops, and commercial plots for your business needs.",
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
  {
    icon: <MapPin className="h-10 w-10 text-white" />,
    title: "Land & Plots",
    description: "Invest in high-potential land and plots in developing areas with excellent appreciation value.",
    color: "bg-gradient-to-br from-green-500 to-green-600",
  },
  {
    icon: <Search className="h-10 w-10 text-white" />,
    title: "Property Consultation",
    description: "Get expert advice on property investment, legal documentation, and market trends.",
    color: "bg-gradient-to-br from-purple-500 to-purple-600",
  },
  {
    icon: <Key className="h-10 w-10 text-white" />,
    title: "Property Management",
    description: "We handle maintenance, tenant relations, and rent collection for your investment properties.",
    color: "bg-gradient-to-br from-amber-500 to-amber-600",
  },
  {
    icon: <Users className="h-10 w-10 text-white" />,
    title: "Legal Assistance",
    description: "Our legal experts ensure smooth property transactions with proper documentation and verification.",
    color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
  },
  {
    icon: <FileText className="h-10 w-10 text-white" />,
    title: "Documentation",
    description: "We assist with all property-related documentation, from sale deeds to registration processes.",
    color: "bg-gradient-to-br from-pink-500 to-pink-600",
  },
  {
    icon: <Briefcase className="h-10 w-10 text-white" />,
    title: "Investment Advisory",
    description: "Get professional guidance on property investments to maximize returns and minimize risks.",
    color: "bg-gradient-to-br from-teal-500 to-teal-600",
  },
]

const ServicesSection = () => {
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

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-red-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-4 border border-white/20"
          >
            Our Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            Comprehensive Real Estate Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            We offer a wide range of services to meet all your real estate needs in Karnataka
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-white/10 group hover:bg-white/10"
            >
              <div
                className={`${service.color} rounded-xl p-4 inline-flex mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-red-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
