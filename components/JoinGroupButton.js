import React from 'react';
import { Text, View, TouchableOpacity, Alert, Button } from 'react-native';
import { Camera, Permissions, BarCodeScanner } from 'expo';


export default class JoinGroupButton extends React.Component {
  state = {

  };

  render() {

      return (
        <Button
        onPress={this.props.joinGroup}
        title="Join Group"
        color="#841584"
        />
        
      )
    }

}
