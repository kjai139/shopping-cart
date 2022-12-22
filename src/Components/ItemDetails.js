import { useEffect, useState } from "react"
import React from "react"
import { useParams } from "react-router-dom"



const ItemDetails = ({cartNum, setCartNum, cartItems, setCartItems }) => {

    const [wepData, setWepData] = useState([])
    const params = useParams()
    const uuid = params.id

    const minQty = 1
    const maxQty = 3


    const [quantity, setQuantity] = useState(1)

    const handleQtyChange = (e) => {
        let {min, max, value} = e.target
        let qtyValue = Math.max(Number(min), Math.min(Number(max), Number(value)))
        setQuantity(qtyValue)
        console.log(qtyValue, quantity)
    }

    const handleFocus = (e) => {
        e.target.select()
    }

    const addQty = () => {
        if (quantity < maxQty) {
            setQuantity(quantity + 1)
        }
        
    }

    const removeQty = () => {
        if (quantity > minQty) {
            setQuantity(quantity - 1)
        }
        
    }

    

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
        setCartNum(cartNum + quantity)
        for (let i = quantity; i > 0; i--) {
            setCartItems( (prevState) => {
                return [
                    ...prevState,
                    wepData
                ]
                   
            })

        }
        

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
                    <b>Cost:</b> ${wepData.shopData ? wepData.shopData.cost : 0}
                </li>
                
            </ul>
            <div className="qtyBtnDiv">
                <button className="qMinusBtn" onClick={removeQty}>-</button>
                <input className="qtyInput" type="number" onChange={handleQtyChange} onFocus={handleFocus} min={minQty} max={maxQty} value={quantity}></input>
                <button className="qPlusBtn" onClick={addQty}>+</button>
            </div>
            <button className="addCartBtn" onClick={addToCart}>Add to cart</button>
            </div>
           


            </div>
        )
    }

    return (
        <div className="itemDetailsDiv">{renderDetails()}</div> 
        
    )
}


export {ItemDetails}