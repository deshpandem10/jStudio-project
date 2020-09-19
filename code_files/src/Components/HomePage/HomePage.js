import React, { Component } from 'react';
import styled from 'styled-components';
import './HomePage.css';

import Background from '../../Images/home-background.jpg';

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
    <div style={ homeStyleBackground }>
        <p>Hello, Madhura!</p>
    </div>        
);