let players = require("../MyAPI.json");
let id = 11;

module.exports = {
  create: (req, res) => {
    console.log("ALEX YOU'RE AN IDIOT!!!!");
    console.log(req);
    console.log(res);
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
    console.log("ALEX YOU'RE AN IDIOT!!!!");
    res.status(200).send(players);
  },

  update: (req, res) => {
    console.log("ALEX YOU'RE AN IDIOT2.0!!!!");
    console.log(req);
    console.log(res);
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
