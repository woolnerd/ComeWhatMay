import React from "react";
import "./landing_page.css";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-container">
        <div className="landing-banner">
          <h1>Come What May</h1>
          <h2>A Disaster Preparation App</h2>
        </div>
        <div className="gallery">
          <div className="photo img1"></div>
          <div className="photo img2"></div>
          <div className="photo img3"></div>
        </div>
        <div className="landing-info">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            provident illo distinctio architecto magni asperiores eaque suscipit
            repudiandae maxime vitae labore delectus ipsam, aliquam expedita, ad
            odio aut enim rerum.
          </p>
        </div>
      </div>
    );
  }
}

export default LandingPage;
