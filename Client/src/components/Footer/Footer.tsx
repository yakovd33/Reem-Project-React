import { listCategories, listStory, socialMediaList, CustomerService } from "../data/Footer";
import { NavLink } from "react-router-dom";
import '../../style/Footer.css';
import React from 'react';
export const Footer = () => {
    return (
        <footer>
            {/* <div className="bottom-nav">
                <div className="container">
                    <ul>
                        <li className="list-title">Categories</li>
                        {listCategories.map((curCateogry, index) => <NavLink key={index} to={curCateogry.path}>{curCateogry.title}</NavLink>)}
                    </ul>
                    <ul>
                        <li className="list-title">About us</li>
                        {listStory.map((curStory, index) => <NavLink key={index} to={curStory.path}>{curStory.title}</NavLink>)}
                    </ul>
                    <ul>
                        <li className="list-title">Social Media</li>
                        {socialMediaList.map((curStory, index) => <li key={index}>{curStory.title}</li>)}
                    </ul>
                    <ul>
                        <li className="list-title">Customer Service</li>
                        {CustomerService.map((curStory, index) => <li key={index}>{curStory.title}</li>)}
                    </ul>
                </div>
            </div> */}
            <div className="copyright-txt">2022 &copy; All Rights Reserved</div>
        </footer>
    );
};
