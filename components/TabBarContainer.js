import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Tabs from 'react-native-tabs'
import  TabBarItem from './TabBarItem'
import PropTypes from 'prop-types'

const TabBarContainer = (props) => (
  // iconStyle - needs to be defined, without it android will cut off icons
  // onSelect - this is the property of the tab. Comp is the tab which is tapped.
  // onTabChange - its a function from App.js propagated here
  /* switchService(nextService) {
    this.setState({selectedService: nextService})
  } */
  <Tabs    
    iconStyle={{ height: 72 }} 
    style={styles.tabContainer}
    onSelect={comp => {
      props.onTabChange(comp.props.name)
    }}
    >
    <TabBarItem name="web" label="Web Server" icon="server" />
    <TabBarItem name="db" label="DB Server" icon="database" />
    <TabBarItem name="mail" label="Mail Server" icon="envelope-o" />
  </Tabs>
);

export default TabBarContainer;

TabBarContainer.PropTypes = {
  onTabChange: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: '#343434',
    borderTopWidth: 1,
    borderTopColor: '#262626',
    height: 90
  },
});
