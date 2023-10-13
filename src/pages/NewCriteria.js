import React, {useState} from 'react'
import { createNewCriteria } from '../services.js/api'

function CreateCriteria() {
    const [interventionName, setInterventionName] = useState("")
    const [screenerScoreMax, setScreenerScoreMax] = useState(0)
    const [screenerScoreMin, setScreenerScoreMin] = useState(0)
    const [decodingScoreMax, setDecodingScoreMax] = useState(0)
    const [decodingScoreMin, setDecodingScoreMin] = useState(0)
    const [encodingScoreMax, setEncodingScoreMax] = useState(0)
    const [encodingScoreMin, setEncodingScoreMin] = useState(0)
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const criteriaData = {
                interventionName,
                screenerScoreMax,
                screenerScoreMin,
                decodingScoreMax,
                decodingScoreMin,
                encodingScoreMax,
                encodingScoreMin
            }
            console.log(criteriaData)
            await createNewCriteria(criteriaData)
        } catch (error){
            console.error('Creation failed', error)
        }
    }
    return (
        <div>
            <h2>Create Intervention Criteria</h2>
            <form onSubmit = {handleSubmit}>
                <div>
                    <label htmlFor="interventionName">Intervention:</label>
                    <input type="text" id='interventionName' value={interventionName} onChange={(e) => setInterventionName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="screenerScoreMin">Minimum Screener Score:</label>
                    <input type="number" id='screenerScoreMin' value={screenerScoreMin} onChange={(e) => setScreenerScoreMin(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="screenerScoreMax">Maximum Screener Score:</label>
                    <input type="number" id='screenerScoreMax' value={screenerScoreMax} onChange={(e) => setScreenerScoreMax(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="decodingScoreMin">Minimum Decoding Score:</label>
                    <input type="number" id='decodingScoreMin' value={decodingScoreMin} onChange={(e) => setDecodingScoreMin(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="decoding">Maximum Decoding Score:</label>
                    <input type="number" id='decodingScoreMax' value={decodingScoreMax} onChange={(e) => setDecodingScoreMax(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="encodingScoreMin">Minimum Encoding Score:</label>
                    <input type="number" id='encodingScoreMin' value={encodingScoreMin} onChange={(e) => setEncodingScoreMin(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="encodingScoreMax">Maximum Encoding Score:</label>
                    <input type="number" id='encodingScoreMax' value={encodingScoreMax} onChange={(e) => setEncodingScoreMax(e.target.value)}/>
                </div>
                <div>
                    <button type="submit">Create</button>
                </div>
            </form>
        </div>
    )
}

export default CreateCriteria