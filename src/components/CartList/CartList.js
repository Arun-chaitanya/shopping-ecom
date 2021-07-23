import React, { useState } from 'react'
import './CartList.scss';
import './CartItem/CartItem'
import CartItem from './CartItem/CartItem';
function CartList() {

  const [cartItemList,setCartItemList] = useState([
    {
      src:"https://www.jiomart.com/images/product/600x600/490000041/aashirvaad-whole-wheat-atta-10-kg-0-20201117.jpg",
      itemName: "Item 1",
      description: "Hi this is Item 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque totam illo suscipit deserunt magnam culpa aspernatur? Deserunt totam laboriosam et illum aperiam velit, qui, necessitatibus vel deleniti asperiores accusamus aliquid.",
      price: "Rs. 33",
      weight: "1 kg",
      quantity:1
    },
    {
      src:"https://www.bigbasket.com/media/uploads/p/l/204629_13-aashirvaad-select-atta.jpg",
      itemName: "Item 2",
      description: "Hi this is Item 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque totam illo suscipit deserunt magnam culpa aspernatur? Deserunt totam laboriosam et illum aperiam velit, qui, necessitatibus vel deleniti asperiores accusamus aliquid.",
      price: "Rs. 768",
      weight: "2 kg",
      quantity:1,
    },
    {
      src:"https://images-na.ssl-images-amazon.com/images/I/61BOESuXMyL._SX425_.jpg",
      itemName: "Item 3",
      description: "Hi this is Item 3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque totam illo suscipit deserunt magnam culpa aspernatur? Deserunt totam laboriosam et illum aperiam velit, qui, necessitatibus vel deleniti asperiores accusamus aliquid.",
      price: "Rs. 638",
      weight: "5 kg",
      quantity:1,
    },
    {
      src:"https://5.imimg.com/data5/XH/XY/MY-7778582/tata-salt-500x500.jpg",
      itemName: "Item 4",
      description: "Hi this is Item 4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque totam illo suscipit deserunt magnam culpa aspernatur? Deserunt totam laboriosam et illum aperiam velit, qui, necessitatibus vel deleniti asperiores accusamus aliquid.",
      price: "Rs. 333",
      weight: "4 kg",
      quantity:1,
    },
    {
      src:"https://5.imimg.com/data5/KS/UI/MY-47131030/surf-excel-quickwash-500x500.jpg",
      itemName: "Item 5",
      description: "Hi this is Item 5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque totam illo suscipit deserunt magnam culpa aspernatur? Deserunt totam laboriosam et illum aperiam velit, qui, necessitatibus vel deleniti asperiores accusamus aliquid.",
      price: "Rs. 132",
      weight: "7 kg",
      quantity:1,
    },
    {
      src:"https://www.bigbasket.com/media/uploads/p/l/265964_7-mtr-ready-mix-gulab-jamun.jpg",
      itemName: "Item 11",
      description: "Hi this is Item 11. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque totam illo suscipit deserunt magnam culpa aspernatur? Deserunt totam laboriosam et illum aperiam velit, qui, necessitatibus vel deleniti asperiores accusamus aliquid.",
      price: "Rs. 2314",
      weight: "2 kg",
      quantity:1,
    }
])

  const increaseQuantity = () => {

  }

  const decreaseQuantity = () => {

  }

  return (
    <div className="cartList">
      {
        cartItemList.map((cartItem,index)=>(
          <div className="cartItemTab">
            <CartItem cartItem={cartItem}
              decreaseQuantity={decreaseQuantity}
              increaseQuantity={increaseQuantity}
            />    
          </div>
        ))
      }
    </div>
  )
}

export default CartList
