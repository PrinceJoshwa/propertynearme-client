"use client"

import { motion } from "framer-motion"

const DeveloperLogo = ({ developer }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="flex items-center justify-center p-4 ">
      <img src={developer.logo || "/placeholder.svg"} alt={developer.name} className=" max-w-full" />
    </motion.div>
  )
}

export default DeveloperLogo

