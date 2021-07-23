import React,{useState,useEffect,useRef} from 'react';
import ItemModal from "./components/ItemModal/ItemModal"
import "./ImageList.css"



const ImageList = () => {
    const [isScrolling,setIsScrolling] = useState(true);
    const [isModalVisible,setIsModalVisible] = useState(false);
    const [itemObject,setItemObject] = useState({});
    const [id,setId] = useState();
    const [el, setEl] = useState();
    const [divInitPos, setDivInitPos] = useState();
    const [divPos, setDivPos] = useState({});
    const [cartButtonPos, setCartButtonRef] = useState()
    const [divPosDiff, setDivPosDiff] = useState({});
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [itemList,setItemList] = useState([
        {
            src:"https://www.jiomart.com/images/product/600x600/490000041/aashirvaad-whole-wheat-atta-10-kg-0-20201117.jpg",
            itemName: "Item 1",
            description: "Hi this is Item 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque totam illo suscipit deserunt magnam culpa aspernatur? Deserunt totam laboriosam et illum aperiam velit, qui, necessitatibus vel deleniti asperiores accusamus aliquid.",
            price: "Rs. 33",
            weight: "1 kg"
        },
        {
            src:"https://www.bigbasket.com/media/uploads/p/l/204629_13-aashirvaad-select-atta.jpg",
            itemName: "Item 2",
            description: "Hi this is Item 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque totam illo suscipit deserunt magnam culpa aspernatur? Deserunt totam laboriosam et illum aperiam velit, qui, necessitatibus vel deleniti asperiores accusamus aliquid.",
            price: "Rs. 768",
            weight: "2 kg"
        },
        {
            src:"https://images-na.ssl-images-amazon.com/images/I/61BOESuXMyL._SX425_.jpg",
            itemName: "Item 3",
            description: "Hi this is Item 3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque totam illo suscipit deserunt magnam culpa aspernatur? Deserunt totam laboriosam et illum aperiam velit, qui, necessitatibus vel deleniti asperiores accusamus aliquid.",
            price: "Rs. 638",
            weight: "5 kg"
        },
        {
            src:"https://5.imimg.com/data5/XH/XY/MY-7778582/tata-salt-500x500.jpg",
            itemName: "Item 4",
            description: "Hi this is Item 4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque totam illo suscipit deserunt magnam culpa aspernatur? Deserunt totam laboriosam et illum aperiam velit, qui, necessitatibus vel deleniti asperiores accusamus aliquid.",
            price: "Rs. 333",
            weight: "4 kg"
        },
        {
            src:"https://5.imimg.com/data5/KS/UI/MY-47131030/surf-excel-quickwash-500x500.jpg",
            itemName: "Item 5",
            description: "Hi this is Item 5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque totam illo suscipit deserunt magnam culpa aspernatur? Deserunt totam laboriosam et illum aperiam velit, qui, necessitatibus vel deleniti asperiores accusamus aliquid.",
            price: "Rs. 132",
            weight: "7 kg"
        },
        {
            src:"https://5.imimg.com/data5/RJ/CT/GLADMIN-27653122/vim-lemons-dishwash-bar-free-scrubber-500x500.png",
            itemName: "Item 6",
            description: "Hi this is Item 6. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque totam illo suscipit deserunt magnam culpa aspernatur? Deserunt totam laboriosam et illum aperiam velit, qui, necessitatibus vel deleniti asperiores accusamus aliquid.",
            price: "Rs. 495",
            weight: "2 kg"
        },
        {
            src:"https://img.dmart.in/images/rwd/products/I/W/h/IWholeSpices200gmPRMI3908XX290216_1_B.jpg",
            itemName: "Item 7",
            description: "Hi this is Item 7. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque totam illo suscipit deserunt magnam culpa aspernatur? Deserunt totam laboriosam et illum aperiam velit, qui, necessitatibus vel deleniti asperiores accusamus aliquid.",
            price: "Rs. 18",
            weight: "1 kg"
        },
        {
            src:"https://images-na.ssl-images-amazon.com/images/I/51TH5xE%2B2sL.jpg",
            itemName: "Item 8",
            description: "Hi this is Item 8. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque totam illo suscipit deserunt magnam culpa aspernatur? Deserunt totam laboriosam et illum aperiam velit, qui, necessitatibus vel deleniti asperiores accusamus aliquid.",
            price: "Rs. 97",
            weight: "3 kg"
        },
        {
            src:"https://www.bigbasket.com/media/uploads/p/xxl/40016673-2_6-disano-olive-oil-extra-virgin.jpg",
            itemName: "Item 9",
            description: "Hi this is Item 9. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque totam illo suscipit deserunt magnam culpa aspernatur? Deserunt totam laboriosam et illum aperiam velit, qui, necessitatibus vel deleniti asperiores accusamus aliquid.",
            price: "Rs. 349",
            weight: "2 kg"
        },
        {
            src:"https://img.dmart.in/images/rwd/products/I/R/e/IReadyMix1kgMTR1708XX290216_5_B.jpg",
            itemName: "Item 10",
            description: "Hi this is Item 10. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque totam illo suscipit deserunt magnam culpa aspernatur? Deserunt totam laboriosam et illum aperiam velit, qui, necessitatibus vel deleniti asperiores accusamus aliquid.",
            price: "Rs. 3245",
            weight: "10 kg"
        },
        {
            src:"https://www.bigbasket.com/media/uploads/p/l/265964_7-mtr-ready-mix-gulab-jamun.jpg",
            itemName: "Item 11",
            description: "Hi this is Item 11. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque totam illo suscipit deserunt magnam culpa aspernatur? Deserunt totam laboriosam et illum aperiam velit, qui, necessitatibus vel deleniti asperiores accusamus aliquid.",
            price: "Rs. 2314",
            weight: "2 kg"
        }
    ])
    const imageListRef = useRef()
    const cartButtonRef = useRef()

    useEffect(()=>{
        const cartEl = cartButtonRef.current.getBoundingClientRect()
        setCartButtonRef({top: cartEl.top, left: cartEl.left})
    },[])

    useEffect(()=>{
        if(el){
            el.style.position = "fixed";
            el.style.zIndex = "12345"
        }
    },[el])

    useEffect(()=>{
        scrollList(isScrolling);
    },[isScrolling])

    useEffect(() => {
        document.onmousemove = handleMouseMove;
        document.onmouseleave = handleMouseUp;
        document.onmouseup = handleMouseUp;
    }, [isMouseDown]);

    useEffect(() => {
        if (divPos && el) {
            el.style.top = divPos.top - divPosDiff.topDiff + "px";
            el.style.left = divPos.left - divPosDiff.leftDiff + "px";
        }
    }, [divPos]);

    const handleMouseDown = (e) => {
        setEl(e.target);
        const el = e.target.getBoundingClientRect();
        setIsMouseDown(true);
        setDivInitPos({ top: el.top, left: el.left})
        setDivPosDiff({
            topDiff: e.clientY - el.top,
            leftDiff: e.clientX - el.left
        });
        setDivPos({ top: e.clientY, left: e.clientX });
    };
    const handleMouseMove = (e) => {
        if (isMouseDown) {
            setDivPos({ top: e.clientY, left: e.clientX });
        }
    };
    const handleMouseUp = (e) => {
        setIsMouseDown(false)
        if(el){
            if(el.getBoundingClientRect().top - divInitPos.top > 100){
                el.style.top = cartButtonPos.top + 76 + "px"
                el.style.left = cartButtonPos.left + 50 + "px"
                el.style.zIndex = "1"
                el.style.height = "0px"
                el.style.width = "0px"
                el.style.transitionDuration = "0.5s"
            }
            else{
                el.style.top = divInitPos.top + "px"
                el.style.left = divInitPos.left + "px"
                el.style.zIndex = "1"
                el.style.transitionDuration = "0.5s"
            }
            setTimeout(()=>{
                el.style.position = "absolute"
                el.style.transitionDuration = "0s"
                el.style.top = "0px"
                el.style.left = "0px"
                el.style.height = "45vh"
                el.style.width = "45vh"
                el.style.marginLeft = "2px"
                document.onmousemove = null;
                document.onmouseleave = null;
                document.onmouseup = null;
                setEl()
            },500)
        }
    };

    const scrollDiv = () => {
        imageListRef.current.scrollLeft += 2;
        if((imageListRef.current.scrollLeft + imageListRef.current.clientWidth) >= Math.floor(imageListRef.current.scrollWidth)-1){
            setIsScrolling(false);
        }
    }

    const scrollList = (condition) => {
        if(condition){
            setId(setInterval(scrollDiv, 10))
        }
        else{
            clearInterval(id);
        } 
    }

    const toggleScroll = () => {
        setIsScrolling(!isScrolling)
    }
    // scrolling logic end
    
    //Modal card logic start
    const openModal = (e) => {

        const itemIndex = e.target.getAttribute("data-index");
        setIsScrolling(false)
        setIsModalVisible(!isModalVisible)
        setItemObject(itemList[itemIndex])
    }

    const closeModal = () => {
        setIsModalVisible(!isModalVisible)
        setItemObject({})
    }
    //Modal card logic end


    let handleAnimation = isScrolling ? "walk 1.0s steps(12) infinite" : "stop_walk 1.0s steps(1) infinite";
    return (
        <div className="container">
        <div className="header1"></div>
            <div className="imageList" ref={imageListRef}>
                {
                    itemList.map((item,index)=>(
                        <div key={index} className="itemContainer">
                            <div className="itemUnder" style={{backgroundImage: `url(${item.src})`}} id = {index} key={index} data-index={index}></div>
                            <div className="itemAbove" style={{backgroundImage: `url(${item.src})`}} id = {index} key={index+'upper'} data-index={index} onMouseDown={handleMouseDown}></div>
                            {/* <img className="itemUnderImage" id = {index} key={index} data-index={index} src={item.src} onClick={openModal} alt=""/>
                            <img className="itemAboveImage" id = {index} key={index+'upper'} data-index={index} src={item.src} onClick={openModal} onMouseDown={handleMouseDown} alt=""/> */}
                            <div className="itemDetails">
                                <p className="itemPrice">{item.price}</p>
                                <p className="itemWeight">{item.weight}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className = "scrolling_button" ref={cartButtonRef} style={{animation:handleAnimation}} onClick={toggleScroll}></div>
            {isModalVisible && <ItemModal item={itemObject} closeModal={closeModal}/>}
        </div>
            
    )
}
export default ImageList