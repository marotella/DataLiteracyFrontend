import React from "react"
import { Link, useParams, useNavigate } from "react-router-dom"

const StudentInfo = ({student}) => {
    return(
        <div>
            <h1>{student.firstName} {student.lastName}</h1>
        </div>
    )
}

export default StudentInfo