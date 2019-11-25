import React, { Component } from "react";

// child component
class Counter extends Component {
  state = {
    value: this.props.value
    // prop vs state:
    // props - includes data that is given to a component; read only
    // state - includes data that is local/private to component
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <ul>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button
            onClick={() => this.handleIncrement()}
            className="btn btn-secondary btn-sm"
          >
            increment
          </button>
          <button
            onClick={this.props.onDelete}
            className="btn btn-danger btn-sm m-2"
          >
            delete
          </button>
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
