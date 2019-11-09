import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { List, ListItem } from '../List';
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
            <div className="wrapper">
                <button className="btn btn-large waves-effect waves-light hoverable blue accent-3" style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                }} onClick={this.onLogoutClick}>
                    Logout
                        </button>
                {this.state.lobbies.length ? (
                    <List>
                        {this.state.lobbies.map(lobby => (
                            <ListItem key={lobby._id}>
                                <p>{lobby.gameName}</p>
                                <li>{lobby.user1 ? (lobby.user1) : ("Empty")}</li>
                                <li>{lobby.user2 ? (lobby.user2) : ("Empty")}</li>
                                <li>{lobby.user3 ? (lobby.user3) : ("Empty")}</li>
                                <li>{lobby.user4 ? (lobby.user4) : ("Empty")}</li>
                                <li>{lobby.user5 ? (lobby.user5) : ("Empty")}</li>
                                <li>{lobby.user6 ? (lobby.user6) : ("Empty")}</li>
                                <li>{lobby.user7 ? (lobby.user7) : ("Empty")}</li>
                                <li>{lobby.user8 ? (lobby.user8) : ("Empty")}</li>
                                <li>{lobby.user9 ? (lobby.user9) : ("Empty")}</li>
                                <li>{lobby.user10 ? (lobby.user10) : ("Empty")}</li>
                                
                                
                                
                            </ListItem>
                        ))}
                    </List>
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
