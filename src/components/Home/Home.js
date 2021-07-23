import React from 'react';
import "./Home.scss"
import MainBannerCarousel from "../ContentManagement/MainBannerCarousel/MainBannerCarousel"
import Tiles from '../ContentManagement/Tiles/Tiles';
import BannerTiles from '../ContentManagement/BannerTiles/BannerTiles';
import SmallTiles from '../ContentManagement/SmallTiles/SmallTiles';

function Home() {
    return (
        <div className="homePage">
            {/* <BannerCarousel/> */}
            <Tiles/>
            <BannerTiles/>
            <SmallTiles/>
        </div>
    )
}

export default Home
