import React from "react";
import baner from "./assets/img/banerPrimeSale.jpg";
import "./Home.css";
import Product from './Product';
import leanstartup from "./assets/img/leanstartup.jpg";
import blender from "./assets/img/blender.jpg";
import watch from "./assets/img/watch.jpg";
import ipad from "./assets/img/ipad.jpg";
import tv from "./assets/img/samsungTV.jpg";
import echo from "./assets/img/echo.jfif";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={baner} alt="Baner prime videos" />

        <div className="home__row">
            <Product     
              id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image= {leanstartup}/>
            <Product
             id="49538094"
             title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
             price={239.0}
             image= {blender}
             rating={4} />
        </div>

        <div className="home__row">
        <Product 
          id="4903850"
          title="Samsung Galaxy Watch 3 (45mm, GPS, Bluetooth) Smart Watch with Advanced Health Monitoring, Fitness Tracking , and Long lasting Battery - Mystic Black (US Version)"
          price={199.99}
          image= {watch}
          rating={3}/>
        <Product 
         id="23445930"
         title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
         price={98.99}
         image= {echo}
         rating={5}/>
        <Product 
          id="3254354345"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          image= {ipad}
          rating={4}/>
        </div>

        <div className="home__row">
        <Product 
         id="90829332"
         title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
         price={1094.98}
         image= {tv}
         rating={4}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
