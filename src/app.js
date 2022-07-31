import { Component } from "react";
import Car from "./car";

class App extends Component {
  state = {
    // object
    cars: [
      {
        name: "Ferrari",
        year: 2020,
        color: "rgba(144, 144, 144, 0)",
      },
      {
        name: "Ford",
        year: 2015,
        color: "rgba(144, 144, 144, 0.0)",
      },
      {
        name: "Matiz",
        year: 2022,
        color: "rgba(144, 144, 144, 0.0)",
      },
    ],
    title: "UzAvtoMotors",
    showCars: false,
  };

  changeTitleHandler = (e) => {
    this.setState({
      title: "UzAvtoMotors",
    });
  };

  toggleCarsHandler = (e) => {
    this.setState({
      showCars: !this.state.showCars,
    });
  };

  inputChangeHandler = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  changeTitleCarsHandler = (name) => {
    this.setState({
      title: name,
    });
  };

  carTitleHandler = (value, idx) => {
    let cars = [...this.state.cars];
    cars[idx].name = value;

    this.setState({
      cars,
    });
  };

  onRGB = (idx) => {
    let cars = [...this.state.cars];
    cars[idx].color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;

    this.setState({
      cars
    });
  };

  onDelete = (idx) => {
    let cars = [...this.state.cars];
    cars.splice(idx, 1);
    this.setState({
      cars,
    });
  };

  render() {
    const appStyle = {
      textAlign: "center",
    };

    let div = null;

    if (this.state.showCars) {
      div = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            idx={index}
            name={car.name}
            year={car.year}
            onCarClick={this.carTitleHandler}
            onChange={() => {
              this.changeTitleCarsHandler(car.name);
            }}
            color={car.color}
            onRGB={(e) => {
              this.onRGB(index);
            }}
            onDelete={(e) => {
              this.onDelete(index);
            }}
          />
        );
      });
    }

    return (
      <div className="App" style={appStyle}>
        <h1>{this.state.title}</h1>
        <input type="text" onChange={this.inputChangeHandler} />
        <br />
        <button onClick={this.toggleCarsHandler}>Click</button>
        <br />
        {div}
      </div>
    );
  }
}

export default App;
