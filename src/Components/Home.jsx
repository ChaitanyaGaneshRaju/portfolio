import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import image from "../assets/chaitanya-removebg.png";


class Home extends Component {
  render() {
    return (
      <div id="home-container">
        <div id="info">
          <p>Hello!</p>
          <h1>I'm Chaitanya Ganesh</h1>
          {/*Typewriter component for the writing effect of the text*/}
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewrtiter) => {
              typewrtiter
                .typeString(
                  "Student at University College of Engineering Narasaraopet"
                )
                .pauseFor(3000)
                .deleteAll()
                .typeString("Coder")
                .pauseFor(3000)
                .deleteAll()
                .typeString("Mentor")
                .pauseFor(3000)
                .deleteAll()
                .start();
            }}
          />
          
        </div>
        <div id="image">
          {/*Image */}
          <img src={image} alt="chaitanya-logo" />
          {/*Social Media links*/}
          <div id="social-media">
            <a href="https://github.com/ChaitanyaGaneshRaju"><i className="fab fa-github-square"></i></a>
            <a href="https://www.linkedin.com/in/chaitanyaganesh/"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.facebook.com/chaitanyaganesh.raju/"><i className="fab fa-facebook-square"></i></a>
            <a href="https://www.instagram.com/chaitanya.ganesh.raju/"><i className="fab fa-instagram-square"></i></a>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
