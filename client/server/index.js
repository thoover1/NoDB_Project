const express = require("express");
const pc = require("./controllers/players_controller");

const app = express();

app.use(express.json());
//get player by id? need? Only if using .filter to find specific player using a search box right???
// app.get(`/api/players/${whateverdatawewant}`);

app.post("/api/players", pc.create);
app.get("/api/players", pc.read);
app.put(`/api/players/:id`, pc.update);
app.delete(`/api/players/:id`, pc.delete);

const port = 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
