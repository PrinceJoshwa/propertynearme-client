
// const API_URL = import.meta.env.VITE_API_URL || "https://propertynearme-server.vercel.app/api"


// export const googleAuth = async (token) => {
//   try {
//     const response = await fetch(`${API_URL}/users/google`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({ token }),
//       credentials: "include",
//     })

//     if (!response.ok) {
//       const error = await response.json()
//       throw new Error(error.message || "Google authentication failed")
//     }

//     return await response.json()
//   } catch (error) {
//     console.error("Error:", error)
//     throw error
//   }
// }


// const API_URL = import.meta.env.VITE_API_URL || "https://propertynearme-server.vercel.app/api";

const API_URL = import.meta.env.VITE_API_URL || "https://propertynearme-server.vercel.app/api"

// Add a console log to debug the API URL
console.log("API URL:", API_URL)

// export const googleAuth = async (token) => {
//   try {
//     const response = await fetch(`${API_URL}/users/google`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify({ token }),
//       credentials: 'include'
//     });
    
//     if (!response.ok) {
//       const error = await response.json();
//       throw new Error(error.message || 'Google authentication failed');
//     }
    
//     return await response.json();
//   } catch (error) {
//     console.error('Error:', error);
//     throw error;
//   }
// };
// // Property API calls
// export const getProperties = async () => {
//   try {
//     const response = await fetch(`${API_URL}/properties`)

//     if (!response.ok) {
//       const error = await response.json()
//       throw new Error(error.message || "Failed to fetch properties")
//     }

//     return await response.json()
//   } catch (error) {
//     console.error("Error:", error)
//     throw error
//   }
// }

// export const addProperty = async (propertyData, token) => {
//   try {
//     const response = await fetch(`${API_URL}/properties`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(propertyData),
//       credentials: "include",
//     })

//     if (!response.ok) {
//       const error = await response.json()
//       throw new Error(error.message || "Failed to add property")
//     }

//     return await response.json()
//   } catch (error) {
//     console.error("Error:", error)
//     throw error
//   }
// }

export const googleAuth = async (token) => {
  try {
    console.log("Attempting to authenticate with Google token")

    // For debugging, log the token (first few characters only for security)
    if (token) {
      console.log("Token starts with:", token.substring(0, 10) + "...")
    } else {
      console.error("Token is undefined or null")
      throw new Error("No token provided")
    }

    const response = await fetch(`${API_URL}/users/google`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ token }),
    })

    // Log the response status
    console.log("Google auth response status:", response.status)

    if (!response.ok) {
      let errorMessage = "Google authentication failed"
      try {
        const errorData = await response.json()
        console.error("Google auth response not OK:", errorData)
        errorMessage = errorData.message || errorMessage
      } catch (e) {
        console.error("Failed to parse error response:", e)
      }
      throw new Error(errorMessage)
    }

    return await response.json()
  } catch (error) {
    console.error("Google auth error details:", error)
    throw error
  }
}

// Property API calls
export const getProperties = async () => {
  try {
    const response = await fetch(`${API_URL}/properties`)

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || "Failed to fetch properties")
    }

    return await response.json()
  } catch (error) {
    console.error("Error:", error)
    throw error
  }
}

export const addProperty = async (propertyData, token) => {
  try {
    const response = await fetch(`${API_URL}/properties`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(propertyData),
      credentials: "include",
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || "Failed to add property")
    }

    return await response.json()
  } catch (error) {
    console.error("Error:", error)
    throw error
  }
}
