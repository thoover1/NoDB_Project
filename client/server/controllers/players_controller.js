let players = require("../MyAPI.json");
let id = 0;

module.exports = {
  create: (req, res) => {
    const { name, position, comments } = req.body;
    let newPlayer = {
      name: name,
      position: position,
      comments: comments,
      id
    };
    id++;
    players.push(newPlayer);
    res.status(200).send(players);
  },

  read: (req, res) => {
    res.status(200).send(players);
  },

  update: (req, res) => {
    let { name, position, comments } = req.body;
    let updateID = req.params.id;
    let playerIndex = players.findIndex(
      player => player.id === parseInt(updateID)
    );
    if (playerIndex !== -1) {
      players[playerIndex] = {
        id: updateID,
        name,
        position,
        comments
      };
    }
    res.status(200).send(players);
  },

  delete: (req, res) => {
    const deleteID = req.params.id;
    playerIndex = players.findIndex(player => player.id == deleteID);
    players.splice(playerIndex, 1);
    res.status(200).send(players);
  }
};
