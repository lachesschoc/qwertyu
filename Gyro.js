/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, DeviceEventEmitter} from 'react-native';
import {Accelerometer, Gyroscope, Magnetometer} from 'NativeModules';

export default class Gyro extends Component {
  constructor(props){
    super(props);
    this.state = {
      x: 0,
      y: 0,
      z: 0
    }
  }

  componentDidMount() {
    Gyroscope.startGyroscopeUpdateInterval(0.1);
    DeviceEventEmitter.addListener('Gyroscope', (data) => {
      this.setState({
        x: data.Gyroscope.x,
        y: data.Gyroscope.y,
        z: data.Gyroscope.z,
      });
    });
    Gyroscope.startGyroscope(100); // you'll start getting Gyroscope events above
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          GyroX: {this.state.x}
        </Text>
        <Text style={styles.welcome}>
          GyroY: {this.state.y}
        </Text>
        <Text style={styles.welcome}>
          GyroZ: {this.state.z}
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
