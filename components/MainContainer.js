import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import StatusScreen from './StatusScreen';
import PropTypes from 'prop-types';
import TabBarContainer from './TabBarContainer'

export default class MainContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusScreen isUp={this.props.isUp} lastUpTime={this.props.lastUpTime}/>
        <TabBarContainer />
      </View>
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
  isUp: PropTypes.bool.isRequired,
  lastUpTime: PropTypes.instanceOf(Date)
}
