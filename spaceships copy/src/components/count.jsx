import React, { Component } from "react";

class Count extends Component {
  // state = {  }
  render() {
    return (
      <div>
        <h1>My Armada</h1>
        <div>Total Recruits {this.props.totalShips}</div>
        <br />
        <div>{this.displayMessage()}</div>
      </div>
    );
  }

  displayMessage() {
    return this.props.totalShips > 20
      ? "We are ready to go to war!"
      : "We must recruit!";
  }
}

export default Count;
