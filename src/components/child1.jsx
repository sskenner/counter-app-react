// how to pass data from parent components to child components and (vice versa) from child components to parent components using state and props.
// // https://medium.com/@learncodefromjohn/passing-data-from-parent-to-child-components-and-vice-versa-with-react-406bb4521512

import React, { Component } from "react";

export default class Child1 extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Examples#Example_5:_Event_Propagation
    // https://reactjs.org/docs/events.html
    e.preventDefault(); // https://www.robinwieruch.de/react-preventdefault
    e.stopPropagation();
    this.props.mutateState(randomString(5));
  }

  render() {
    return (
      <div className="child1" onClick={this.handleClick}>
        Child 1 value is: <span>{this.props.value}</span>
      </div>
    );
  }
}

function randomString(length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}
