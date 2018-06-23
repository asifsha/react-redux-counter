import React from 'react';
import { Navbar,Nav,NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom'


const Header = () => (
    <Navbar>       
        <Nav>         
            <NavItem componentClass={Link} href='/' to='/'>Home</NavItem>
            <NavItem componentClass={Link} href='/about-us' to='/about-us'>About</NavItem>                       
        </Nav>
    </Navbar>
)
export default Header;
