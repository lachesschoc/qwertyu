/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, DeviceEventEmitter} from 'react-native';
import {Accelerometer, Gyroscope, Magnetometer} from 'NativeModules';
import Gyro from './Gyro.js';
import Magnetometer from './Magnetometer.js';
import Accelerometer from './Accelerometer.js';
