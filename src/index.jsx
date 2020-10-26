import React, { Component } from "react";
import ReactDOM from "react-dom";

import "../assets/stylesheets/application.scss";

// STEP ONE
// // name is props -> property
// const Hello = ({ name }) => {
//   return (
//     <div>
//       Hello,
//       {name}
//     </div>
//   );
// };

// STEP TWO: New formalized component
class Hello extends Component {
  constructor(props) {
    super(props);

    // Information that may change during the life-time
    // of a component
    // -> have to 'this' for a class component
    this.state = {
      clicked: false,
    };
  }

  handleClick = () => {
    // Change the state
    // console.log("clicked");
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    // Build and return HTML here
    // When you are using a cla
    return (
      <div
        className={this.state.clicked ? "clicked" : null}
        onClick={this.handleClick}
      >
        Hello {this.props.name}
      </div>
    );
  }
}

const root = document.getElementById("root");
if (root) {
  ReactDOM.render(
    <Hello name="Peter" />, // Hello is the function defined above
    root
  ); // root is the HTML element -by ID - we bind the function to root
  // HTML is injected in the DIV id=root
}
