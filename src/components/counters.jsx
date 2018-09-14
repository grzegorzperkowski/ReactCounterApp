import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const {
      onReset,
      onDelete,
      onAdd,
      onIncrement,
      onDecrement,
      counters
    } = this.props;
    return (
      <React.Fragment>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <button onClick={onAdd} className="btn-primary btn-sm m-5">
          Add new
        </button>
        <div className="card">
          {counters.map(counter => (
            <Counter
              key={counter.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              counter={counter}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;
