import React from 'react';
import { Text, View, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { Camera, Permissions, BarCodeScanner } from 'expo';
import BackButton from '../components/BackButton';

export default class CameraExample extends React.Component {
  constructor(props) {
    super(props)

    this.socket = this.props.socket;

    this.socket.on('groupjoin', function (data) {
      if (data.error) {
        Alert.alert(data.error)
      } else if (data.groupname) {
        this.props.teamWait(data);

      }
    }.bind(this))

    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      barcodeScanning: false,
    };
  }


  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  toggleBarcodeScanning = () => this.setState({ barcodeScanning: !this.state.barcodeScanning });

  onBarCodeScanned = code => {
    if (this.props.join) {
      this.setState(
        { barcodeScanning: !this.state.barcodeScanning },
      );
      let joinThis = code.data;
      let data = {
        groupId: joinThis
      }
      this.socket.emit('newuser', data);
    }
    else {
      this.setState(
        { barcodeScanning: !this.state.barcodeScanning },
      );
      if (code.data == this.props.data.game_order[this.props.data.score]) {
        Alert.alert(`Congratulations! You have found the correct QR-code!`)
        this.props.changeScore();
      } else {
        Alert.alert(`Wrong QR-code! Continue searching!`)
      }
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
    let infoText = this.props.join ? "Scan QR-code to join group!" : this.props.data.current_clue[this.props.data.score];
    let backBtn = this.props.join ? <BackButton goBack={this.props.goBack} /> : null;
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
            onFaceDetectionError={this.onFaceDetectionError}
            barCodeScannerSettings={{
              barCodeTypes: [
                BarCodeScanner.Constants.BarCodeType.qr,
                BarCodeScanner.Constants.BarCodeType.pdf417,
                BarCodeScanner.Constants.BarCodeType.ean13,
                BarCodeScanner.Constants.BarCodeType.ean8,
                BarCodeScanner.Constants.BarCodeType.code128,
              ],
            }}
            onBarCodeScanned={this.state.barcodeScanning ? this.onBarCodeScanned : undefined}>
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
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>
            </View>
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
                  this.setState({ barcodeScanning: !this.state.barcodeScanning });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}SCAN{' '}
                </Text>
              </TouchableOpacity>
            </View>
            {backBtn}
          </Camera>
        </View>
      );
    }
  }
}

/* Remove flip functionality */