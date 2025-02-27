import axios from "axios";

const BASE_URL = 'http://15.206.16.230:8084/api/v1/landlord';

export const Endpoint = axios.create({
  baseURL: BASE_URL,
  timeout: 5000, // Increased timeout to 5 seconds for better network handling
});

export const upload = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

// Request Interceptor (No Store, Assuming Token is Passed Dynamically)
Endpoint.interceptors.request.use(
  (config) => {
    const authToken = ""; // Replace with a method to get the token dynamically (e.g., AsyncStorage)
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    console.log("📤 API Request:", config?.url, config?.data);
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor (Handles Errors)
Endpoint.interceptors.response.use(
  (response) => {
    console.log("✅ API Response:", response?.config?.url, response?.data);
    return response;
  },
  (error) => {
    handleApiError(error);
    console.log("❌ API Error:", error?.config?.url, error);
    return Promise.reject(error);
  }
);

// General Error Handling
export const handleApiError = (error) => {
  if (axios.isAxiosError(error)) {
    const status = error?.response?.status;
    const message = error?.response?.data?.message || "Something went wrong";

    if (error.code === "ECONNABORTED") {
      return new Error("Request Timeout !!");
    }

    switch (status) {
      case 401:
        handleSessionExpiration();
        return new Error("Unauthorized access. Please login again.");

      case 406:
        return new Error("Your account has been blocked.");

      case 408:
        return new Error("Session expired. Please login again.");

      default:
        return new Error(message);
    }
  }
  return new Error(error.toString());
};

// Logout or Expire Session Handler
const handleSessionExpiration = () => {
  console.log("🚨 Session expired! Logging out...");
  // Add logic to clear storage or navigate to login screen if needed
};

// Utility to Catch Errors
export const catchHandling = (params) => {
  if (axios.isAxiosError(params)) {
    return {
      status: params.response?.data?.success || false,
      message: params.response?.data?.message || "An error occurred",
      response: params.response,
    };
  } else {
    return { status: false, message: params };
  }
};
