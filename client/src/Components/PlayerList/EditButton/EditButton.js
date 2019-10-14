import React, { Component } from "react";
import Modal from "react-modal";
import "./EditButton.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

function editPlayerModalForm(
  players_id,
  player_name,
  player_position,
  player_comments
) {
  console.log("editPlayerModalForm called");
  console.log(players_id);
  console.log(player_name);
  console.log(player_position);
  console.log(player_comments);
}

class EditButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    this.subtitle.style.color = "green";
  }

  closeModal() {
    console.log("Modal form closed");
    this.setState({ modalIsOpen: false });
  }

  // editPlayerFn() {
  //   console.log("we're trying hereeeeee");
  // }

  render() {
    // const { editPlayerFn } = this.props;
    return (
      <div>
        <button
          className="Modal"
          // this onClick works!
          // onClick={() => editPlayerModalForm(this.props.id, this.props.name, this.props.position, this.props.comments)}
          onClick={this.openModal}
        >
          Edit Player
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {/*<h2 ref={subtitle => this.subtitle = subtitle}>Submit here?</h2>*/}
          {/*<button onClick={this.closeModal}>close</button>*/}
          <div>Edit Player</div>
          <form>
            <input
              id={"pid_" + this.props.id}
              type="text"
              name="pid"
              placeholder={this.props.id}
              hidden
            />
            <input
              id={"pname_id" + this.props.id}
              type="text"
              name="pname"
              placeholder={this.props.name}
            />
            <input
              id={"ppos_id_" + this.props.id}
              type="text"
              name="ppos"
              placeholder={this.props.position}
            />
            <input
              id={"pcom_id_" + this.props.id}
              type="text"
              name="pcom"
              placeholder={this.props.comments}
            />
          </form>
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Save edit here?</h2>
          <button onClick={this.closeModal}>Save</button>
        </Modal>
      </div>
    );
  }
}

export default EditButton;
