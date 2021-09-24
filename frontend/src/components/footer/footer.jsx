import React from "react";
import "./footer.css";
import { SiMongodb } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { FaNodeJs } from 'react-icons/fa'


export const Footer = () => {
    return (
    <div className="footer">
        <div className="footer-container">
            <div>
                <h4>Team Members</h4>
                <div>
                    <p>Dustin Adler</p>
                    <p>David Woolner</p>
                    <p>Elsa Caballero</p>
                </div>
            </div>
            <div>
                <h4>Technologies</h4>
                 <div>
                        <p><SiMongodb/> MongoDB</p>
                     <p>Express</p>
                        <p><GrReactjs/> React</p>
                        <p><FaNodeJs/> Node</p>
                     <p>Redux</p>
                </div>   
            </div>
            <div>
                <h4>About</h4>
                <div>
                        <p>Come What May is a disaster preparation app that allows users
                        to create unique disaster plans to suit the needs of their
                        household.</p>
                </div>
            </div>
        </div>
    </div>
    )
}


