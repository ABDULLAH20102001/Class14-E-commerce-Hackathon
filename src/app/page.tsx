
'use client';
// import App from "next/app";
import A123 from "./components/Discount Item/123";
import DiscountItemHome from "./components/Discount Item/Discount Item Home";
import SelaiderHome from "./components/Home/SelaiderHome/page";
import LeatestBlog from "./components/Leatest Blog/Leatest Blog";
import LeatestBlogHome from "./components/Leatest Blog/Leatest Blog Home";
// import Botem from "./components/Nave Botem/Botem";
import Nave1 from "./components/Nave Botem/Nave1";
// import ShopList from "./components/page2/page";
import SelaiderFeaturedProducts from "./components/Product/FeaturedProducts/page";
import LeatestProducts from "./components/Product/LeatestProducts";
import WhatShopexOffer from "./components/Product/WhatShopexOffer";
import TrendingProducts from "./components/Trending Products2/Trending Products";
import TrendingProductsHome from "./components/Trending Products2/Trending Products Home";
// import ShopGridDefault from "./page1/page";


export default function Home() {
  return (
    <div>

      <div>
        
      </div>
      <h2></h2>
      <div>
        <Nave1 />
      </div>
      <div>
        <SelaiderHome />
      </div>
      <div>
        <SelaiderFeaturedProducts />
      </div>
      <div>
        <LeatestProducts />
      </div>
      <div>
        <WhatShopexOffer />
      </div>
      <div>
        <TrendingProductsHome />
      </div>
      <div>
        <TrendingProducts />
      </div>
      <div>
        <DiscountItemHome />
      </div>
      <div>
        <A123 />
      </div>
      <div>
        <LeatestBlogHome />
      </div>
      <div>
        <LeatestBlog />
      </div>
      <div>
        {/* <ShopGridDefault /> */}
      </div>
      <div>
        {/* <ShopList /> */}
      </div>
      <div>
        {/* <Botem />
        <App1/> */}
        {/* <App/> */}
      </div>

    </div>


  );
}


