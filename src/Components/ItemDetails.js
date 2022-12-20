import { useEffect, useState } from "react"
import React from "react"
import { useParams } from "react-router-dom"



const ItemDetails = () => {

    const [wepData, setWepData] = useState([])
    const params = useParams()
    const uuid = params.id

    

    useEffect( () => {
        
        const fetchData = async () => {
            
            try {
                
                const response = await fetch(`https://valorant-api.com/v1/weapons/${uuid}`)
                const data = await response.json()
                setWepData(data.data)
                console.log(data.data)
            } catch (error) {
                console.log(error.response)
            }
            
            
        }
        
        fetchData()
        
        
    }, [])


    const renderDetails = () => {
        return (
            <div className="itemDetailGrid">
            <div className="itemDetailImgDiv" style={{
                backgroundImage:`url(${wepData.displayIcon})`
            }}>
            </div>
            <div>
            <ul className="itemDetailList">
                <li>
                {wepData.displayName ? wepData.displayName : 'Loading...'}
                </li>
                <li>
                    Type:{wepData.shopData ? wepData.shopData.categoryText : 'Loading...'}
                </li>
                <li>
                    Cost:${wepData.shopData ? wepData.shopData.cost : 'Loading...'}
                </li>
                <li>

                </li>
            </ul>
            </div>
           


            </div>
        )
    }

    return (
        <div className="itemDetailsDiv">{renderDetails()}</div> 
        
    )
}


export {ItemDetails}