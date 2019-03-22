import React from 'react';
import { Text, View, TouchableOpacity, Alert, Button, StyleSheet } from 'react-native';
import { Camera, Permissions, BarCodeScanner } from 'expo';


export default class BackButton extends React.Component {
  state = {

  };

  render() {

      return (
        <TouchableOpacity
            onPress={this.props.goBack}
            style={styles.button}
        >
            <Text>Back</Text>
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
