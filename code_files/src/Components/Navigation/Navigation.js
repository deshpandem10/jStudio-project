import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import '../../App.css';

const Styles = styled.div`
    .navbar { background-color: #222; }
    a, .navbar-nav, .navbar-light .nav-link {
        color: #84d6fd;
        &:hover { color: white; }
    }
    .navbar-brand {
        font-size: 1.4em;
        color: #9FFFCB;4
        &:hover { color: white; }
    }
    .form-center {
        position: absolute !important;
        left: 25%;
        right: 25%;
    }
`;

const navigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">
                <img src={process.env.PUBLIC_URL + '/images/logo.jpg'} alt="jStudio-logo" className="jstudio-logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Gallery</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/about">About Us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/contact">Contact Us</Nav.Link>
                    </Nav.Item>               
                </Nav>
            </Navbar.Collapse>

            <Form className="form-center">
                <FormControl type="text" placeholder="Search..." className="" />
            </Form>
        </Navbar>
    </Styles>
)

export default navigationBar;