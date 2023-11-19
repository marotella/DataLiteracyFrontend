import React from "react"
import  {Link, UseParams, useNavigate} from "react-router-dom"

const CriteriaInfo = ({criteria}) => {
    return(
        <div>
            <h1>{criteria.interventionName}</h1>
            <ul>
                <li>Screener Score: {screenerScoreMin} - {screenerScoreMax}</li>
                <li>Decoding Score: {decodingScoreMin} - {decodingScoreMax}
                </li>
                <li>Encoding Score: {encodingScoreMin} - {encodingScoreMax}
                </li>
            </ul>
        </div>
    )
}

export default CriteriaInfo