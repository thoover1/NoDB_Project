import React, { Component } from "react";
import "./DeleteButton.css";

class DeleteButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { deletePlayerFn } = this.props;
    return (
      <div>
        <button
          className="deleteButton"
          onClick={() => deletePlayerFn(this.props.id)}
        >
          He Gone'
        </button>
      </div>
    );
  }
}

export default DeleteButton;
