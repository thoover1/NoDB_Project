import React, { Component } from "react";

class EditButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };

    this.showEdit = this.showEdit.bind(this);
  }

  // This puts the post into EDIT mode when the EDIT button is clicked from the drop-down
  showEdit() {
    this.setState({ editing: true, showMasterMenu: false });
  }

  render() {
    const { editing, showMasterMenu } = this.state;
    const { editPlayerFn } = this.props;
    return (
      <div>
        <button
          onClick={() =>
            editPlayerFn(
              this.props.id,
              this.props.name,
              this.props.position,
              this.props.comments
            )
          }
        >
          Edit
        </button>
      </div>
    );
  }
}

export default EditButton;
