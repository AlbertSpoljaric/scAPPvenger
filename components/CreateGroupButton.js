import React from 'react';
import { Text, View, TouchableOpacity, Alert, Button } from 'react-native';
import { Camera, Permissions, BarCodeScanner } from 'expo';


export default class CreateGroupButton extends React.Component {
  state = {

  };

  render() {

      return (
        <Button
        onPress={this.props.createGroup}
        title="Create Group"
        color="#841584"
        />
        
      )
    }

}
