import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import CameraExample from '../components/CameraExample';


export default class Game extends React.Component {
    constructor(props) {
        super(props)

        this.socket = props.navigation.state.params.socket;
        this.data = props.navigation.state.params.data;
        this.groupSize = props.navigation.state.params.groupSize;

        this.state = {
            current_clue: ['This is the first mock clue!', 'This is the second mock clue!', 'This is the third mock clue!', 'This is the fourth mock clue!', 'This is the fifth mock clue!'],
            game_order: this.data.gameorder,
            score: this.data.score,
        }
    }
    static navigationOptions = {
        header: null
    }

    changeScore = () => {
        if (this.state.score === 4) { // === games.length - 1 
            this.props.navigation.navigate('EndScreen')
        } else {
            this.setState({
                score: (this.state.score + 1)
            })
        }
    }
    render() {
        return (
            <CameraExample data={this.state} changeScore={this.changeScore} socket={this.socket} />
        );
    }
}