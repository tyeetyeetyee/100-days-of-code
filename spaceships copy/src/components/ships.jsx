import React, { Component } from "react";
import Ship from "./ship";

class Ships extends Component {
  render() {
    return (
      <div>
        {this.props.ships.map((ship) => (
          <Ship
            key={ship.name}
            onIncrement={this.props.onIncrement}
            ship={ship}
          ></Ship>
        ))}
      </div>
    );
  }
}

export default Ships;
