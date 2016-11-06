import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput
} from 'react-native';

import Button from 'react-native-button';
import Form from 'react-native-form';
import styles from './styles/App_styles.js';

const Btn = (props) => {
  return (
    <View style={styles.button_outerCircle}>
      <View style={styles.button_circle}>
        <View style={styles.button_container}>
          <Button style={styles.button}>Go!</Button>
        </View>
      </View>
    </View>
  )
}

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
          <Form style={styles.form}>

            <View style={styles.input_container}>
              <TextInput style={styles.input}
              ref="username" placeholder="name"/>
            </View>
            <View style={styles.input_container}>
              <TextInput style={styles.input}
              ref="email" placeholder="email"/>
            </View>

            <View style={styles.button_align}>
              <Btn />
            </View>

          </Form>
        </View>
      </View>
    );
  }
}