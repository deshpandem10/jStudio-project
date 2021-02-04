import React from 'react';
import './HomePage.css';

import Background from "../../Images/home-background.jpg";

let homeStyleBackground = {
    width: "100%",
    height: "35em",
    backgroundImage: `url(${Background})`,

    //Positioning the image properly
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    //Image blurred
    filter: "blur(3px)",
}

export const Home = () => (
    <div>
        <div style={ homeStyleBackground }></div> 

        <div className="home-content">
            <h2>Welcome</h2>
            <h1 style={{color: "rgb(132 214 253)"}}>J Design's Studio</h1>
            <p className="homePage-paragraph">Interior & Exterior Design Consultancy</p>
            <p className="homePage-paragraph">Home, Office & Villa Designs</p>
        </div>
    </div>       
);