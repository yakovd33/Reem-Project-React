//import AboutUsImage from "../../images/anxiety/Anxiety-Solutions.jpg";
import '../../style/AbountUs.css';
import React from 'react';
const AboutUs = () => {
    return (
        <div className="aboutus">
            <div className="aboutus-container">
                <h1>About Us</h1>
                <div className="aboutus-content-container">
                    {/* <img src={AboutUsImage} alt="aboutUs" /> */}
                    <div className="aboutus-content">
                        <p>
                            We are a non-profit organization, our mission is to provide
                            quality, compassionate, and nonjudgmental services in a manner
                            that fosters self-respect and independence in persons experiencing
                            intimate partner violence and to lead the struggle to end domestic
                            violence through advocacy and community education.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
