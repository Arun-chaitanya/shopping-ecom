import React, { useState } from 'react'
import './SmallTiles.scss'
function SmallTiles() {
  const [smallTilesList,setSmallTilesList]= useState([1,2,3,4,5,6,7,8,9,10])
  return (
    <div className="smallTiles">
      {
        smallTilesList.map((smallTile,index)=>(
          <div className="smallTile" key={index}>
            <img className="smallTile__img" src="https://www.jiomart.com/images/cms/section/category/291/516.png?v=1615910580" alt=""/>
          </div>
        ))
      }
    </div>
  )
}

export default SmallTiles
