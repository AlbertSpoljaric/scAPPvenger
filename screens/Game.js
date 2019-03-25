import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import CameraExample from '../components/CameraExample';


export default class Game extends React.Component {
    constructor(props) {
        super(props)

        this.socket = props.navigation.state.params.socket;
        this.data = props.navigation.state.params.data;
        this.groupSize = props.navigation.state.params.groupSize;

        this.socket.on('increasescore', function(data){
            this.setState({current_clue:data.nextClue})
        }.bind(this))

        this.state = {
            current_clue: this.data.nextClue,
            game_order: this.data.gameorder,
            score: this.data.score,
            groupId: this.data.groupId
        }
    }
    static navigationOptions = {
        header: null
    }

    changeScore = () => {
        if (this.state.score === 4) { // === games.length - 1 
            this.socket.emit('cluecorrect');
            this.props.navigation.navigate('EndScreen')
        } else {
            this.setState({
                score: (this.state.score + 1)
            })
            this.socket.emit('cluecorrect')
        }
    }
    render() {
        return (
            <CameraExample data={this.state} changeScore={this.changeScore} socket={this.socket} />
        );
    }
}