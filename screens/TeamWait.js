

import React from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Image } from 'react-native-elements';
import QRCode from 'react-native-qrcode';
import Barcode from 'react-native-barcode-builder';



export default class TeamWait extends React.Component {
    constructor(props) {
        super(props)

        this.socket = props.navigation.state.params.socket;
        this.data = props.navigation.state.params.data;



        this.state = {
            valueForQRCode: ''+this.data.groupId,
        }
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
        return (
            <View style={styles.container}>
                <Text>SHOW THIS TO YOUR TEAM TO JOIN YOUR GROUP!</Text>

                <Barcode value={this.state.valueForQRCode} format="CODE128" />

                <Text>WAITING FOR TEAM... HOLD TIGHT!</Text>

            </View>
        );
    }
}
/*
<QRCode
                    value={this.state.valueForQRCode}
                    //Setting the value of QRCode
                    size={300}
                    //Size of QRCode
                    bgColor="#F00"
                    //Backgroun Color of QRCode
                    fgColor="#000"
                //Front Color of QRCode
                />
*/
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