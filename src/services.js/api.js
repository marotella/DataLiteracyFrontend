import axios from "axios"
import {getToken} from "./auth"
const baseURL = process.env.REACT_APP_BASE_URL

export const getAllStudents = async () => {
    const token = getToken()
        try{
            const response = await axios.get(`${baseURL}api/v1/students`, {
            headers:{
                Authorization: token
            }
        })
        const students  = response.data
        console.log(students)
        return students 
        }catch (error){
            console.error("Error fetching studnets", error)
            throw error
    }

    
}

