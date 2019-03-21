import React from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, Alert } from 'react-native';
import QRCode from 'react-native-qrcode';


export default class TeamJoin extends React.Component {
    constructor(props) {
        super(props)

        this.socket = props.navigation.state.params.socket;
        this.data = props.navigation.state.params.data;

        this.state = {
            valueForQRCode: this.data.groupId,
            groupSize: this.data.playerCount,
            notEnoughPlayers: true
        }

        this.socket.on('groupjoin', function(data){
            this.setState({groupSize:data.playerCount});
            console.log();
            if (this.state.groupSize>2){
                this.setState({notEnoughPlayers:false})
            }
        }.bind(this))
    }
    static navigationOptions = {
        header: null
    }

    teamReady = () => {
        this.props.navigation.navigate('Game', { socket: this.socket, data: this.data })
    }

    /* {id:1, imgUri: require(`../images/1.png`)}
    search for the right imgUri with the id.  */

    render() {
    let okBtn = this.state.notEnoughPlayers === true ? <TouchableOpacity disabled={true} onPress={this.teamReady} title="Team Ready" ><Text>Waiting for team members!</Text></TouchableOpacity> : <TouchableOpacity onPress={this.teamReady} title="Team Ready" ><Text>OK, ready for the game!</Text></TouchableOpacity>;
         
        return (
            <View style={styles.container}>
                <View style={styles.infoText}>
                    <Text>SHOW THIS TO YOUR TEAM TO JOIN YOUR GROUP!</Text>
                    <Text>You need at least 3 people in your team:</Text>
                    <Text>Group size: {this.state.groupSize}</Text>
                </View>
                <QRCode 
                    value={this.state.valueForQRCode}
                    //Setting the value of QRCode
                    size={300}
                    //Size of QRCode
                    bgColor="#000"
                    //Backgroun Color of QRCode
                    fgColor="#fff"
                    //Front Color of QRCode
                />

                <Text style={styles.infoText}>Click OK when your group has scanned the QR-code.</Text>
                {okBtn}

            </View>
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
    infoText:{
        margin: 20,
        padding: 10
    }
});