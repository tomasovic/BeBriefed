import React, { Component } from 'react';
import MainContainer from './components/MainContainer';

export default class App extends Component<{}> {
  constructor(props) {
    super(props)

    this.state = {
      isUp: false,
      lastUpTime: new Date((new Date()).getTime() - 5 * 60 * 1000)
    }
  }
  render() {
    return (
      <MainContainer isUp={this.state.isUp} lastUpTime={this.state.lastUpTime} />
    );
  }
}
