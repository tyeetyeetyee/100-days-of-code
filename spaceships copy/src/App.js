import React, { Component } from "react";
import "./App.css";
import Count from "./components/count";
import Ships from "./components/ships";

class App extends Component {
  state = {
    ships: [
      { name: "The Singapore Snapper", value: 0 },
      { name: "The Hong Kong Jong", value: 0 },
      { name: "The Shanghai Buckeye", value: 0 },
    ],
  };

  handleIncrement = (ship) => {
    const ships = [...this.state.ships];
    const index = ships.indexOf(ship);
    ships[index] = { ...ship };
    ships[index].value++;
    this.setState({ ships });
  };

  render() {
    return (
      <React.Fragment>
        <center>
          <Count totalShips={this.returnSum()} />
          <main className="container">
            <Ships
              ships={this.state.ships}
              onIncrement={this.handleIncrement}
            />
          </main>
        </center>
      </React.Fragment>
    );
  }

  returnSum() {
    // let spaceships_array = this.state.ships.filter((c) => c.value > 0);
    let spaceships_array = this.state.ships.map((c) => c.value);
    var sum = spaceships_array.reduce(function (a, b) {
      return a + b;
    }, 0);
    return sum;
  }
}

export default App;
