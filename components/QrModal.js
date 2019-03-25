import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, StyleSheet} from 'react-native';
import CodeGen from './CodeGen';

export default class QrModal extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          >
          <View style={styles.container}>
            <View>
              <CodeGen bar = {this.props.data.groupId} qr ={this.props.data.groupId}></CodeGen>

              <TouchableHighlight
                style= {styles.button}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
            style={styles.button}
            onPress={() => {
                this.setModalVisible(true);
            }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: '#c12cc1',
      padding: 10,
      margin: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: 150,
    }
  });