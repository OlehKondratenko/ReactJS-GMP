import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialValue || 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement("p", null, `Count: ${this.state.count}`),
      React.createElement("button", { onClick: this.decrement }, "Decrement"),
      React.createElement("button", { onClick: this.increment }, "Increment")
    );
  }
}
