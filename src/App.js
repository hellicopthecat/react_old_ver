import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    this.setState({count: this.state.count + 1});
  };
  minus = () => {
    this.setState((current) => ({count: current.count - 1}));
  };
  componentDidMount() {
    console.log("component render");
  }
  componentDidUpdate() {
    console.log("i just update");
  }
  componentWillUnmount() {
    console.log("GOOD BYE :(");
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>The Number is {this.state.count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}

export default App;
