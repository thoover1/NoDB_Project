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
    players.push({ newPlayer });
    res.status(200).send(players);
  },

  read: (req, res) => {
    res.status(200).send(players);
  },

  update: (req, res) => {
    const { name, position, comments } = req.body;
    const updateID = req.params.id;
    const playerIndex = players.findIndex(player => player.id == updateID);
    let player = players[playerIndex];

    players[playerIndex] = {
      id: player.id,
      name: name || player.name,
      position: position || player.position,
      comments: comments || player.comments
    };

    res.status(200).send(players);
  },

  delete: (req, res) => {
    const deleteID = req.params.id;
    playerIndex = players.findIndex(player => player.id == deleteID);
    players.splice(playerIndex, 1);
    res.status(200).send(players);
  }
};
