import React, { Component } from "react";
import "./PlayerList.css";

class playerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      position: "",
      comments: ""
    };
  }

  universalInput(property, value) {
    this.setState({
      [property]: value
    });
  }

  render() {
    const { name, position, comments } = this.state;
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.postPlayer(name, position, comments);
          this.setState({ name: "", position: "", comments: "" });
        }}
      >
        <label>Top Players</label>
        <input
          value={name}
          onChange={e => this.universalInput("name", e.target.value)}
        />
        <label>Player position</label>
        <input
          value={position}
          onChange={e => this.universalInput("position", e.target.value)}
        />
        <label>Player Comments</label>
        <input
          value={comments}
          onChange={e => this.universalInput("comments", e.target.value)}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default playerList;
