import axios, { AxiosResponse } from "axios";

// Default url for axios
axios.defaults.baseURL = 'https://localhost:7055/';

// Helper Method to extract data from the body .then(response => setProduct(response.data.result))
const responseBody = (response: AxiosResponse) => response.data;

// Add an object for our request to diffrent type of requests
//axios.get(`https://localhost:7121/api/products/${id}`)
const request = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
}

// Container for main objects
const agent = {
    
}

export default agent;