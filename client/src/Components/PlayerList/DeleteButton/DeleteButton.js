import React, { Component } from "react";

class DeleteButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { deletePlayerFn } = this.props;
    return (
      <div>
        <button onClick={() => deletePlayerFn(this.props.id)}>Delete</button>
      </div>
    );
  }
}

export default DeleteButton;
