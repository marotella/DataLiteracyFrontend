import axios from "axios"
import {getToken} from "./auth"
const baseURL = process.env.REACT_APP_BASE_URL

export const getAllStudents = async () => {
    const token = getToken()
    console.log(token)
        try{
            const response = await axios.get(`${baseURL}api/v1/students/`, {
            headers:{
                Authorization: token
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

export const createNewStudent = async (studentData) => {
    const token = getToken()
    console.log(token)
        try{
            const response = await axios.post(`${baseURL}api/v1/students/create`, studentData,
            {
                headers:{
                    Authorization: token,
                },
                withCredentials: true
            })
            const newStudent = response.data
            console.log('Created student:', newStudent)
            return newStudent
        } catch (error){
            console.error("Error creating student:", error)
            throw error
        }
}

export const createNewCriteria = async (criteriaData) => {
    const token = getToken()
    console.log(token)
    try{
        const response = await axios.post(`${baseURL}api/v1/criteria`,
        criteriaData,
        {
            hraders:{
                Authorization: token,
            },
            withCredentials: true
        })
        const newCriteria = response.data
        console.log(newCriteria)
        return newCriteria
    } catch (error){
        console.error("Error creating criteria", error)
        throw error
    }
}

export const getAllCriteria = async () => {
    const token = getToken()
    console.log(token)
    try{
        const response = await axios get(`${baseURL}api/v1/criteria/`, {
            headers:{
                Authorization: token,
            },
            withCredentials: true
            })
            const criteria = response.data
            console.log(criteria)
            return criteria
        
        } catch (error){
            console.error("Error fetching criteria", error)
            throw error
        }
    }
