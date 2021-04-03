import "./App.css";
import Particles from "react-particles-js";
import Home from "./Components/Home";
import About from "./Components/About";
import Education from "./Components/Education";
import Skills from "./Components/Skills";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/*Nav Bar*/}
          <nav>
            <ul id="nav-bar">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/education">Education</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/education">
              <Education />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>

      {/*Background particles moving effect*/}
      <div id="particle-js">
        <Particles
          params={{
            particles: {
              number: {
                value: 130,
              },
              size: {
                value: 4,
              },
              move: {
                speed: 0.5,
              },
              line_linked: {
                enable: true,
                color: "#ab647f",
                opacity: 1,
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "grab",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                grab: {
                  line_linked: {
                    opacity: 0.5,
                  },
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default App;
