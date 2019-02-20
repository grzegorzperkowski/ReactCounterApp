import React, { Component } from "react";
import EditableLabel from "./editableLabel";

class Counter extends Component {
  render() {
    const disabledIncrementButton = this.props.counter.value < 1;

    return (
      <div style={{ width: "100%" }}>
        {/* <span className={this.getItemNameClasses()} style={{ width: 120 }}>
          {this.props.counter.name}
        </span> */}

        <EditableLabel name={this.props.counter.name} width={120} />

        <span className={this.getCountClasses()} style={{ width: 50 }}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          disabled={disabledIncrementButton}
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getCountClasses() {
    let classes = "badge m-2 badge";
    classes += this.props.counter.value === 0 ? "-warning" : "-primary";
    return classes;
  }

  getItemNameClasses() {
    let classes = "badge m-20 badge";
    classes += this.props.counter.value === 0 ? "-warning" : "-primary";
    return classes;
  }

  formatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }

  getName() {
    return this.props.counter.name;
  }
}

export default Counter;
