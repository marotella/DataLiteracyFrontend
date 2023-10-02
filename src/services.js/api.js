import axios from "axios"
import {getToken} from "./auth"
const baseURL = process.env.REACT_APP_BASE_URL

export const getAllStudents = async () => {
    const token = getToken()
    console.log(token)
        try{
            const response = await axios.get(`${baseURL}api/v1/students`, {
            headers:{
                Authorization: `Bearer ${token}`
            },
            withCredentials: true
        })
        const students  = response.data
        console.log(students)
        return students 
        }catch (error){
            console.error("Error fetching studnets", error)
            throw error
    }

    
}

