import axios from "axios";

export default {
  getLobbies: function() {
    return axios.get("/api/lobby");
  },
  getLobby: function(id) {
    return axios.get("/api/lobby/" + id)
  },
  addLobby: function(name) {
    return axios.post("/api/lobby", name);
  },
}