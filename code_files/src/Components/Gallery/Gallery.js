import React from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
    display: grid;
    grid-gap: 10px;
    margin-top: 1em;
    margin-left: 6em;
    margin-right: 6em;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: minmax(25px, auto);
`;

export const Gallery = () => (
    <GridWrapper>
        <h2>This page will have gallery/portfolio</h2>
        <p>This is paragraph 1.</p>
        <p>This is paragraph 2.</p>
        <p>This is paragraph 3.</p>
    </GridWrapper>
);