import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import API from "../utils/API";

class Lobby extends Component {
  state = {
    lobbies: [],
    userList: [],
  };

  componentDidMount() {
    this.loadLobbies();
    this.loadUserList();
    // this.loadWhiteCards();
    // this.loadBlackCards();
  }

  loadLobbies = () => {
    API.getLobbies().then(res => {
      this.setState({ lobbies: res.data })
    }).catch(err => console.log(err));
  };

  loadUserList = () => {
    API.getUserList().then(res => {
      this.setState({ userList: res.data })
    }).catch(err => console.log(err));
  }

  // loadWhiteCards = () => {
  //   API.loadWhiteCards().then(res => {
  //     this.setState({ whiteCards: res.data})
  //   }).catch(err => console.log(err));
  // }
  // loadBlackCards = () => {
  //   API.loadBlackCards().then(res => {
  //     console.log(res.data);
  //     this.setState({ blackCards: res.data})
  //   }).catch(err => console.log(err));
  // }
  render() {
    return (
      <Container fluid>
        
      </Container>
    );
  }
}

export default Lobby;
