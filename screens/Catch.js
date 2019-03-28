import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import CameraExample from '../components/CameraExample';
import CatchTheRabbit from './CatchTheRabbit';


export default class Catch extends React.Component {
    constructor(props) {
        super(props)
        this.socket = props.navigation.state.params.socket;
        this.data = props.navigation.state.params.data;
        this.state = {
        }
    }
    static navigationOptions = {
        header: null
    }

    
    render() {
        return (
            <CatchTheRabbit  data={this.data} socket={this.socket} />
        );
    }
}
