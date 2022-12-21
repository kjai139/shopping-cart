import { useEffect, useState } from "react"
import React from "react"
import { useParams } from "react-router-dom"



const ItemDetails = ({cartNum, setCartNum, cartItems, setCartItems }) => {

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

    const addToCart = () => {
        setCartNum(cartNum + 1)
        setCartItems( (prevState) => {
            return [
                ...prevState,
                wepData
            ]
               
        })

        console.log(cartItems)
    }


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
                    <b>Type:</b> {wepData.shopData ? wepData.shopData.categoryText : 'Loading...'}
                </li>
                <li>
                    <b>Fire rate:</b> {wepData.weaponStats ? wepData.weaponStats.fireRate : 'Loading...'}
                </li>
                <li>
                    <b>Magazine size:</b> {wepData.weaponStats ? wepData.weaponStats.magazineSize : 'Loading...'}
                </li>
                <li>
                    <b>Cost:</b> ${wepData.shopData ? wepData.shopData.cost : 'Loading...'}
                </li>
                
            </ul>
            <button onClick={addToCart}>Add to cart</button>
            </div>
           


            </div>
        )
    }

    return (
        <div className="itemDetailsDiv">{renderDetails()}</div> 
        
    )
}


export {ItemDetails}