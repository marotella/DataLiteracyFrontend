import React from "react"
import { Link, useParams, useNavigate } from "react-router-dom"

const StudentInfo = ({student}) => {
    return(
        <div>
            <h1>{student.firstName} {student.lastName}</h1>
            <ul>
                <li>Screener: {student.screenerScore}</li>
                <li>Decoding: {student.decodingScore}</li>
                <li>Encoding: {student.encodingScore}</li>
            </ul>
        </div>
    )
}

export default StudentInfo