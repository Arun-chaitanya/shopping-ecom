import React from 'react';
import "./Header.scss"

function Header() {
    return (
        <div className="header">
            <img className = "logo" src="https://upload.wikimedia.org/wikipedia/commons/6/69/Banana.png" alt=""/>
            <div className="search">
                <input className = "searchBar" type="text" placeholder="Search for Groceries, Vegetables and More"/>
                {/* Add Search Logo */}
            </div>
            <p className="myAccounts">My Accounts</p>
            <p className="more">More</p>
            <div className="cartDiv">
                <img className= "cartIcon" src="https://cdn.shopify.com/s/files/1/0684/3433/t/6/assets/header-cart.png?v=9792573517015576391" alt=""/>
                <p>Cart</p>
            </div>
        </div>
    )
}

export default Header
