import React from 'react';
import { Text, View, TouchableOpacity, Alert, Dimensions, Image } from 'react-native';
import { FaceDetector, Camera, Permissions, BarCodeScanner } from 'expo';


//import { RNCamera } from 'react-native-camera';

export default class CatchTheRabbit extends React.Component {
    constructor(props) {
        super(props)
        /*

        REPLACE THE BELOW CODE WITH A NEW this.socket.on('') function, to redirect the players when game ends.

        this.socket = props.socket; // changed

        this.socket.on('groupjoin', function (data) {
            if (data.error) {
                Alert.alert(data.error)
            } else if (data.groupname) {
                props.teamWait(data); // changed
                this.setState({
                    hasCameraPermission: null,
                    type: Camera.Constants.Type.back,
                    barcodeScanning: false,
                })
            }
        }.bind(this))
        */
        this.state = {
            hasCameraPermission: null,
            type: Camera.Constants.Type.back,
            barcodeScanning: true,
            faces: [{ bounds: { origin: { x: 0, y: 0 }, size: { width: 0, height: 0 } } }],
            opacity: 1,
            faceDetecting: true
        };
    }


    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    toggleBarcodeScanning = () => this.setState({ barcodeScanning: !this.state.barcodeScanning });

    onFacesDetected = (faces) => {
        if (faces.faces.length > 0) {

            // add this.socket.emit('') here!
            console.log(faces.faces)
            this.setState({
                opacity: 1,
                faces: faces.faces.slice(0)
            });
        }
        else {
            this.setState({ 
                opacity: 1,
                faces: [{ bounds: { origin: { x: 0, y: 0 }, size: { width: 0, height: 0 } } }]
             });
        }
        

    };

    renderMoreOptions = () =>
        (
            <View style={styles.options}>
                <View style={styles.detectors}>
                    <TouchableOpacity onPress={this.toggleBarcodeScanning}>
                        <MaterialCommunityIcons name="barcode-scan" size={32} color={this.state.barcodeScanning ? "white" : "#858585"} />
                    </TouchableOpacity>
                </View>
            </View>
        );


    render() {
        // qr-code button if not join camera
        let infoText = "Catch the Rabbit!";
        let rabbits = this.state.faces.map((data, index) => {
            
            <Image
                style={{
                    opacity: 1,
                    height: data.bounds.size.height,
                    width: data.bounds.size.width,
                    left: data.bounds.origin.x,
                    top: data.bounds.origin.y,
                    resizeMode: 'stretch',
                    position: 'absolute'
                }}
                key={index}
                source={require('../assets/rabbit.png')}
            />
        })
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <View style={{ height: 150, paddingTop: 50, paddingLeft: 20, paddingRight: 20, paddingBottom: 20, backgroundColor: '#FFDE99' }}><Text style={{ color: 'black', fontSize: 20 }} numberOfLines={3}>{infoText}</Text>
                    </View>
                    <Camera
                        style={{ flex: 1 }}
                        type={this.state.type}
                        ref={ref => {
                            this.camera = ref;
                        }}
                        onCameraReady={this.collectPictureSizes}
                        type={this.state.type}
                        flashMode={this.state.flash}
                        autoFocus={this.state.autoFocus}
                        zoom={this.state.zoom}
                        whiteBalance={this.state.whiteBalance}
                        ratio={this.state.ratio}
                        pictureSize={this.state.pictureSize}
                        onMountError={this.handleMountError}
                        onFacesDetected={this.state.faceDetecting ? this.onFacesDetected : undefined}

                        faceDetectorSettings={{

                            mode: FaceDetector.Constants.Mode.fast,

                            detectLandmarks: FaceDetector.Constants.Mode.none,

                            runClassifications: FaceDetector.Constants.Mode.none,

                        }}
                        onFaceDetectionError={this.onFaceDetectionError}
                        barCodeScannerSettings={{
                            barCodeTypes: [
                                BarCodeScanner.Constants.BarCodeType.qr,
                                BarCodeScanner.Constants.BarCodeType.code128
                            ],
                        }}
                        onBarCodeScanned={this.state.barcodeScanning ? this.onBarCodeScanned : undefined}
                    >

                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                flexDirection: 'row',
                            }}>
                            <TouchableOpacity
                                style={{
                                    flex: 0.1,
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                }}
                                onPress={() => {
                                    if (this.state.opacity === 1) {
                                        Alert.alert("You catched the rabbit!!")
                                    }

                                    //this.setState({ barcodeScanning: true });
                                }}>
                                <Text
                                    style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                                    {' '}CATCH!{' '}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        {rabbits}
                    </Camera>
                </View>
            );
        }
    }
}

