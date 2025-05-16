"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-red-500" />,
      title: "Phone",
      details: ["+91 9876543210", "+91 8765432109"],
      action: "tel:+919876543210",
      actionText: "Call us",
    },
    {
      icon: <Mail className="h-6 w-6 text-red-500" />,
      title: "Email",
      details: ["info@propertynearme.com", "support@propertynearme.com"],
      action: "mailto:info@propertynearme.com",
      actionText: "Email us",
    },
    {
      icon: <MapPin className="h-6 w-6 text-red-500" />,
      title: "Office",
      details: ["123 Main Street, Bangalore", "Karnataka, India - 560001"],
      action: "https://maps.google.com",
      actionText: "Get directions",
    },
    {
      icon: <Clock className="h-6 w-6 text-red-500" />,
      title: "Working Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM"],
      action: null,
      actionText: null,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden bg-gray-700">
        <div className="absolute inset-0 z-0">
          <div className="absolute w-96 h-96 bg-red-500/10 rounded-full -top-20 -left-20 blur-3xl"></div>
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full -bottom-20 -right-20 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/20">
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Contact Us</h1>
            <p className="text-xl text-gray-300">
              Have questions about our properties? Our team is here to help you find your dream home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start">
                  <div className="bg-red-50 p-3 rounded-lg mr-4">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-gray-800">{item.title}</h3>
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 mb-1">
                        {detail}
                      </p>
                    ))}
                    {item.action && (
                      <a
                        href={item.action}
                        className="inline-block mt-3 text-red-600 font-medium hover:text-red-700 transition-colors"
                        target={item.action.startsWith("http") ? "_blank" : undefined}
                        rel={item.action.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {item.actionText}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))} */}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 p-6 rounded-lg flex items-center text-green-700"
                  >
                    <CheckCircle className="h-6 w-6 mr-3 text-green-600" />
                    <p>Thank you for your message! We'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name*
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Email*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject*
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message*
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                    >
                      {isSubmitting ? (
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
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" /> Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Location</h2>
                <div className="rounded-lg overflow-hidden shadow-md h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31113.019705332385!2d77.5945626!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f2e85b03%3A0x58d1e2e6803ff0b3!2sBangalore!5e0!3m2!1sen!2sin!4v1712584000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services and properties
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                question: "How do I schedule a property viewing?",
                answer:
                  "You can schedule a property viewing by contacting us through our website, calling our office, or sending an email. Our team will arrange a convenient time for you to visit the property with one of our agents.",
              },
              {
                question: "What documents do I need to buy a property?",
                answer:
                  "To purchase a property, you'll typically need identification proof (Aadhar, PAN card), address proof, income proof (salary slips, ITR), and bank statements. For home loans, additional documents may be required by the lending institution.",
              },
              {
                question: "Do you help with home loans?",
                answer:
                  "Yes, we have partnerships with several leading banks and financial institutions. Our team can guide you through the loan application process and help you secure the best interest rates and terms.",
              },
              {
                question: "What are the additional costs involved in buying a property?",
                answer:
                  "Besides the property cost, additional expenses include stamp duty (5-7% of property value), registration charges, GST (for under-construction properties), maintenance deposit, and legal fees. We provide a detailed breakdown of all costs before you make a decision.",
              },
              {
                question: "How long does the property buying process take?",
                answer:
                  "The timeline varies depending on whether you're buying a ready-to-move-in property or an under-construction one. Typically, the process takes 1-3 months for ready properties and follows the construction timeline for under-construction properties.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-6 bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-800">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Dream Property?</h2>
            <p className="text-xl text-white/90 mb-8">
              Our team of experts is ready to help you find the perfect property in Karnataka
            </p>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center px-8 py-3 bg-white text-red-600 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Phone className="mr-2 h-5 w-5" /> Call Us Now
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Contact
