import React from "react";

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likesCount: 0,
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  };

  increment() {
    this.setState({ likesCount: this.state.likesCount + 1 })
  }

  decrement() {
    this.setState({ likesCount: this.state.likesCount - 1 })
  }

  render() {
    return (
      <>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <p>Likes count: {this.state.likesCount}</p>
      </>
    )
  }
}

export default ClassCounter;
