import React, { Component } from 'react';
import MainContainer from './components/MainContainer';

export default class App extends Component<{}> {
  constructor(props) {
    super(props)

    this.state = {
      // this will be replaced with collection
      // isUp: false,
      // lastUpTime: new Date((new Date()).getTime() - 5 * 60 * 1000)

      // current selected service
      selectedService: 'web',
      services: [
        { key: 'web', isUp: true, lastUpTime: null},
        { key: 'db', isUp: false, lastUpTime:new Date((new Date()).getTime() - 5 * 60 * 1000)},
        { key: 'mail', isUp: true, lastUpTime: null},
      ]
    }
    this._switchService = this._switchService.bind(this)
  }

  _switchService(nextService) {
    this.setState({selectedService: nextService})
  }

  render() {
    return (
      // this is the old way replaced
      // <MainContainer isUp={this.state.isUp} lastUpTime={this.state.lastUpTime} />

      <MainContainer
          selectedService = {this.state.selectedService}
          services = {this.state.services}
          onServiceChange = {this._switchService}
       />
    );
  }
}
