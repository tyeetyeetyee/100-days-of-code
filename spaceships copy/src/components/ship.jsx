import React, { Component } from "react";

class Ship extends Component {
  // state = {
  //   value: this.props.value,
  // };

  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <span>Ship Recruits {this.formatCount()}</span>
        <br />
        <br />
        <button onClick={() => this.props.onIncrement(this.props.ship)}>
          Add Recruit to this Ship
        </button>
      </div>
    );
  }

  formatCount() {
    const { value: ship } = this.props.ship;
    return ship;
  }
}

export default Ship;
