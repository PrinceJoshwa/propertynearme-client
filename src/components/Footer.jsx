// import { Link } from "react-router-dom"
// import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white pt-16 pb-8">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div>
//             <h3 className="text-xl font-bold mb-4">PropertyNearme</h3>
//             <p className="text-gray-400 mb-4">
//               Your trusted partner in finding the perfect property for your needs. We provide exceptional real estate
//               services with a focus on client satisfaction.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-400 hover:text-primary transition-colors">
//                 <Facebook size={20} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-primary transition-colors">
//                 <Twitter size={20} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-primary transition-colors">
//                 <Instagram size={20} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-primary transition-colors">
//                 <Linkedin size={20} />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-xl font-bold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link to="/" className="text-gray-400 hover:text-primary transition-colors">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about" className="text-gray-400 hover:text-primary transition-colors">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/projects" className="text-gray-400 hover:text-primary transition-colors">
//                   Projects
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/property" className="text-gray-400 hover:text-primary transition-colors">
//                   Property
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/login" className="text-gray-400 hover:text-primary transition-colors">
//                   Login
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Property Types */}
//           <div>
//             <h3 className="text-xl font-bold mb-4">Property Types</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-primary transition-colors">
//                   Apartments
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-primary transition-colors">
//                   Villas
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-primary transition-colors">
//                   Commercial
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-primary transition-colors">
//                   Plots
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-primary transition-colors">
//                   Luxury Homes
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-xl font-bold mb-4">Contact Us</h3>
//             <ul className="space-y-3">
//               <li className="flex items-start">
//                 <MapPin className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
//                 <span className="text-gray-400">#55, 3rd cross CSB layout Kasavanahallisarjapura road 
//                 Bangalore 35</span>
//               </li>
//               <li className="flex items-center">
//                 <Phone className="mr-2 h-5 w-5 text-primary" />
//                 <span className="text-gray-400">+91 96063 34692</span>
//               </li>
//               {/* <li className="flex items-center">
//                 <Mail className="mr-2 h-5 w-5 text-primary" />
//                 <span className="text-gray-400">info@PropertyNearme.com</span>
//               </li> */}
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
//           <p>&copy; {new Date().getFullYear()} PropertyNearme. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer

import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
              PropertyNearme
            </h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner in finding the perfect property in Karnataka. We offer a wide range of residential and commercial properties.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-red-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/property" className="text-gray-400 hover:text-red-500 transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-red-500 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-red-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-red-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="text-lg font-bold mb-4">Property Types</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/property?type=Apartment" className="text-gray-400 hover:text-red-500 transition-colors">
                  Apartments
                </Link>
              </li>
              <li>
                <Link to="/property?type=Villa" className="text-gray-400 hover:text-red-500 transition-colors">
                  Villas
                </Link>
              </li>
              <li>
                <Link to="/property?type=Plot" className="text-gray-400 hover:text-red-500 transition-colors">
                  Plots
                </Link>
              </li>
              <li>
                <Link to="/property?type=Farmland" className="text-gray-400 hover:text-red-500 transition-colors">
                  Farmlands
                </Link>
              </li>
              <li>
                <Link to="/property?type=Commercial" className="text-gray-400 hover:text-red-500 transition-colors">
                  Commercial
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                #55, 3rd cross CSB layout, Kasavanahallisarjapura road, Bangalore-35
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-red-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400">+91 96063 34692</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-red-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400">info@propertynearme.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 pb-4 mb-4">
          <div className="max-w-xl mx-auto text-center">
            <h4 className="text-lg font-bold mb-2">Subscribe to Our Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Stay updated with the latest properties and real estate news
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-md hover:shadow-lg transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} PropertyNearme. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
