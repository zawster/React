import React from "react";
import "/home/muhammad-ahsan/Documents/Cources/Smester-4/ReactApp/react-app/src/App.css";

//  Stateless Functional Component
const NavBar = props => {
  return (
    <div className="App-Nav">
      <nav className="navbar navbar-light ">
        <a href="index.html" className="navbar-brand">
          Total Orders #{" "}
          <span className="badge badge-pill badge-secondary">
            {props.totalCounters}
          </span>
        </a>
      </nav>
    </div>
  );
};
/*
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a href="#" className="navbar-brand">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}
*/
export default NavBar;
