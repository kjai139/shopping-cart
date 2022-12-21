



const Cart = ({cartNum, setCartNum, cartItems, setCartItems }) => {

    const renderCartDetails = () => {
        




        return cartItems.map((value, key) => 
        <div key={`${value.uuid}-${key}`} className="cartDetailDiv">
            <div className="detailsLeft">
            <p><b>{value.displayName}</b></p>
            <div>
                <p><b>Cost:</b> {value.shopData.cost}</p>
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
        sum += value.shopData.cost
        )
        return (
            <div><b>Total</b>: {sum}</div>
        )
    }



    return (
        <div className="cartDiv">
        <div className="itemsDiv">{renderCartDetails()}</div>
        <div className="totalDiv">{renderCartTotal()}</div>
        </div>
    )
}



export { Cart }