import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { Card } from '../Card';
import API from "../../utils/API";

class Dashboard extends Component {
    state = {
        lobbies: []
    };

    componentDidMount() {
        this.loadLobbies();
    };

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    }

    loadLobbies = () => {
        API.getLobbies().then(res => {
            this.setState({ lobbies: res.data })
        }).catch(err => console.log(err));
    }
    render() {
        const { user } = this.props.auth;

        return (
            // <div className="container valign-wrapper" style={{ height: "75vh" }}>
            //     <div className="row">
            //         <div className="col s12 center-align">
            //             <h4>
            //                 <b>Hey there,</b> {user.name.split(" ")[0]}
            //                 <p className="flow-text grey-text text-darken-1">
            //                     You are logged into a full-stack{" "} <span style={{ fontFamily: "monospace" }}>MERN</span> app
            //                 </p>
            //             </h4>
            //             <button className="btn btn-large waves-effect waves-light hoverable blue accent-3" style={{
            //                 width: "150px",
            //                 borderRadius: "3px",
            //                 letterSpacing: "1.5px",
            //                 marginTop: "1rem"
            //             }} onClick={this.onLogoutClick}>
            //                 Logout
            //             </button>
            //         </div>
            //     </div>
            // </div>
            <div className="container ">
                <button className="btn btn-large waves-effect waves-light hoverable blue accent-3" style={{ width: "150px", borderRadius: "3px", letterSpacing: "1.5px", marginTop: "1rem" }} onClick={this.onLogoutClick}>Logout</button>
                {this.state.lobbies.length ? (
                    <div className="row">
                        {this.state.lobbies.map(lobby => (
                            <div key={lobby._id} className="col s12 m6 l4">
                                <div className="card blue-grey">
                                    <div className="card-content white-text">
                                        <span className="card-title"><strong>{lobby.gameName}</strong></span>
                                        <p><strong>User List: </strong>{lobby.user1 ? (" " + lobby.user1) : (" Empty")}, {lobby.user2 ? (" " + lobby.user2) : (" Empty")}, {lobby.user3 ? (" " + lobby.user3) : (" Empty")}, {lobby.user4 ? (" " + lobby.user4) : (" Empty")}, {lobby.user5 ? (" " + lobby.user5) : (" Empty")}, {lobby.user6 ? (" " + lobby.user6) : (" Empty")}, {lobby.user7 ? (" " + lobby.user7) : (" Empty")}, {lobby.user8 ? (" " + lobby.user8) : (" Empty")}, {lobby.user9 ? (" " + lobby.user9) : (" Empty")}, {lobby.user10 ? (" " + lobby.user10) : (" Empty")}</p>
                                        {/* Expansions */}
                                        <br />
                                        <p><strong>Expansions: </strong>Base Game, The First Expansion, The Second Expansion, The Third Expansion, The Fourth Expansion, The Fifth Expansion</p>
                                        {/* Points to Win */}
                                        <br />
                                        <p><strong>Goal: </strong> {lobby.wincount}</p>
                                    </div>
                                    <div className="card-action">
                                        {lobby.passwordBool ? (
                                            <a href="/api/join/:id">Join Game(PASSWORDED)</a>
                                        ):(
                                            <a href="/api/join/:id">Join Game</a>
                                        )}
                                        
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                        <h3 className="text-center">No Lobbies To Display.</h3>
                    )}
            </div>
        );
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { logoutUser })(Dashboard);
