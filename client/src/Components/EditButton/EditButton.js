import React, { Component } from "react";

class EditButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      position: "",
      comments: ""
    };
  }

  //need to click on edit button that will give//
  //option to edit name, position, and comments//
  clickHandler() {
    this.setState({
      name,
      position,
      comments
    });
  }

  render() {
    return (
      <div>
        <button onClick={clickHandler}>Edit</button>
      </div>
    );
  }
}

export default EditButton;
