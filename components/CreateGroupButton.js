import React from 'react';
import { Text, View, TouchableOpacity, Alert, Button, StyleSheet } from 'react-native';
import { Camera, Permissions, BarCodeScanner } from 'expo';


export default class CreateGroupButton extends React.Component {
  state = {

  };

  render() {

      return (
        <TouchableOpacity
        onPress={this.props.createGroup}
        style={styles.button}
        >
          <Text>Create a Group</Text>
        </TouchableOpacity>
        
      )
    }

}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#c12cc1',
    padding: 10,
    margin: 10
  }
})
