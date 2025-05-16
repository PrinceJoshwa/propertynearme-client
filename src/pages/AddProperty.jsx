// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Upload, X, Check } from "lucide-react"

// const AddProperty = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     price: "",
//     location: "",
//     type: "",
//     bedrooms: "",
//     bathrooms: "",
//     area: "",
//     features: [],
//   })

//   const [images, setImages] = useState([])
//   const [previewImages, setPreviewImages] = useState([])
//   const [submitting, setSubmitting] = useState(false)
//   const [success, setSuccess] = useState(false)

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleFeatureChange = (e) => {
//     const { value, checked } = e.target
//     if (checked) {
//       setFormData((prev) => ({ ...prev, features: [...prev.features, value] }))
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         features: prev.features.filter((feature) => feature !== value),
//       }))
//     }
//   }

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files)
//     setImages((prev) => [...prev, ...files])

//     // Create preview URLs
//     const newPreviewImages = files.map((file) => URL.createObjectURL(file))
//     setPreviewImages((prev) => [...prev, ...newPreviewImages])
//   }

//   const removeImage = (index) => {
//     const newImages = [...images]
//     newImages.splice(index, 1)
//     setImages(newImages)

//     const newPreviewImages = [...previewImages]
//     URL.revokeObjectURL(newPreviewImages[index])
//     newPreviewImages.splice(index, 1)
//     setPreviewImages(newPreviewImages)
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setSubmitting(true)

//     // Simulate API call
//     setTimeout(() => {
//       setSubmitting(false)
//       setSuccess(true)

//       // Reset form after 3 seconds
//       setTimeout(() => {
//         setFormData({
//           title: "",
//           description: "",
//           price: "",
//           location: "",
//           type: "",
//           bedrooms: "",
//           bathrooms: "",
//           area: "",
//           features: [],
//         })
//         setImages([])
//         setPreviewImages([])
//         setSuccess(false)
//       }, 3000)
//     }, 2000)
//   }

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
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">Add Your Property</h1>
//             <p className="text-xl text-gray-600">List your property with us and reach thousands of potential buyers</p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Add Property Form */}
//       <section className="py-16">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
//             {success ? (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="p-8 text-center"
//               >
//                 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <Check className="h-8 w-8 text-green-600" />
//                 </div>
//                 <h2 className="text-2xl font-bold mb-4">Property Added Successfully!</h2>
//                 <p className="text-gray-600 mb-6">
//                   Your property has been added to our listings. Our team will review it shortly.
//                 </p>
//                 <button onClick={() => setSuccess(false)} className="btn-primary">
//                   Add Another Property
//                 </button>
//               </motion.div>
//             ) : (
//               <form onSubmit={handleSubmit} className="p-8">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   {/* Basic Information */}
//                   <div className="md:col-span-2">
//                     <h2 className="text-xl font-bold mb-4">Basic Information</h2>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Property Title*</label>
//                     <input
//                       type="text"
//                       name="title"
//                       value={formData.title}
//                       onChange={handleChange}
//                       className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Price (₹)*</label>
//                     <input
//                       type="number"
//                       name="price"
//                       value={formData.price}
//                       onChange={handleChange}
//                       className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
//                       required
//                     />
//                   </div>

//                   <div className="md:col-span-2">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Description*</label>
//                     <textarea
//                       name="description"
//                       value={formData.description}
//                       onChange={handleChange}
//                       rows="4"
//                       className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
//                       required
//                     ></textarea>
//                   </div>

//                   {/* Property Details */}
//                   <div className="md:col-span-2 mt-6">
//                     <h2 className="text-xl font-bold mb-4">Property Details</h2>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Location*</label>
//                     <select
//                       name="location"
//                       value={formData.location}
//                       onChange={handleChange}
//                       className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
//                       required
//                     >
//                       <option value="">Select Location</option>
//                       <option value="Bangalore">Bangalore</option>
//                       <option value="Mumbai">Mumbai</option>
//                       <option value="Delhi">Delhi</option>
//                       <option value="Chennai">Chennai</option>
//                       <option value="Hyderabad">Hyderabad</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Property Type*</label>
//                     <select
//                       name="type"
//                       value={formData.type}
//                       onChange={handleChange}
//                       className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
//                       required
//                     >
//                       <option value="">Select Type</option>
//                       <option value="Apartment">Apartment</option>
//                       <option value="Villa">Villa</option>
//                       <option value="House">House</option>
//                       <option value="Plot">Plot</option>
//                       <option value="Commercial">Commercial</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
//                     <select
//                       name="bedrooms"
//                       value={formData.bedrooms}
//                       onChange={handleChange}
//                       className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
//                     >
//                       <option value="">Select Bedrooms</option>
//                       <option value="1">1 BHK</option>
//                       <option value="2">2 BHK</option>
//                       <option value="3">3 BHK</option>
//                       <option value="4">4 BHK</option>
//                       <option value="5+">5+ BHK</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
//                     <select
//                       name="bathrooms"
//                       value={formData.bathrooms}
//                       onChange={handleChange}
//                       className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
//                     >
//                       <option value="">Select Bathrooms</option>
//                       <option value="1">1</option>
//                       <option value="2">2</option>
//                       <option value="3">3</option>
//                       <option value="4">4</option>
//                       <option value="5+">5+</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Area (sq.ft)*</label>
//                     <input
//                       type="number"
//                       name="area"
//                       value={formData.area}
//                       onChange={handleChange}
//                       className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
//                       required
//                     />
//                   </div>

//                   {/* Features */}
//                   <div className="md:col-span-2 mt-6">
//                     <h2 className="text-xl font-bold mb-4">Features</h2>
//                     <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                       {[
//                         "Air Conditioning",
//                         "Balcony",
//                         "Gym",
//                         "Swimming Pool",
//                         "Garden",
//                         "Parking",
//                         "Security",
//                         "Power Backup",
//                         "Elevator",
//                         "Furnished",
//                         "CCTV",
//                         "Playground",
//                       ].map((feature) => (
//                         <div key={feature} className="flex items-center">
//                           <input
//                             type="checkbox"
//                             id={feature}
//                             value={feature}
//                             checked={formData.features.includes(feature)}
//                             onChange={handleFeatureChange}
//                             className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
//                           />
//                           <label htmlFor={feature} className="ml-2 text-sm text-gray-700">
//                             {feature}
//                           </label>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Images */}
//                   <div className="md:col-span-2 mt-6">
//                     <h2 className="text-xl font-bold mb-4">Property Images</h2>
//                     <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
//                       <input
//                         type="file"
//                         id="images"
//                         multiple
//                         accept="image/*"
//                         onChange={handleImageChange}
//                         className="hidden"
//                       />
//                       <label htmlFor="images" className="cursor-pointer flex flex-col items-center justify-center">
//                         <Upload className="h-12 w-12 text-gray-400 mb-2" />
//                         <p className="text-gray-700 font-medium">Click to upload images</p>
//                         <p className="text-gray-500 text-sm mt-1">PNG, JPG, GIF up to 10MB</p>
//                       </label>
//                     </div>

//                     {previewImages.length > 0 && (
//                       <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//                         {previewImages.map((preview, index) => (
//                           <div key={index} className="relative">
//                             <img
//                               src={preview || "/placeholder.svg"}
//                               alt={`Preview ${index}`}
//                               className="w-full h-24 object-cover rounded-lg"
//                             />
//                             <button
//                               type="button"
//                               onClick={() => removeImage(index)}
//                               className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
//                             >
//                               <X className="h-4 w-4" />
//                             </button>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>

//                   {/* Submit Button */}
//                   <div className="md:col-span-2 mt-8">
//                     <button
//                       type="submit"
//                       disabled={submitting}
//                       className="btn-primary w-full flex items-center justify-center"
//                     >
//                       {submitting ? (
//                         <>
//                           <svg
//                             className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                           >
//                             <circle
//                               className="opacity-25"
//                               cx="12"
//                               cy="12"
//                               r="10"
//                               stroke="currentColor"
//                               strokeWidth="4"
//                             ></circle>
//                             <path
//                               className="opacity-75"
//                               fill="currentColor"
//                               d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                             ></path>
//                           </svg>
//                           Processing...
//                         </>
//                       ) : (
//                         "Add Property"
//                       )}
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             )}
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default AddProperty

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Upload,
  X,
  Check,
  Home,
  MapPin,
  Building,
  Tag,
  BedDouble,
  Bath,
  SquareIcon as SquareFootage,
} from "lucide-react"

const AddProperty = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    type: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    features: [],
  })

  const [images, setImages] = useState([])
  const [previewImages, setPreviewImages] = useState([])
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFeatureChange = (e) => {
    const { value, checked } = e.target
    if (checked) {
      setFormData((prev) => ({ ...prev, features: [...prev.features, value] }))
    } else {
      setFormData((prev) => ({
        ...prev,
        features: prev.features.filter((feature) => feature !== value),
      }))
    }
  }

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files)
    setImages((prev) => [...prev, ...files])

    // Create preview URLs
    const newPreviewImages = files.map((file) => URL.createObjectURL(file))
    setPreviewImages((prev) => [...prev, ...newPreviewImages])
  }

  const removeImage = (index) => {
    const newImages = [...images]
    newImages.splice(index, 1)
    setImages(newImages)

    const newPreviewImages = [...previewImages]
    URL.revokeObjectURL(newPreviewImages[index])
    newPreviewImages.splice(index, 1)
    setPreviewImages(newPreviewImages)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setSubmitting(false)
      setSuccess(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          title: "",
          description: "",
          price: "",
          location: "",
          type: "",
          bedrooms: "",
          bathrooms: "",
          area: "",
          features: [],
        })
        setImages([])
        setPreviewImages([])
        setSuccess(false)
      }, 3000)
    }, 2000)
  }

  return (
    <>
      {/* Enhanced Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 to-red-500/90 z-0">
          <div
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80')",
            }}
          ></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
              List Your Property With Us
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Add Your Property</h1>
            <p className="text-xl text-white/90 mb-8">
              List your property with us and reach thousands of potential buyers and investors
            </p>
            <div className="flex justify-center gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-white/20 backdrop-blur-sm p-4 rounded-lg text-white text-center w-24"
              >
                <div className="font-bold text-2xl">500+</div>
                <div className="text-sm">Properties</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-white/20 backdrop-blur-sm p-4 rounded-lg text-white text-center w-24"
              >
                <div className="font-bold text-2xl">10k+</div>
                <div className="text-sm">Customers</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="bg-white/20 backdrop-blur-sm p-4 rounded-lg text-white text-center w-24"
              >
                <div className="font-bold text-2xl">98%</div>
                <div className="text-sm">Satisfaction</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Add Property Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Property Added Successfully!</h2>
                <p className="text-gray-600 mb-6">
                  Your property has been added to our listings. Our team will review it shortly.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Add Another Property
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Basic Information */}
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-red-500 text-white p-2 rounded-lg">
                        <Home className="h-5 w-5" />
                      </div>
                      <h2 className="text-xl font-bold">Basic Information</h2>
                    </div>
                    <div className="h-1 w-full bg-gradient-to-r from-red-500 to-red-400 rounded-full mb-6"></div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Property Title*</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price (₹)*</label>
                    <div className="relative">
                      <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description*</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows="4"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    ></textarea>
                  </div>

                  {/* Property Details */}
                  <div className="md:col-span-2 mt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-red-500 text-white p-2 rounded-lg">
                        <Building className="h-5 w-5" />
                      </div>
                      <h2 className="text-xl font-bold">Property Details</h2>
                    </div>
                    <div className="h-1 w-full bg-gradient-to-r from-red-500 to-red-400 rounded-full mb-6"></div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location*</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <select
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select Location</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Hyderabad">Hyderabad</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Property Type*</label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select Type</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Villa">Villa</option>
                      <option value="House">House</option>
                      <option value="Plot">Plot</option>
                      <option value="Commercial">Commercial</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                    <div className="relative">
                      <BedDouble className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <select
                        name="bedrooms"
                        value={formData.bedrooms}
                        onChange={handleChange}
                        className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      >
                        <option value="">Select Bedrooms</option>
                        <option value="1">1 BHK</option>
                        <option value="2">2 BHK</option>
                        <option value="3">3 BHK</option>
                        <option value="4">4 BHK</option>
                        <option value="5+">5+ BHK</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
                    <div className="relative">
                      <Bath className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <select
                        name="bathrooms"
                        value={formData.bathrooms}
                        onChange={handleChange}
                        className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      >
                        <option value="">Select Bathrooms</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5+">5+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Area (sq.ft)*</label>
                    <div className="relative">
                      <SquareFootage className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="number"
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  {/* Features */}
                  <div className="md:col-span-2 mt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-red-500 text-white p-2 rounded-lg">
                        <Check className="h-5 w-5" />
                      </div>
                      <h2 className="text-xl font-bold">Features</h2>
                    </div>
                    <div className="h-1 w-full bg-gradient-to-r from-red-500 to-red-400 rounded-full mb-6"></div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {[
                        "Air Conditioning",
                        "Balcony",
                        "Gym",
                        "Swimming Pool",
                        "Garden",
                        "Parking",
                        "Security",
                        "Power Backup",
                        "Elevator",
                        "Furnished",
                        "CCTV",
                        "Playground",
                      ].map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <input
                            type="checkbox"
                            id={feature}
                            value={feature}
                            checked={formData.features.includes(feature)}
                            onChange={handleFeatureChange}
                            className="h-4 w-4 text-red-500 focus:ring-red-500 border-gray-300 rounded"
                          />
                          <label htmlFor={feature} className="text-sm text-gray-700 cursor-pointer select-none">
                            {feature}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Images */}
                  <div className="md:col-span-2 mt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-red-500 text-white p-2 rounded-lg">
                        <Upload className="h-5 w-5" />
                      </div>
                      <h2 className="text-xl font-bold">Property Images</h2>
                    </div>
                    <div className="h-1 w-full bg-gradient-to-r from-red-500 to-red-400 rounded-full mb-6"></div>

                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50 hover:bg-gray-100 transition-colors">
                      <input
                        type="file"
                        id="images"
                        multiple
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                      <label htmlFor="images" className="cursor-pointer flex flex-col items-center justify-center">
                        <Upload className="h-12 w-12 text-gray-400 mb-4" />
                        <p className="text-gray-700 font-medium mb-1">Click to upload images</p>
                        <p className="text-gray-500 text-sm">PNG, JPG, GIF up to 10MB</p>
                      </label>
                    </div>

                    {previewImages.length > 0 && (
                      <div className="mt-6">
                        <h3 className="text-lg font-medium mb-3">Uploaded Images ({previewImages.length})</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                          {previewImages.map((preview, index) => (
                            <div key={index} className="relative group">
                              <img
                                src={preview || "/placeholder.svg"}
                                alt={`Preview ${index}`}
                                className="w-full h-24 object-cover rounded-lg border border-gray-200"
                              />
                              <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="md:col-span-2 mt-8">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3 px-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                    >
                      {submitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        "Add Property"
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default AddProperty
