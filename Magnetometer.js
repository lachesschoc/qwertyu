/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, DeviceEventEmitter} from 'react-native';
import {Accelerometer, Gyroscope, Magnetometer} from 'NativeModules';

export default class Magnetometer extends Component {
  constructor(props){
    super(props);
    this.state = {
      x: 0,
      y: 0,
      z: 0
    }
  }
  componentDidMount() {
    Magnetometer.startMagnetometerUpdateInterval(0.1); // in seconds
    DeviceEventEmitter.addListener('Magnetometer', (data) => {
      this.setState({
        x: data.magnetometer.x,
        y: data.magnetometer.y,
        z: data.magnetometer.z,
      });
    });
    Magnetometer.startMagnetometerUpdates(); // you'll start getting Magnetometer events above
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          MagnetometerX: {this.state.x}
        </Text>
        <Text style={styles.welcome}>
          MagnetometerY: {this.state.y}
        </Text>
        <Text style={styles.welcome}>
          MagnetometerZ: {this.state.z}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
