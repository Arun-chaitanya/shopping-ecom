import React,{useEffect,useState} from 'react';
import Address from '../Address/Address'
import CartList from '../CartList/CartList'
import "./Cart.scss"

function Cart() {
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

    let totalPrice = () => {
        let totalBillPrice = 0;
        for(let x of cartItemList){
            totalBillPrice += (x.quantity)*(x.price)
        }
        return totalBillPrice;
    }

    const increaseQuantity = () => {
 
    }

    const decreaseQuantity = () => {

    }

    return (
        <div className="cart">
            <div className="leftSection">
                <Address/>
                <CartList/>
            </div>
            <div className = "totalPriceSection">
                <div className="totalPriceHeader">
                    PRICE DETAILS
                </div>
                <div className="totalPriceContent">
                    <div className="priceDetails">
                        <p className="label">{`Price (${cartItemList.length} items)`}</p>
                        <p className="value">₹45,000</p>
                    </div>
                    <div className="discountDetails">
                        <p className="label">Discount</p>
                        <p className="value">-₹12,000</p>
                    </div>
                    <div className="deliveryDetails">
                        <p className="label">Delivery Charges</p>
                        <p className="value">FREE</p>
                    </div>
                    <div className="totalAmountDetails">
                        <p className="label">Total Amount</p>
                        <p className="value">₹65,997</p>
                    </div>
                    <div className="discountSentence">You will save ₹12,000 on this order</div>
                </div>
                

            </div>
        </div>
    )
}

export default Cart
