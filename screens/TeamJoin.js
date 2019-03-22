import React from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Image } from 'react-native-elements';
import QRCode from 'react-native-qrcode';
import Barcode from 'react-native-barcode-builder';




export default class TeamJoin extends React.Component {
    constructor(props) {
        super(props)

        this.socket = props.navigation.state.params.socket;
        this.data = props.navigation.state.params.data;

        console.log(this.data);

        this.state = {
            valueForBarCode: "" + this.data.groupId,
            valueForQRCode: "" + this.data.groupId
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


                <Barcode value={this.state.valueForBarCode} format="CODE128" />
                <QRCode
                    value={this.state.valueForQRCode}
                    //Setting the value of QRCode
                    size={150}
                    //Size of QRCode
                    bgColor="#000"
                    //Backgroun Color of QRCode
                    fgColor="#fff"
                //Front Color of QRCode

                />

                <TouchableOpacity
                    onPress={this.teamReady}
                    title="Team Ready"
                    color="#841584"
                ><Text>OK</Text></TouchableOpacity>

            </View>
        );
    }
}
// <Text>Click OK when your group has scanned the QR-code.</Text>
// <Text>SHOW THIS TO YOUR TEAM TO JOIN YOUR GROUP!</Text>
/*
<View style={styles.border}>
                    <QRCode
                        value={this.state.valueForQRCode}
                        //Setting the value of QRCode
                        size={300}
                        //Size of QRCode
                        bgColor="#F00"
                        //Backgroun Color of QRCode
                        fgColor="#fff"
                    //Front Color of QRCode

                    />
                </View>
*/
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: 150,
    },
    border: {
        borderStyle: 'solid',
        borderWidth: 20,
        borderColor: '#000',
    }
});