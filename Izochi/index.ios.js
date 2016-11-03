/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import Form from 'react-native-form';

export default class Izochi extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <Text style={styles.header}>
            Izochi
          </Text>
        </View>
        <View style={{flex: 2, justifyContent: 'flex-start'}}>
          <Form 
          style={styles.form}
          >
          <TextInput 
          style={styles.input}
          ref="name" name="username" placeholder="name"/>
          <TextInput 
          style={styles.input}
          ref="name" name="email" placeholder="email"/>
          </Form>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 80,
    justifyContent: 'flex-start',
    textAlign: 'center',
    margin: 30,
  },
  form: {
    margin: 10,
    height: 100,
    borderColor: 'red',
    borderWidth: 1
  },
  input: {
    height: 40,
    margin: 5,
    borderColor: 'gray',
    borderWidth: 1
  }
});

AppRegistry.registerComponent('Izochi', () => Izochi);
