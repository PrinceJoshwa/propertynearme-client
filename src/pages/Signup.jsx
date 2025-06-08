"use client"

import { useEffect, useState } from "react"
import { useGoogleLogin } from "@react-oauth/google"
import { useNavigate } from "react-router-dom"
import { googleAuth } from "../api"
import { isAuthenticated } from "../utils/auth"

function Signup() {
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/")
    }
  }, [navigate])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    // Add your email/password signup logic here
    setError("Email signup is not implemented in this demo")
  }

  const handleGoogleSignup = async (response) => {
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
      console.error("Signup failed:", error)
      setError("Signup failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const signup = useGoogleLogin({
    onSuccess: handleGoogleSignup,
    onError: (error) => {
      console.error("Google Signup Failed:", error)
      setError("Google signup failed. Please try again.")
    },
  })

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 pt-20">
      <div className="w-full max-w-[400px] rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold">Sign Up</h1>

        {error && (
          <div className="mb-4 rounded-md bg-red-100 border border-red-400 p-3 text-sm text-red-700" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="m@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-primary py-2 px-4 text-white bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
          >
            Sign Up
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
          onClick={() => signup()}
          disabled={isLoading}
          className="w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            <>
              <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
              Sign up with Google
            </>
          )}
        </button>

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-600">Already have an account? </span>
          <a href="/login" className="text-primary hover:text-primary-dark">
            Login
          </a>
        </div>
      </div>
    </div>
  )
}

export default Signup

