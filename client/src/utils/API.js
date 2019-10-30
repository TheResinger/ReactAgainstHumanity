import axios from "axios";

export default {
  getLobbies: function() {
    return axios.get("/api/lobbies");
  },
  getUserList: function() {
    return axios.get("/api/users");
  },
  addLobby: function(lobbyData) {
    return axios.post("/api/lobbies", lobbyData);
  },
  loadWhiteCards: function() {
    return axios.get("/api/whiteCards");
  },
  loadBlackCards: function() {
    return axios.get("/api/blackCards");
  }
}