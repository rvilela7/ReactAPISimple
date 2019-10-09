import React, { Component } from 'react';

export class Fibbonaci extends Component {
  static displayName = Fibbonaci.name;

  constructor (props) {
    super(props);
    this.state = { currentCount: 1, previousCount: 0};
    this.incrementFib = this.incrementFib.bind(this);
  }

  incrementFib() {
    this.setState({
      previousCount: this.state.currentCount,
      currentCount: this.state.currentCount + this.state.previousCount
    });
  }

  render () {
    return (
      <div>
        <h1>Fibbonaci Hit</h1>

        <p>Fibbonaci clicker.</p>

        <p>Current series: <strong>{this.state.currentCount}</strong></p>

        <button className="btn btn-primary" onClick={this.incrementFib}>Increment</button>
      </div>
    );
  }
}
