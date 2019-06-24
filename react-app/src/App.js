import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 2, prd: "Product#1" },
      { id: 2, value: 0, prd: "Product#2" },
      { id: 3, value: 0, prd: "Product#3" },
      { id: 4, value: 0, prd: "Product#4" },
      { id: 5, value: 0, prd: "Product#5" }
    ]
  };

  // Handling the Increment button when clicked
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    // console.log(this.state.counters[index]);
  };
  // Handling the Decrement button when clicked
  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value !== 0) {
      counters[index].value--;
      this.setState({ counters });
    } else {
      alert("Please first add an Order...:)");
    }
    // console.log(this.state.counters[index]);
  };
  // Handling the Reset button when clicked
  handleReset = () => {
    //console.log("Reset Clicked");
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  // Handling the Delete button when clicked
  handleDelete = counter => {
    //console.log("Handler is called", counterId);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value > 0) {
      const counters = this.state.counters.filter(c => c.id !== counter.id);
      this.setState({ counters });
    } else {
      alert("Please first add an Order...:)");
    }
  };
  render() {
    return (
      <React.Fragment>
        <main className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <NavBar
            totalCounters={this.state.counters.filter(c => c.value > 0).length}
          />
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>

      /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save and then reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
    );
  }
}

export default App;
