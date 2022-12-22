



const Cart = ({cartNum, setCartNum, cartItems, setCartItems }) => {

    const removeItem = (e) => {
        let arr = cartItems
        console.log(cartItems)
        console.log(e.target.value)
        let index = e.target.value
        console.log(index)

        let newArr = arr.filter((ele, eleIndex) => eleIndex !== Number(index) )
        console.log(newArr)

        setCartItems((prevState) => {
            return newArr
            
        })

        setCartNum(cartNum - 1)
    }

    const renderCartDetails = () => {
        
        if (cartItems.length < 1){
            return <div className="cartDetailDiv">
                <p>Cart is empty</p>
            </div>
        }




        return cartItems.map((value, key) => 
        <div key={`${value.uuid}-${key}`} className="cartDetailDiv">
            <div className="detailsLeft">
            <p><b>{value.displayName}</b></p>
            <div>
                <p><b>Cost:</b> {value.shopData ? value.shopData.cost : 0}</p>
                <button className="removeBtn" value={key} onClick={removeItem}>Remove from cart</button>
            </div>
            </div>
            <div className="detailsRight" style={{
                backgroundImage:`url(${value.displayIcon})`
            }}>

            
            </div>
        </div>
        )
    }

    const renderCartTotal = () => {
        let sum = 0
        cartItems.map((value) =>
        sum += (value.shopData ? value.shopData.cost : 0)
        )
        return (
            <div>
                <b>Total</b>: {sum}
            </div>

        )
    }



    return (
        <div className="cartDiv">
        <div className="itemsDiv">{renderCartDetails()}</div>
        <div className="totalDiv">{renderCartTotal()}</div>
        <div className="checkoutDiv">
            <button className="checkoutBtn">Checkout</button>
        </div>
        </div>
    )
}



export { Cart }