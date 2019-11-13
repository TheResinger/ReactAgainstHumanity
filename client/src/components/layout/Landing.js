import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <div className="container valign-wrapper" style={{ height: "75vh" }}>
                <div className="row">
                    <div className="col s12 center-align">
                        <p className="flow-text grey-text text-darken-1">
                            <b>React against Humanity</b> is a Cards Against Humanity clone, which is available at <a href="https://cardsagainsthumanity.com/">cardsagainsthumanity.com</a>, where you can buy it or download and print it out yourself. It is distributed under a <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/">Creative Commons - Attribution - Noncommercial - Share Alike</a> license. This web version is in no way endorsed or sponsored by cardsagainsthumanity.com. You may download the source code to this version from <a href="https://github.com/TheResinger/ReactAgainstHumanity">GitHub</a>.
                        </p>
                        <br />
                        <div className="col s6">
                            <Link to="/register" className="btn btn-large waves-effect waves-light hoverable blue accent-3" style={{
                                width: "140px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px"
                            }}>
                                Register
                            </Link>
                        </div>
                        <div className="col s6">
                            <Link to="/login" className="btn btn-large btn-flat waves-effect white black-text" style={{
                                width: "140px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px"
                            }}>
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;