import axios from 'axios';

// Synchronously create an Axios client
const axiosClient = (token) => {
  // Create Axios instance with base URL and timeout settings
  const client = axios.create({
    baseURL: process.env.BASE_URL, // Use baseUrl passed as parameter
    timeout: 10000,   // Timeout of 10 seconds
  });

  // Add request interceptor to attach Authorization header
  client.interceptors.request.use((config) => {
    // If the token exists, set Authorization header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  // Add response interceptor for error handling
  client.interceptors.response.use(
    (response) => {
      return response; // If the response is successful, return as is
    },
    async (error) => {
      try {
        const { response } = error;
        if (response && response.status === 401) {
          // Handle 401 Unauthorized error (e.g., token expired)
          console.log('Unauthorized request, handle token expiry here.');
        }
      } catch (err) {
        console.error('Error handling interceptor response:', err);
      }
      throw error; // Re-throw the error after logging or handling it
    }
  );

  return client; // Return the Axios client instance
}

export default axiosClient;
