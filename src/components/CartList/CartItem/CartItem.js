import React from 'react';
import './CartItem.scss'

function CartItem({cartItem,decreaseQuantity,increaseQuantity}) {
  return (
    <div className="cartItem">
      <div className="cartItem__upperSection">
        <div className="itemImg">
          <img src={cartItem.src} alt=""/>
        </div>
        <div className="itemInfo">
          <p className="itemPrice">{cartItem.itemName}</p>
          <p className="itemPrice">{cartItem.price}</p>
        </div>
      </div>
      <div className="cartItem__lowerSection">
        <div className="itemQuantity">
          <button className="quantityMinusBtn" onClick={decreaseQuantity}>-</button>
          <input type="text" className="itemQuantityInput" value={cartItem.quantity}/>
          <button className="quantityPlusBtn" onClick={increaseQuantity}>+</button>
        </div>
        <button className="cartItem__actionBtn saveForLaterButton">SAVE FOR LATER</button>
        <button className="cartItem__actionBtn">REMOVE</button>
      </div>
    </div>
  )
}

export default CartItem
