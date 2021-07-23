import React, { useState } from 'react'
import "./BannerTiles.scss"
function BannerTiles() {
  const [bannerTilesList, setBannerTilesList] = useState([1,2,3,4])
  return (
    <div className="bannerTiles">
      {
        bannerTilesList.map((bannerTile,index)=>(
          <img key={index} className="bannerTile" src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1620056963_hygwm.jpg" alt=""/>
        ))
      }
    </div>
  )
}

export default BannerTiles
