import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    couters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  render() {
    return (
      <div>
        {this.state.couters.map(counter => (
          <Counter key={counter.id} />
        ))}
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}

export default Counters;
<div />;
