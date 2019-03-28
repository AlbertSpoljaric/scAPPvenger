import React from 'react';
import { StyleSheet, Text, View, Dimensions, Alert} from 'react-native';
import CameraExample from '../components/CameraExample';


export default class Game extends React.Component {
    constructor(props) {
        super(props)
        
        this.socket = props.navigation.state.params.socket;
        this.data = props.navigation.state.params.data;
        this.groupSize = props.navigation.state.params.groupSize;

        this.socket.on('increasescore', function(data){
            Alert.alert('Your team has found a correct QR code!');
            this.setState({score:data.score})
            if(data.score==5){
                this.props.navigation.navigate('EndScreen');
            }
            this.setState({current_clue:data.nextClue})
        }.bind(this))

        this.socket.on('colorgameinit', function(data){
            this.props.navigation.navigate('ButtonGame', {socket: this.socket, data: data})
        }.bind(this))

        this.socket.on('rabbitgamestart', function(data){
            this.props.navigation.navigate('CatchTheRabbit', {socket: this.socket, data: data})
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
        if (this.state.score === 0) { // === games.length - 1 
            this.socket.emit('rabbitgamestart') //Rabbit game here
         }
         else if(this.state.score === 1){
            this.socket.emit('colorgameinit')
         } else {
            Alert.alert('ERROR: Score was not 0 or 1... No games initialized.')
            //this.socket.emit('cluecorrect')
        }
    }
    render() {
        return (
            <CameraExample data={this.state} changeScore={this.changeScore} socket={this.socket} />
        );
    }
}