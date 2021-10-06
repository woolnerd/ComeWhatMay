import React from "react";
import "./landing_page.css";
import { Link } from "react-router-dom";
import { CgProfile} from "react-icons/cg"
import { BsPencilSquare} from "react-icons/bs"
import { AiOutlineFire} from "react-icons/ai"
import { GiWhistle} from "react-icons/gi"

class LandingPage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <div className="navbar">
          <div className="btn-container-homepage">
            <div className="btn-inner-container">
              <Link id="btn-signup" to={"/signup"} className="btn-style-1">
                Signup
              </Link>
              <Link to={"/login"} className="btn-style-1">
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="main-section">
          <div className="main-banner">
          </div>
          <div className="banner-info">
            <h2>Come What May</h2>
            <h4>The Disaster Preparation App - When the unexpected happens, be prepared.</h4>
          </div>
        </div>
        <div className="container">How <p> CWM </p> Works</div>
        <div className="app-features">
          <div className="app-icon-sec">
            <div className="app-icon"><BsPencilSquare /></div>
            <h4>Register</h4>
            <p className="icon-num">- 1 -</p>
            <p className="icon-info">Have access to all features.</p>
          </div>
          <div className="app-icon-sec">
            <div className="app-icon"><CgProfile /></div>
            <h4>Create a Profile</h4>
            <p className="icon-num">- 2 -</p>
            <p className="icon-info">Add household information to keep track of your loved ones and have a plan in place.</p>
          </div>
          <div className="app-icon-sec">
            <div className="app-icon"><AiOutlineFire /></div>
            <h4>Create a Plan</h4>
            <p className="icon-num">- 3 -</p>
            <p className="icon-info">Personalize emergency plans for all situations.</p>
          </div>
          <div className="app-icon-sec">
            <div className="app-icon"><GiWhistle /></div>
            <h4>Practice</h4>
            <p className="icon-num">- 4 -</p>
            <p className="icon-info">Put your preparation to the test! Run live drills and keep track of your history.</p>
          </div>
        </div>
        <div className="blur"></div>
      </div>
    );
  }
}

export default LandingPage;
