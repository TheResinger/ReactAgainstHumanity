import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
// import { Card } from '../Card';
import { Link } from 'react-router-dom';
import API from "../../utils/API";


class Dashboard extends Component {
    state = {
        lobbies: [],
        userName: ""
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
    createLobby = name => {
        const { user } = this.props.auth;
        API.addLobby({
            userList: user.name, 
            expansions: ["Base Game"], 
            wincount: 10, 
            gameName: `${user.name}'s Game`,
            passwordBool: false,
            password: "",
            gameStarted: false,
        }).then(res => this.props.history.push(`/lobby/${res.data._id}`)).catch(err => console.log(err))
    }

    
    render() {
        // const { user } = this.props.auth;
        
        return (
            <div className="container">
                {/* {this.setState(userName: user.name)} */}
                <div className="row" style={{ padding: "0px 0.75rem"}}>
                    <button className="btn btn-large waves-effect waves-light hoverable grey darken-3 accent-3 left" style={{ width: "150px", borderRadius: "3px", letterSpacing: "1.5px", marginTop: "1rem" }} onClick={this.onLogoutClick}>Logout</button>
                    <button className="btn btn-large waves-effect waves-light hoverable grey darken-3 accent-3 right" style={{ width: "150px", borderRadius: "3px", letterSpacing: "1.5px", marginTop: "1rem" }} onClick={this.createLobby}>New Lobby</button>
                </div>
                {this.state.lobbies.length ? (
                    <div className="row">
                        {this.state.lobbies.map(lobby => (
                            <div key={lobby._id} className="col s12 m6 l4" id={lobby._id}>
                                {lobby.expansions[0].baseGame}
                                <div className="card small grey darken-3">
                                    <div className="card-content white-text">
                                        <span className="card-title"><strong>{lobby.gameName}</strong></span>
                                        <p><b>User List: </b>{lobby.userList.map((name, index) => <span key={index}>{name}, </span>)}</p>
                                        {/* Expansions */}
                                        {/* <br /> */}
                                        <p><b>Expansions: </b>{lobby.expansions.map((expansion, index) => <span key={index}>{expansion}, </span>)}</p>
                                        {/* Points to Win */}
                                        {/* <br /> */}
                                        <p><b>Goal: </b> {lobby.wincount}</p>
                                    </div>
                                    <div className="card-action bottom">
                                        {lobby.passwordBool ? (
                                        <Link to={"/lobby/" + lobby._id}><button className="waves-effect waves-teal btn-flat white-text" style={{marginLeft: "5px"}}>Join Game (Passworded)</button></Link>
                                        ) : (
                                        <Link to={"/lobby/" + lobby._id}><button className="waves-effect waves-teal btn-flat white-text" style={{marginLeft: "5px"}}>Join Game</button></Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                        <h3 className="text-center white-text">No Lobbies To Display.</h3>
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
