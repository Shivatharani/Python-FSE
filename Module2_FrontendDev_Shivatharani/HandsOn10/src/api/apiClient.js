import axios from "axios";

const apiClient = axios.create({

    baseURL: "https://jsonplaceholder.typicode.com",

    timeout: 5000,

    headers: {

        "Content-Type": "application/json"

    }

});

// Request Interceptor
apiClient.interceptors.request.use(

    (config) => {

        config.headers.Authorization =

            "Bearer MOCK_TOKEN_12345";

        console.log("API Request:", config.url);

        return config;

    },

    (error) => Promise.reject(error)

);

// Response Interceptor
apiClient.interceptors.response.use(

    (response) => {

        // Return only the data
        return response.data;

    },

    (error) => {

        return Promise.reject({

            message:

                error.response?.data?.message ||

                "Unable to connect to server.",

            statusCode:

                error.response?.status || 500

        });

    }

);

export default apiClient;