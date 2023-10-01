import axios from "axios"

const baseURL = process.env.REACT_APP_BASE_URL


export const login = async (username, password) => {
    try{
        const response = await axios.post(`${baseURL}api/v1/users/login`, {
            username,
            password,
        })
        const token = response.data
        localStorage.setItem('token', token)
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
    return localStorage.getItem("token");
}