import React, { useState } from 'react'
import axios from "axios"
import { createNewStudent } from '../services.js/api'
function CreateStudent() {
    const [studentId, setStudentId] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [iep, setIep] = useState(false)
    const [ell, setEll] = useState(false)
    const [screenerScore, setScreenerScore] = useState(0)
    const [decodingScore, setDecodingScore] = useState(0)
    const [encodingScore, setEncodingScore] = useState(0)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const studentData = {
                studentId,
                firstName,
                lastName,
                iep,
                ell,
                screenerScore,
                decodingScore,
                encodingScore,
              };
            await createNewStudent(studentData)
        } catch (error) {
            console.error('Registration failed', error)
        }
    }
    return (
        <div>
            <h2>Create Student</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="studentId">Student ID:</label>
                    <input type="number" id="studentId" value={studentId} onChange={(e) => setStudentId(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="iep">IEP: </label>
                    <input type="checkbox" id="iep" checked={iep} onChange={(e) => setIep(e.target.checked)} />
                </div>
                <div>
                    <label htmlFor="ell">ELL: </label>
                    <input type="checkbox" id="ell" checked={ell} onChange={(e) => setEll(e.target.checked)} />
                </div>
                <div>
                    <label htmlFor="screenerScore">Screener Score:</label>
                    <input type="number" id="screenerScore" value={screenerScore} onChange={(e) => setScreenerScore(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="decodingScore">Decoding Score:</label>
                    <input type="number" id="decodingScore" value={decodingScore} onChange={(e) => setDecodingScore(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="encodingScore">Encoding Score:</label>
                    <input type="number" id="encodingScore" value={encodingScore} onChange={(e) => setEncodingScore(e.target.value)} />
                </div>
                <div>
                    <button type="submit">Create</button>
                </div>
            </form>
        </div>
    )
}
export default CreateStudent;
