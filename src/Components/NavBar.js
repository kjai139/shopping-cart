import React from "react";
import { Link } from "react-router-dom";


const NavBar = ({cartNum}) => {
    return (
        <nav className='top-nav'>
            <div>
            <div className="logoImg"></div>
            <h3>Valorant Store</h3>
            </div>
            <ul className='nav-list'>
                <Link to="/shopping-cart/home">
                <li>Home</li>
                </Link>
                <Link to="/shopping-cart/shop">
                <li>Shop</li>
                </Link>
                <Link to="/shopping-cart/cart">
                <li>Cart [{cartNum}]</li>
                </Link>
               
            </ul>
      </nav>
    )
}


export {NavBar}