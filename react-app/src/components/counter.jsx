import React, { Component } from "react";

class Counter extends Component {
  /*state = {
    value: this.props.value
    //tags: []
  };*/
  styles = {
    fontSize: 13,
    fontWeigth: "bold"
  };
  // constructor(){
  //   super();
  //   this.Increment = this.Increment.bind(this);
  // }
  render() {
    // console.log('props',this.props);
    return (
      <div>
        <span className="badge badge-success badge-lg m-2">
          {this.props.counter.prd}
        </span>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          //onClick={this.Increment}
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          //onClick={this.Decrement}
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter)} // Argument Passing
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <br />

        {/*this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()*/}
      </div>
    );
  }
  /*
   *
   */
  /*
  Increment = () => {
    //console.log("Increment Clicked", this);
    // this.state.count++;   // this doesn't work
    this.setState({ value: this.state.value + 1 });
  };*/
  /*
   *
   */
  /*renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }*/
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    // classes += this.state.value === 0 ? "warning" : "primary";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // const { value: count } = this.state;
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
