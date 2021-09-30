import React from "react";
import "./landing_page.css";
import { Link } from "react-router-dom";

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
      </div>

      // <div className="landing-container">
      //   <div className="image-container">
      //     <img src="https://come-what-may.s3.amazonaws.com/images/james-wheeler-RRZM3cwS1DU-unsplash.jpg" alt=""/>
      //   </div>
      //   <div className="info-container">
      //     <div className="landing-banner">
      //       <h1>Come What May</h1>
      //       <h2>A Disaster Preparation App</h2>
      //     </div>
      //     <div className="landing-info">
      //       <p>
      //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
      //         provident illo distinctio architecto magni asperiores eaque suscipit
      //         repudiandae maxime vitae labore delectus ipsam, aliquam expedita, ad
      //         odio aut enim rerum.
      //     </p>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default LandingPage;
