import axios from "axios"

const baseURL = process.env.REACT_APP_BASE_URL


export const login = async (username, password) => {
    try{
        const response = await axios.post(`${baseURL}api/v1/users/login`, {
            username,
            password,
        })
        const token = response.data
        return token;
    } catch (error) {
        console.error('Login failed', error)
        throw error
    }
}

export default login