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

  handleRename = (oldName, newName, id) => {
    console.log(oldName, newName, id);
    const counters = this.state.counters.map(e => {
      if (e.id === id) return { ...e, name: newName };

      return { ...e };
    });

    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.getInitCounters();
    this.setState({ counters });
  };

  handleAdd = () => {
    do {
      const newIndex = Math.floor(this.state.Things.length * Math.random());

      const newName = this.state.Things[newIndex];

      if (typeof this.state.counters.find(x => x.id === newIndex) === undefined)
        continue;

      const newCounters = [...this.state.counters];
      newCounters.push({ id: newIndex, value: 1, name: newName });

      this.setState({ counters: newCounters });
      break;
    } while (true);
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
            onRename={this.handleRename}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
