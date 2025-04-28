import React, { Suspense } from "react";
import SideNavigation from "../stories/BB_SideNavigation";
import Spacing from "../stories/BB_Spacing";
import Card from "stories/BB_Card";
import ImgShopify from '../stories/assets/ceramics3D_img7.png';
import ImgEtsy from '../stories/assets/ceramics3D_img8.png';
import Search from "stories/BB_Search";
import etsyLogo from '../stories/assets/Etsy.svg';

const Hero = React.lazy(() => import("../stories/BB_Hero"));
const Sidebar = React.lazy(() => import("framer-components/dist/sidebar"));

const Home: React.FC = () => {

    return (
        <div style={{ display: "flex", height: "100vh", width: "100vw", overflow: "hidden" }}>
            {/* Side navigation */}
            <div style={{ width: "100px", flexShrink: 0 }}>
                <SideNavigation />
            </div>

            {/* Main content (Hero flush with SideNav) */}
            <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", width: "100%", overflow: "auto" }}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Hero />
                </Suspense>
                <div style={{ flexGrow: 1, padding: "24px 80px" }}>
                    <Spacing size={"40"}/>
                    <Card
                        avatarURL='https://cdn.simpleicons.org/shopify'
                        platformName='Shopify'
                        imageURL={ImgShopify}
                        title='San Francisco Ceramics'
                        description='Hand crafted ceramics with function and sustainability in mind'
                        linkTo="/Shopify"
                    />
                    <Spacing size={"40"}/>
                    <Card
                        avatarURL={etsyLogo}
                        platformName='Etsy'
                        imageURL={ImgEtsy}
                        title='Etsy Ceramics'
                        description='Etsy Storefront'
                        linkTo="/Etsy"
                    />
                    <Spacing size={"40"}/>
                </div>
            </div>

            {/* Right Sidebar (Search Feature) */}
            <div style={{ display: "flex", height: "100vh" }}>
                <div style={{  width: "350px", flexShrink: 0 }}>
                    <Search />
                </div>
            </div>

        </div>
    );
};



export default Home;
