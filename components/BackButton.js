import React from 'react';
import { Text, View, TouchableOpacity, Alert, Button } from 'react-native';
import { Camera, Permissions, BarCodeScanner } from 'expo';


export default class BackButton extends React.Component {
  state = {

  };

  goBack(){
      this.props.goBack();
  }


  render() {

      return (
        <Button
        onPress={this.props.goBack}
        title="Back"
        color="#841584"
        />
        
      )
    }

}
