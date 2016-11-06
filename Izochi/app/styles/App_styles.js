import React from 'react';
import { StyleSheet } from 'react-native';
import Fonts from 'react-native-vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 80,
    color: 'grey',
    justifyContent: 'flex-start',
    textAlign: 'center',
    margin: 30,
    fontFamily: 'Verdana'
  },
  form: {
    marginTop: 0,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    height: 100,
    alignItems: 'stretch'
  },
  input: {
    height: 40,
    margin: 5
  },
  input_container: {
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1
  },
  button: {
    color: '#afafaf',
    fontSize: 20
  },
  button_container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  button_circle: {
    height: 80, 
    width: 80, 
    backgroundColor: 'white',
    borderRadius: 40, 
    borderColor: '#FFE046', 
    borderWidth: 3
  },
  button_align: {
    margin: 50,
    alignItems: 'center'
  },
  button_outerCircle: {
    flex: 1, 
    height: 100, 
    width: 100, 
    borderRadius: 50, 
    borderColor: '#FFE046', 
    borderWidth: 2, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});

export default styles;