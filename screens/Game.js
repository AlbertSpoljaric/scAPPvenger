import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import CameraExample from '../components/CameraExample';


export default class Game extends React.Component {
    static navigationOptions = {
        header: null
    }
    state = {
        current_clue: ['This is the first mock clue!', 'This is the second mock clue!', 'This is the third mock clue!', 'This is the fourth mock clue!', 'This is the fifth mock clue!'],
        game_order: [1, 2, 3, 4, 5],
        score: 0
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