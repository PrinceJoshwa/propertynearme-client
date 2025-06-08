
// "use client"

// import { useEffect, useState } from "react"
// import { useGoogleLogin } from "@react-oauth/google"
// import { useNavigate } from "react-router-dom"
// import { googleAuth } from "../api"
// import { isAuthenticated } from "../utils/auth"

// function Login() {
//   const navigate = useNavigate()
//   const [error, setError] = useState("")
//   const [isLoading, setIsLoading] = useState(false)
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")

//   useEffect(() => {
//     if (isAuthenticated()) {
//       navigate("/")
//     }
//   }, [navigate])

//   const handleEmailLogin = async (e) => {
//     e.preventDefault()
//     setIsLoading(true)
//     setError("")

//     // For demo purposes, simulate a successful login
//     try {
//       // In a real app, you would make an API call here
//       // For now, we'll just simulate a successful login
//       localStorage.setItem("userToken", "demo-token")
//       localStorage.setItem(
//         "userData",
//         JSON.stringify({
//           id: "demo-user-id",
//           name: "Demo User",
//           email: email,
//         }),
//       )

//       navigate("/")
//     } catch (error) {
//       console.error("Login failed:", error)
//       setError("Login failed. Please try again.")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleGoogleLogin = async (response) => {
//     setIsLoading(true)
//     setError("")

//     console.log("Google login response: ", response)

//     try {
//       // For demo purposes, you can bypass the actual API call
//       // and simulate a successful login

//       // Option 1: Use the actual API call (may fail if backend isn't set up)
//       const userData = await googleAuth(response.access_token)

//       // Option 2: Simulate successful login (uncomment to use)
//       /*
//       const userData = {
//         _id: "google-user-id",
//         name: "Google User",
//         email: "google@example.com",
//         token: "google-demo-token"
//       }
//       */

//       if (userData && userData.token) {
//         localStorage.setItem("userToken", userData.token)
//         localStorage.setItem(
//           "userData",
//           JSON.stringify({
//             id: userData._id,
//             name: userData.name,
//             email: userData.email,
//           }),
//         )

//         navigate("/")
//       } else {
//         throw new Error("Invalid response from server")
//       }
//     } catch (error) {
//       console.error("Login failed details:", error)
//       setError(`Login failed: ${error.message || "Please try again."}`)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const login = useGoogleLogin({
//     onSuccess: handleGoogleLogin,
//     onError: (error) => {
//       console.error("Google Login Failed:", error)
//       setError("Google login failed. Please try again.")
//     },
//     scope: "email profile",
//   })

//   // For development/testing - bypass login
//   const handleDemoLogin = () => {
//     localStorage.setItem("userToken", "demo-token")
//     localStorage.setItem(
//       "userData",
//       JSON.stringify({
//         id: "demo-user-id",
//         name: "Demo User",
//         email: "demo@example.com",
//       }),
//     )
//     navigate("/")
//   }

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100 pt-20">
//       <div className="w-full max-w-[400px] rounded-lg bg-white p-8 shadow-lg">
//         <h1 className="mb-6 text-center text-2xl font-bold">Login</h1>

//         {error && (
//           <div className="mb-4 rounded-md bg-red-100 border border-red-400 p-3 text-sm text-red-700" role="alert">
//             <span className="block sm:inline">{error}</span>
//           </div>
//         )}

//         <form onSubmit={handleEmailLogin} className="space-y-4">
//           <div className="space-y-2">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
//               placeholder="m@example.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="space-y-2">
//             <div className="flex items-center justify-between">
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <a href="/forgot-password" className="text-sm text-primary hover:text-primary-dark">
//                 Forgot your password?
//               </a>
//             </div>
//             <input
//               id="password"
//               type="password"
//               className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full rounded-md bg-primary py-2 px-4 text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
//             disabled={isLoading}
//           >
//             {isLoading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         <div className="relative my-4">
//           <div className="absolute inset-0 flex items-center">
//             <div className="w-full border-t border-gray-200" />
//           </div>
//           <div className="relative flex justify-center text-sm">
//             <span className="bg-white px-2 text-gray-500">or</span>
//           </div>
//         </div>

//         <button
//           onClick={() => login()}
//           disabled={isLoading}
//           className="w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           {isLoading ? (
//             <span>Loading...</span>
//           ) : (
//             <>
//               <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
//               Login with Google
//             </>
//           )}
//         </button>

//         {/* Demo login button for development/testing */}
//         <button
//           onClick={handleDemoLogin}
//           className="w-full mt-4 rounded-md border border-green-500 bg-green-50 py-2 px-4 text-green-700 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
//         >
//           Demo Login (Skip Authentication)
//         </button>

//         <div className="mt-6 text-center text-sm">
//           <span className="text-gray-600">Don't have an account? </span>
//           <a href="/signup" className="text-primary hover:text-primary-dark">
//             Sign up
//           </a>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login

"use client"

import { useEffect, useState } from "react"
import { useGoogleLogin } from "@react-oauth/google"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { googleAuth } from "../api"
import { isAuthenticated } from "../utils/auth"
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react"

function Login() {
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/")
    }
  }, [navigate])

  const handleEmailLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Here you would implement your actual email/password authentication
      // For now, we'll simulate a login process
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Simulate successful login
      localStorage.setItem("userToken", "demo-token")
      localStorage.setItem(
        "userData",
        JSON.stringify({
          id: "demo-user-id",
          name: "Demo User",
          email: email,
        }),
      )

      navigate("/")
    } catch (error) {
      console.error("Login failed:", error)
      setError("Login failed. Please check your credentials and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = async (response) => {
    setIsLoading(true)
    setError("")

    try {
      const userData = await googleAuth(response.access_token)

      if (userData && userData.token) {
        localStorage.setItem("userToken", userData.token)
        localStorage.setItem(
          "userData",
          JSON.stringify({
            id: userData._id,
            name: userData.name,
            email: userData.email,
          }),
        )

        navigate("/")
      } else {
        throw new Error("Invalid response from server")
      }
    } catch (error) {
      console.error("Login failed:", error)
      setError("Google login failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const login = useGoogleLogin({
    onSuccess: handleGoogleLogin,
    onError: (error) => {
      console.error("Google Login Failed:", error)
      setError("Google login failed. Please try again.")
    },
    scope: "email profile",
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 flex items-center justify-center pt-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Lock className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your account to continue</p>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
            >
              <p className="text-red-700 text-sm">{error}</p>
            </motion.div>
          )}

          <form onSubmit={handleEmailLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  id="email"
                  type="email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <a href="/forgot-password" className="text-sm text-red-600 hover:text-red-700 transition-colors">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-4 text-gray-500">or continue with</span>
            </div>
          </div>

          <motion.button
            onClick={() => login()}
            disabled={isLoading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 px-4 border border-gray-300 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" />
                Continue with Google
              </>
            )}
          </motion.button>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <a href="/signup" className="text-red-600 hover:text-red-700 font-medium transition-colors">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Login

