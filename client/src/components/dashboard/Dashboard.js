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
            <div className="container">
                <button className="btn btn-large waves-effect waves-light hoverable blue accent-3" style={{ width: "150px", borderRadius: "3px", letterSpacing: "1.5px", marginTop: "1rem" }} onClick={this.onLogoutClick}>Logout</button>
                <button className="btn btn-large waves-effect waves-light hoverable blue accent-3" style={{ width: "150px", borderRadius: "3px", letterSpacing: "1.5px", marginTop: "1rem" }} onClick={this.onLobbyClick}>New Lobby</button>
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
                                        <p><strong>Expansions: </strong>{lobby.expansions[0].baseGame ? (<span>Base Game</span>):(<span></span>)} {lobby.expansions[0].first ? (<span>, The First Expansion</span>):(<span></span>)} {lobby.expansions[0].second ? (<span>, The Second Expansion</span>):(<span></span>)} {lobby.expansions[0].third ? (<span>, The Third Expansion</span>):(<span></span>)} {lobby.expansions[0].fourth ? (<span>, The Fourth Expansion</span>):(<span></span>)} {lobby.expansions[0].fifth ? (<span>, The Fifth Expansion</span>):(<span></span>)} {lobby.expansions[0].sixth ? (<span>, The Sixth Expansion</span>):(<span></span>)}</p>
                                        {/* Points to Win */}
                                        <br />
                                        <p><strong>Goal: </strong> {lobby.wincount}</p>
                                    </div>
                                    <div className="card-action bottom">
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
