import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <div id="skills">
                <div><i className="fab fa-html5"></i><p>HTML5</p></div>
                <div><i className="fab fa-css3-alt"></i><p>CSS3</p></div>
                <div><i className="fab fa-js"></i><p>JavaScript</p></div>
                <div><i className="fab fa-react"></i><p>React Js</p></div>
                <div><i className="fab fa-php"></i><p>PHP</p></div>
                <div><i className="fab fa-java"></i><p>Java</p></div>
                <div><i className="fab fa-python"></i><p>Python</p></div>
                <div><i class="fas fa-database"></i><p>Oracle RDBMS</p></div>
            </div>
        );
    }
}

export default Skills;