import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import AppNavigator from './navigation/MainNavigator';


export default class App extends React.Component {
  state = {
  }
  render() {
    return (
      <AppNavigator />
    );
  }
}