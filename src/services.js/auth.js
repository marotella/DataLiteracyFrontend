import axios from "axios"
const baseURL = process.env.REACT_APP_BASE_URL



export const login = async (username, password) => {
    try{
        const response = await axios.post(`${baseURL}api/v1/users/login`, {
            username,
            password,
        })
        const token = response.data.access_token
        console.log('Received token:', token); // Log the token
        localStorage.setItem('token', token.toString()); // Convert to string
        console.log(token)
        return token;
    } catch (error) {
        console.error('Login failed', error)
        throw error
    }
}

export const register = async (email, username, password) => {
    try{
        const response = await axios.post(`${baseURL}api/v1/users/register`, {
            email,
            username,
            password,
        })
    } catch (error) {
        console.error('Registration failed.', error)
        throw error
    }
}


export const clearToken = () => {
    localStorage.removeItem("token")
}
    
export const getToken = () => {
    const token = localStorage.getItem("token");
    console.log("Token:", token); // Log the token for debugging
    return token ? `${token.toString()}` : null; // Ensure it's returned as a string or null
}