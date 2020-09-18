import React, { Component } from 'react';
import styled from 'styled-components';
import './HomePage.css';

const GridWrapper = styled.div`
    display: grid;
    grid-gap: 10px;
    margin-top: 1em;
    margin-left: 6em;
    margin-right: 6em;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: minmax(25px, auto);
`;

export const Home = () => (
    <div className="homeBackground">
        <p>Hello, Madhura!</p>
        <p>Work in progress.</p>
        <p>This is paragraph 1 on Home page.</p>
        <p>This is paragraph 2 on Home page.</p>
    </div>
)