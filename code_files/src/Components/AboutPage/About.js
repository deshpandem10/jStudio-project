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

export const Auto = () => (
    <GridWrapper>
        <h2>About Page</h2>
        <p>This is paragraph 1 on About page.</p>
        <p>This is paragraph 2 on About page.</p>
        <p>This is paragraph 3 on About page.</p>
    </GridWrapper>
);