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
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10
    },
    countContainer: {
      alignItems: 'center',
      padding: 10
    },
    countText: {
      color: '#FF00FF'
    }
  })
