import React, { useEffect, useRef, useState } from 'react'
import "./Tiles.scss"
function Tiles() {
  const [tilesList,setTilesList] = useState([1,2,3,4,5,6,7,8])
  return (
    <div className="tiles">
      {tilesList.map((tile,index)=>(
        <div className="tile" key={index}>
          <h3>Up to 20% off</h3>
          <img src="https://www.jiomart.com/images/category/44/thumb/0-44.png" alt=""/>
          <p>Biscuits and Cookies</p>
        </div>
      ))}
    </div>
  )
}

export default Tiles
