import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import StudentInfo from "../components/StudentInfo";
import {getAllCriteria} from "../services.js/api"
import {getToken} from "../services.js/auth"
const Criteria = () => {
    const {id} = useParams()
    const [criteria, setCriteria] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchCriteriaData = async () => {
            try{
              const response = await getAllCritiera()
              const criteriaData = response.data
              setCriteria(criteriaData)
              console.log(criteria)
              setLoading(false)
            } catch (error){
                console.error("Error retrieving data", error)
                throw error
            }

        }
        fetchCriteriaData()
    }, [])
        return(
            <div>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <div>
                <h2>Intervention Placement Critiera</h2>
                {criteria.map((criteria) => (
                  <CriteriaInfo key={criteria.id} criteria={criteria} />
                ))}
              </div>
            )}
          </div>
        );
      };

export default Criteria
