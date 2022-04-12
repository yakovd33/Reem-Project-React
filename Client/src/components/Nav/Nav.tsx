import { NavLink } from "react-router-dom";
import { navLinks } from "../data/Nav";
import '../../style/Nav.css';
import LogoGIF from '../../images/anxiety/Logo 500x500 px.gif';
import React from 'react';

const Nav = () => {
    return (
        <header>
            <div className="container">
                <section className="logo">
                    {/* <strong>Safe</strong>
                    <span className="blue_dot"></span>
                    <strong>Me</strong> */}
                    {/* <img src={LogoGIF} alt="aboutUs" /> */}
                </section>
                <nav>
                    {navLinks.map((curLink, index) => <NavLink key={index} to={curLink.path}>{curLink.link}</NavLink>)}
                </nav>
            </div>
        </header>
    );
};

export default Nav;
