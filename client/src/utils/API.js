import axios from "axios";

export default {
  getLobbies: function() {
    return axios.get("/api/lobby");
  },
  getLobby: function(id) {
    return axios.get("/api/lobby/" + id)
  },
  addLobby: function(lobbyData) {
    return axios.post("/api/lobby", lobbyData);
  },
  loadWhiteCards: function(expansionData) {
    return axios.get("/api/whiteCards", expansionData);
  },
  loadBlackCards: function(expansionData) {
    return axios.get("/api/blackCards", expansionData);
  }
}