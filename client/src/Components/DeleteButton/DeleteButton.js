import React, { Component } from "react";
import axios from "axios";

class DeleteButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      position: "",
      comments: ""
    };
  }

  clickHandler() {
    this.setState({});
  }

  render() {
    return (
      <div>
        <button onClick={clickHandler}>Delete</button>
      </div>
    );
  }
}
export default DeleteButton;
