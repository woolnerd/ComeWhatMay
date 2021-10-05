import React from "react";
import "./footer.css";
import { GrLinkedin } from 'react-icons/gr'; 
import { GoMarkGithub } from 'react-icons/go';
import { FaAngellist } from 'react-icons/fa'


export const Footer = () => {
    return (
    <div className="footer">
        <div className="footer-container-right">
            <div className="footer-title">Meet The Team</div>
            <div className="team-info">
                <div>
                    <h4 className="team-member">David Woolner</h4>
                    <div className="footer-icons">
                            <p><a className="footer-icon" target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/david-woolner"><GrLinkedin/></a></p>
                            <p><a className="footer-icon" target="_blank" rel="noreferrer noopener" href="https://angel.co/u/david-woolner"><FaAngellist /></a></p>
                            <p><a className="footer-icon" target="_blank" rel="noreferrer noopener" href="http://www.github.com/DavidWoolner"><GoMarkGithub/></a></p>
                    </div>
                </div>
                <div>
                    <h4 className="team-member">Elsa Caballero</h4>
                    <div className="footer-icons">
                            <p><a className="footer-icon" target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/elsa-caballero/"><GrLinkedin/></a></p>
                            <p><a className="footer-icon" target="_blank" rel="noreferrer noopener" href="https://angel.co/u/elsa-caballero"><FaAngellist /></a></p>
                            <p><a className="footer-icon" target="_blank" rel="noreferrer noopener" href="https://github.com/elsicab"><GoMarkGithub/></a></p>
                    </div>
                </div>
                <div>
                    <h4 className="team-member">Dustin Adler</h4>
                    <div className="footer-icons">
                            <p><a className="footer-icon" target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/dustin-adler-software-engineer-web-developer/">< GrLinkedin/></a></p>
                            <p><a className="footer-icon" target="_blank" rel="noreferrer noopener" href="https://angel.co/u/dustin-adler"><FaAngellist /></a></p>
                            <p><a className="footer-icon" target="_blank" rel="noreferrer noopener" href="https://github.com/Dustin-Adler"><GoMarkGithub/></a></p>
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


