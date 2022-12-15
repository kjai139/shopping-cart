import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className='top-nav'>
            <h3>Logo</h3>
            <ul className='nav-list'>
                <Link to="/home">
                <li>Home</li>
                </Link>
                <Link to="/shop">
                <li>Shop</li>
                </Link>
                <Link to="/about">
                <li>About</li>
                </Link>
            </ul>
      </nav>
    )
}


export {NavBar}