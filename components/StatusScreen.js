import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import StatusIndicator from './StatusIndicator';

export default class StatusScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusIndicator isUp={this.props.isUp} />
        <Text style={styles.statusText}>Service {this.props.isUp ? 'Up' : 'Down'}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  statusText: {
    fontSize: 30
  }
});

StatusScreen.propTypes = {
  isUp: PropTypes.bool.isRequired
}
