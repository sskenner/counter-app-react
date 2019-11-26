// dev tools react components
import React, { Component } from "react";
import Counter from "./counter";

// parent component
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters }); // bc id==key.. this.setState({ counters: counters });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
            // value={counter.value}
            // id={counter.id}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
