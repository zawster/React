import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    // Object Destructuring
    const {
      onReset,
      onDelete,
      onIncrement,
      onDecrement,
      counters
    } = this.props;
    return (
      <div className="App">
        <button
          // onClick={this.handleReset}
          // onClick={this.props.onReset}
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset Orders
        </button>
        {//this.props.counters.map(counter => (
        counters.map(counter => (
          <Counter
            key={counter.id}
            id={counter.id}
            // onDelete={this.props.onDelete}
            onDelete={onDelete}
            // onIncrement={this.props.onIncrement}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            value={counter.value}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
