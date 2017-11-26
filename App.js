import React, { Component } from 'react';
import MainContainer from './components/MainContainer';

const isUp = true;

export default class App extends Component<{}> {
  render() {
    return (
      <MainContainer isUp={isUp} />
    );
  }
}
