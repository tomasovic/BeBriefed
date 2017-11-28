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
    this._fetchServiceStatus = this._fetchServiceStatus.bind(this)
  }

  componentDidMount() {
    setInterval(this._fetchServiceStatus, 5000)
  }

  _fetchServiceStatus() {
    fetch('http://10.0.3.2:8080/status')
    .then(response => response.json())
    .then (responseJson => {
      const newState = this.state.services.map (s => 
        // making a new object to put in services array
        Object.assign(s, {
          // true or false according to API. API is returning "up" or "down"
        isUp:responseJson[s.key].status === 'up', 
        lastUpTime: new Date(responseJson[s.key].lastUpTime),
      }))
      this.setState({ services: newState})
    })    
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
