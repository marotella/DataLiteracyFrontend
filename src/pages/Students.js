import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import StudentInfo from "../components/StudentInfo";
import {getAllStudents} from "../services.js/api"
import {getToken} from "../services.js/auth"
const Students = () => {
    const {id} = useParams()
    const [students, setStudents] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchStudentData = async () => {
            try{
              const response = await getAllStudents()
              const studentData = response.data
              setStudents(studentData)
              console.log(students)
              setLoading(false)
            } catch (error){
                console.error("Error retrieving data", error)
                throw error
            }

        }
        fetchStudentData()
    }, [])
        return(
            <div>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <div>
                {students.map((student) => (
                  <StudentInfo key={student.id} student={student} />
                ))}
              </div>
            )}
          </div>
        );
      };

export default Students
