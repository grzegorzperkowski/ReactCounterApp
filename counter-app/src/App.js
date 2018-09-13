import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

const things = require("./things");

class App extends Component {
  state = {
    Things: [...things],
    counters: this.getInitCounters()
  };

  getInitCounters() {
    const id = 1;
    return [
      { id, value: 1, name: things[id] },
      { id: id + 1, value: 1, name: things[id + 1] }
    ];
  }

  componentDidMount() {
    const counters = this.state.counters.map(e => ({
      ...e,
      name: things[e.id]
    }));
    this.setState({ counters });
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.getInitCounters();
    this.setState({ counters });
  };

  handleAdd = () => {
    const id = Math.max(this.state.counters.length) + 1;
    const counters = [
      ...this.state.counters,
      { id, value: 1, name: this.state.Things[id] }
    ];
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main>
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onAdd={this.handleAdd}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
