import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-fixed">
                <nav className="z-depth-0">
                    <div className="">
                        <ul className="left hide-on-med-and-down">
                            <li><a href="https://github.com/TheResinger/ReactAgainstHumanity">GitHub</a></li>
                        </ul>
                        <Link to="/" className="brand-logo center" style={{ fontFamily: "monospace", fontSize: "24px", width: "100%"}}>React Against Humanity</Link>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;