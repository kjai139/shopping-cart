import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Shop = ({cartNum}) => {

    const [wepData, setWepData] = useState([])

    const [displayNum, setDisplayNum] = useState(12)
    

    useEffect( () => {
        const fetchData = async () => {
            const data = await (await fetch('https://valorant-api.com/v1/weapons')).json()

            setWepData(data.data)
            console.log(data)
        }

        fetchData().catch(console.error)
        
    }, [])

   

    const renderShop = () => {
        return wepData.map((value, key) =>
        <Link key={value.uuid} to={`/shop/${value.uuid}`}>
        <div className="itemsDiv" key={`div${value.uuid}`}>
            
        <div className="itemsImg" key={`items${value.uuid}`} style={{
            backgroundImage: `${wepData[0] ? `url(${value.displayIcon})` : ''}` 
        }}>
            
        
            
        </div>
        
        <p className="itemName" key={`itemName${value.uuid}`}>{wepData[0] ? value.displayName : 'Loading...'}</p>
        </div>
        </Link>
        )
    }


    return (
        <div className="shopGrid">
            {renderShop()}
        </div>
    )
}


export { Shop }