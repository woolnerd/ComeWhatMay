import React from "react";
import "./footer.css";
import { GrLinkedin } from 'react-icons/gr'; 
import { GoMarkGithub } from 'react-icons/go';


export const Footer = () => {
    return (
    <div className="footer">
        <div className="footer-container-right">
            <div className="footer-title">Meet The Team</div>
            <div className="team-info">
                <div>
                    <h4 className="team-member">David Woolner</h4>
                    <div className="footer-icons">
                        <p><a className="footer-icon" href="https://www.linkedin.com/in/david-woolner"><GrLinkedin/></a></p>
                        <p><a  className="footer-icon" href="http://www.github.com/DavidWoolner"><GoMarkGithub/></a></p>
                    </div>
                </div>
                <div>
                    <h4 className="team-member">Elsa Caballero</h4>
                    <div className="footer-icons">
                        <p><a className="footer-icon" href="https://www.linkedin.com/in/elsa-caballero/"><GrLinkedin/></a></p>
                        <p><a className="footer-icon" href="https://github.com/elsicab"><GoMarkGithub/></a></p>
                    </div>
                </div>
                <div>
                    <h4 className="team-member">Dustin Adler</h4>
                    <div className="footer-icons">
                        <p><a className="footer-icon" href="https://www.linkedin.com/in/dustin-adler-software-engineer-web-developer/">< GrLinkedin/></a></p>
                        <p><a className="footer-icon" href="https://github.com/Dustin-Adler"><GoMarkGithub/></a></p>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-container-left">
            <div className="footer-title">About Our Site</div>
            <div className="about-info">
                Come What May is a disaster preparation app that allows users to 
                create unique disaster plans to suit the needs of their household. 
                Users can create profiles in which to house emergency plan information, 
                schedule drills and time drill response time. Log in to explore and learn more.
            </div>
        </div>
    </div>
    )
}


