// "use client"

// import { useState, useEffect } from "react"
// import { Link, useLocation } from "react-router-dom"
// import { motion } from "framer-motion"
// import { isAuthenticated, logout } from "../utils/auth"
// import { Menu, X, ChevronDown } from "lucide-react"

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const location = useLocation()
//   const authenticated = isAuthenticated()

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         setScrolled(true)
//       } else {
//         setScrolled(false)
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const handleLogout = () => {
//     logout()
//     window.location.href = "/"
//   }

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Projects", path: "/projects" },
//     { name: "Property", path: "/property" },
//   ]

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
//       }`}
//     >
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="flex justify-between items-center">
//           <Link to="/" className="flex items-center">
//             <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold text-primary">
//               PropertyNearme<span className="text-secondary"></span>
//             </motion.div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className={`font-medium transition-colors hover:text-primary ${
//                   location.pathname === link.path ? "text-primary" : "text-gray-700"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}

//             {authenticated ? (
//               <div className="relative group">
//                 <button className="flex items-center font-medium text-gray-700 hover:text-primary">
//                   Account <ChevronDown className="ml-1 h-4 w-4" />
//                 </button>
//                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//                   <Link to="/add-property" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                     Add Property
//                   </Link>
//                   <button
//                     onClick={handleLogout}
//                     className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <Link to="/login" className="btn-primary">
//                 Login / Signup
//               </Link>
//             )}
//           </div>

//           {/* Mobile Navigation Toggle */}
//           <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation Menu */}
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: "auto" }}
//           exit={{ opacity: 0, height: 0 }}
//           className="md:hidden bg-white"
//         >
//           <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className={`font-medium transition-colors hover:text-primary ${
//                   location.pathname === link.path ? "text-primary" : "text-gray-700"
//                 }`}
//                 onClick={() => setIsOpen(false)}
//               >
//                 {link.name}
//               </Link>
//             ))}

//             {authenticated ? (
//               <>
//                 <Link
//                   to="/add-property"
//                   className="font-medium text-gray-700 hover:text-primary"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Add Property
//                 </Link>
//                 <button onClick={handleLogout} className="text-left font-medium text-gray-700 hover:text-primary">
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <Link to="/login" className="btn-primary inline-block text-center" onClick={() => setIsOpen(false)}>
//                 Login / Signup
//               </Link>
//             )}
//           </div>
//         </motion.div>
//       )}
//     </motion.nav>
//   )
// }

// export default Navbar

"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { isAuthenticated, logout } from "../utils/auth"
import { Menu, X, ChevronDown, Home, Info, Building, Landmark, LogIn, Plus } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const authenticated = isAuthenticated()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogout = () => {
    logout()
    window.location.href = "/"
  }

  const navLinks = [
    { name: "Home", path: "/", icon: <Home className="w-4 h-4" /> },
    { name: "About Us", path: "/about", icon: <Info className="w-4 h-4" /> },
    { name: "Projects", path: "/projects", icon: <Building className="w-4 h-4" /> },
    { name: "Property", path: "/property", icon: <Landmark className="w-4 h-4" /> },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent"
            >
              PropertyNearme
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors hover:text-red-500 flex items-center gap-1.5 relative group ${
                  location.pathname === link.path ? "text-red-500" : "text-black"
                }`}
              >
                {link.icon}
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-red-500 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                <div className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </Link>
            ))}

            {authenticated ? (
              <div className="relative group">
                <button className="flex items-center font-medium text-gray-700 hover:text-red-500 transition-colors">
                  Account <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link
                    to="/add-property"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <Plus className="h-4 w-4 text-red-500" />
                    Add Property
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <LogIn className="h-4 w-4 text-red-500" />
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-5 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                <LogIn className="h-4 w-4" />
                Login / Signup
              </Link>
            )}
          </div>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors hover:text-red-500 flex items-center gap-2 p-2 rounded-lg ${
                  location.pathname === link.path ? "text-red-500 bg-red-50" : "text-gray-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}

            {authenticated ? (
              <>
                <Link
                  to="/add-property"
                  className="font-medium text-gray-700 hover:text-red-500 flex items-center gap-2 p-2 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <Plus className="h-4 w-4" />
                  Add Property
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-left font-medium text-gray-700 hover:text-red-500 flex items-center gap-2 p-2 rounded-lg w-full"
                >
                  <LogIn className="h-4 w-4" />
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="px-5 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <LogIn className="h-4 w-4" />
                Login / Signup
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
