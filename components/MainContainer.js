import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import StatusScreen from './StatusScreen';
import PropTypes from 'prop-types';
import TabBarContainer from './TabBarContainer'
import LinearGradient from 'react-native-linear-gradient'

export default class MainContainer extends Component {
  _renderTab(selected, services) {
    // find() - the first element returns true, find stops
    const thisService = services.find(s => s.key === selected)
    return (
      <StatusScreen
        isUp={thisService.isUp}
        lastUpTime={thisService.lastUpTime} />
    )
  }

  render() {
    return ( 
      <LinearGradient colors={['#313d43', '#4a787a']} style={styles.container}>
        {/* <StatusScreen isUp={this.props.isUp} lastUpTime={this.props.lastUpTime} /> */}
        {this._renderTab(this.props.selectedService, this.props.services)}
        <TabBarContainer onTabChange={this.props.onServiceChange}
        selectedService = {this.props.selectedService}
         />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

MainContainer.propTypes = {
  // the old way
  // isUp: PropTypes.bool.isRequired,
  // lastUpTime: PropTypes.instanceOf(Date)

  selectedService: PropTypes.string.isRequired,
  services: PropTypes.array.isRequired,
  onServiceChange: PropTypes.func.isRequired
}
