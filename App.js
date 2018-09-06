/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import FetchLocation from './components/FetchLocation';
import UsersMap from './components/UsersMap';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const Props = {};
export default class App extends React.Component {
  getUserLocationHandler = () =>{
    console.log('Debugging with React Native');
    navigator.geolocation.getCurrentPosition(position =>{
      console.log(position);
    }, err =>{
      console.log(err);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Spokes</Text>
        <Text style={styles.instructions}>Let us help you get there safely!</Text>
        {/* <Text style={styles.instructions}>{instructions}</Text> */}
        < FetchLocation onGetLocation={this.getUserLocationHandler} />
        <UsersMap />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF272',
  },
  welcome: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: 'magenta',
  },
  instructions: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    marginBottom: 20,
  },
});
