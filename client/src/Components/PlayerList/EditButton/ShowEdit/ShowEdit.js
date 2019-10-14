import React, { Component } from "react";
// import axios from 'axios';

class ShowEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: props.comments
    };
    this.updatePost = this.updatePost.bind(this);
  }

  // updateComments(value) {
  //     this.setState({ comments: value });
  //   }

  putPlayer() {
    axios
      .put(`/api/players/${id}`, { name, position, comments })
      .then(results => {
        this.setState({ posts: results.data });
      });
  }

  render() {
    return <form></form>;
  }
}

export default ShowEdit;
