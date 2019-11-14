import React, { Component } from 'react';
import API from "../../utils/API";

class Lobby extends Component {
  state = {
    gamestarted: true,
    lobbyData: {},
    currentBlackCard: {},
    userPoints: [],
    userWins: [],
    userReady: []
  };
  componentDidMount() {
    this.loadLobbyData();
  }
  loadLobbyData() {
    API.getLobby(this.props.match.params.id).then(res => {
      this.setState({ lobbyData: res.data })
    }).catch(err => console.log(err));
  }
  gameStart() {
  }
  expansionHandler(card) {
    switch (card) {
      case "BaseGame":
        return <span>BASE</span>;
      case "First":
        return <span>FRST</span>;
      case "Second":
        return <span>SCND</span>;
      case "Third":
        return <span>TIRD</span>;
      case "Fourth":
        return <span>FRTH</span>;
      case "Fifth":
        return <span>FFTH</span>;
      case "Sixth":
        return <span>SXTH</span>;
      default:
        return <span>Invalid Deck</span>
    }
  }
  generateUserInfo(userList) {
    if (!userList) {
      return null;
    }
    if (!userList.length) {
      return <span>This shouldnt ever pop</span>
    } else {
      for (let i = 0; i < this.state.lobbyData.userList.length; i++) {
        this.state.userPoints.push("0");
        this.state.userWins.push("0");
        this.state.userReady.push("0");
      }
      return (
        <div className="col">
          <div id="userNames" className="col center-align">
            <ul style={{ marginTop: "10px", marginBottom: "10px" }}>
              {userList.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
          <div id="points" className="col center-align" style={{ marginTop: "10px", marginBottom: "10px" }}>
            {userList.map((user, index) => <p style={{ margin: "0px auto" }} key={index}>{this.state.userPoints[index]}</p>)}
          </div>
          <div id="wins" className="col center-align" style={{ marginTop: "10px", marginBottom: "10px" }}>
            {userList.map((user, index) => <p style={{ margin: "0px auto" }} key={index}>{this.state.userWins[index]}</p>)}
          </div>
          <div id="icons" className="col center-align" style={{ marginTop: "10px", marginBottom: "10px" }}>
            {console.log(this.state.userReady)}
            {userList.map((user, index) => <p key={index} style={{ margin: "0px auto" }}><i className="tiny material-icons">{this.state.userReady[index] === 0 ? (<span>check</span>) : (<span>clear</span>)}</i></p>)}
          </div>
        </div>
      )
    }
  }
  generateCards = () => {
    // API.loadWhiteCards()
  }

  render() {
    return (
      <div className="container">
        <br />
        <div className="row" style={{ marginBottom: "0px" }}>
          {this.state.gamestarted ? (
            <div className="col">
              <div className="card small black darken-1" style={{ width: "225px", height: "225px" }}>
                <div className="card-content white-text center-align" style={{ padding: "20px 15px 0px 15px" }}>
                  {/* Card text goes here */}
                  {/* {this.state.currentBlackCard} */}
                  <span style={{ fontSize: "17px" }}>While the United States raced the Soviet Union to the moon, the Mexican government funneled millions of pesos into research on ____.</span>
                </div>
                <div className="card-action" style={{ paddingLeft: "0px", paddingRight: "0px", paddingTop: "0px", paddingBottom: "0px", borderTop: "0px solid #000" }}>
                  {/* {this.expansionHandler(this.state.currentBlackCard.expansion)} */}
                  <button className="btn-flat black-text right disabled">EXP</button>
                </div>
              </div>
            </div>
          ) : (
              <div className="col">
                <div className="card small black darken-1" style={{ width: "225px", height: "225px" }}>
                  <div className="card-content white-text center-align" style={{ padding: "10px 10px 0px 10px" }}>
                    <span style={{ fontSize: "16px" }}>Please wait for the host to start the game.</span>
                  </div>
                </div>
              </div>
            )}
          {/* This is the user list */}
          {/* Pull data from api, create dom element if user exists with their name */}
          {this.generateUserInfo(this.state.lobbyData.userList)}
        </div>
        {/* This is the users hand */}
        {/* Generate cards if game is started, otherwise be empty */}
        <div className="row">
          {this.state.gamestarted ? (
            <div id="cardArea">
              {this.generateCards()}
            </div>
          ) : (
              <div></div>
            )}
          {/* <div className="col s12 m12 l12">
            <div className="col" style={{ paddingRight: "5px", paddingLeft: "0px" }}>
              <div className="card white darken-1 small hoverable" style={{ width: "170px", height: "170px", marginBottom: "0px" }}>
                <div className="card-content black-text center-align" style={{ padding: "15px 0px 5px 5px" }}>
                  <span>Doing the right thing</span>
                </div>
                <div className="card-action" style={{ paddingLeft: "0px", paddingRight: "0px", paddingTop: "5px", paddingBottom: "5px" }}>
                  <button className="waves-effect waves-teal btn-flat black-text" style={{ marginLeft: "5px" }}>Play Card</button>
                  <button className="btn-flat black-text right disabled" style={{ fontSize: "12px" }}>BASE</button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    )
  }
}

export default Lobby;