import axios from "axios";

export default {
  getLobbies: function() {
    return axios.get("/api/lobby");
  },
  addLobby: function(lobbyData) {
    return axios.post("/api/lobby", lobbyData);
  },
  loadWhiteCards: function() {
    return axios.get("/api/whiteCards");
  },
  loadBlackCards: function() {
    return axios.get("/api/blackCards");
  }
}