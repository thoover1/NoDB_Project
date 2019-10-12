import React, { Component } from "react";

class playerAdd extends Component {
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
          console.log("hit");
          e.preventDefault();
          this.props.postPlayer(name, position, comments);
          this.setState({ name: "", position: "", comments: "" });
        }}
      >
        <label>Player Name</label>
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

export default playerAdd;
