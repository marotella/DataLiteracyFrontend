import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import StudentInfo from "../components/StudentInfo";
import {getAllStudents} from "../services.js/api"

const Students = () => {
    const {id} = useParams()
    const [students, setStudents] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchStudentData = async () => {
            try{
                const studentData = await getAllStudents()
                setStudents(studentData)
                setLoading(false)
            } catch (error){
                console.error("Error retrieving data", error)
                throw error
                setLoading(false)
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
