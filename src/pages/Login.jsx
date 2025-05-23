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
//     // Add your email/password login logic here
//   }

//   const handleGoogleLogin = async (response) => {
//     setIsLoading(true)
//     setError("")
//     try {
//       const userData = await googleAuth(response.access_token)

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
//       console.error("Login failed:", error)
//       setError("Login failed. Please try again.")
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
//   })

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
//           >
//             Login
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
//     // Add your email/password login logic here
//   }

//   const handleGoogleLogin = async (response) => {
//     setIsLoading(true)
//     setError("")
//     try {
//       console.log("Google login response:", response)

//       if (!response || !response.access_token) {
//         throw new Error("Invalid Google response - no access token")
//       }

//       const userData = await googleAuth(response.access_token)
//       console.log("User data from server:", userData)

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
//         throw new Error("Invalid response from server - no token")
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
//   })

//   // Add this temporary mock login function for testing UI only
//   const mockLogin = () => {
//     // This is ONLY for testing the UI flow
//     localStorage.setItem("userToken", "mock-token")
//     localStorage.setItem(
//       "userData",
//       JSON.stringify({
//         id: "mock-id",
//         name: "Test User",
//         email: "test@example.com",
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
//           >
//             Login
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

//         <div className="mt-6 text-center text-sm">
//           <span className="text-gray-600">Don't have an account? </span>
//           <a href="/signup" className="text-primary hover:text-primary-dark">
//             Sign up
//           </a>
//         </div>
//         <div className="mt-4 text-center">
//           <button onClick={mockLogin} className="text-sm text-primary hover:underline">
//             [DEV ONLY] Test Login (Bypass API)
//           </button>
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
import { googleAuth } from "../api"
import { isAuthenticated } from "../utils/auth"

function Login() {
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
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

    // For demo purposes, simulate a successful login
    try {
      // In a real app, you would make an API call here
      // For now, we'll just simulate a successful login
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
      setError("Login failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = async (response) => {
    setIsLoading(true)
    setError("")

    console.log("Google login response: ", response)

    try {
      // For demo purposes, you can bypass the actual API call
      // and simulate a successful login

      // Option 1: Use the actual API call (may fail if backend isn't set up)
      const userData = await googleAuth(response.access_token)

      // Option 2: Simulate successful login (uncomment to use)
      /*
      const userData = {
        _id: "google-user-id",
        name: "Google User",
        email: "google@example.com",
        token: "google-demo-token"
      }
      */

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
      console.error("Login failed details:", error)
      setError(`Login failed: ${error.message || "Please try again."}`)
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

  // For development/testing - bypass login
  const handleDemoLogin = () => {
    localStorage.setItem("userToken", "demo-token")
    localStorage.setItem(
      "userData",
      JSON.stringify({
        id: "demo-user-id",
        name: "Demo User",
        email: "demo@example.com",
      }),
    )
    navigate("/")
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 pt-20">
      <div className="w-full max-w-[400px] rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold">Login</h1>

        {error && (
          <div className="mb-4 rounded-md bg-red-100 border border-red-400 p-3 text-sm text-red-700" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <form onSubmit={handleEmailLogin} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <a href="/forgot-password" className="text-sm text-primary hover:text-primary-dark">
                Forgot your password?
              </a>
            </div>
            <input
              id="password"
              type="password"
              className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-primary py-2 px-4 text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">or</span>
          </div>
        </div>

        <button
          onClick={() => login()}
          disabled={isLoading}
          className="w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            <>
              <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
              Login with Google
            </>
          )}
        </button>

        {/* Demo login button for development/testing */}
        <button
          onClick={handleDemoLogin}
          className="w-full mt-4 rounded-md border border-green-500 bg-green-50 py-2 px-4 text-green-700 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
        >
          Demo Login (Skip Authentication)
        </button>

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-600">Don't have an account? </span>
          <a href="/signup" className="text-primary hover:text-primary-dark">
            Sign up
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login
