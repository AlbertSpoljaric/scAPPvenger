import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import CameraExample from '../components/CameraExample';

export default class JoinGroup extends React.Component {
    constructor(props) {
        super(props)
        this.socket = props.navigation.state.params.socket;
        this.join = props.navigation.state.params.join;
        this.state = {
        }
    }
    static navigationOptions = {
        header: null
    }
    goBack=()=>{
        this.props.navigation.goBack();
    }
    
    teamWait=(data)=>{
        this.props.navigation.navigate('TeamWait', { socket: this.socket, data: data })
    }

    render() {
        return (
            <CameraExample goBack={this.goBack} join={this.join} socket={this.socket} teamWait={this.teamWait}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      height: 150
    },
  });