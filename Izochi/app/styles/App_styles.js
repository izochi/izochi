import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 80,
    color: 'grey',
    justifyContent: 'flex-start',
    textAlign: 'center',
    margin: 30
  },
  form: {
    marginTop: 0,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    height: 100,
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
    color: 'grey',
    fontSize: 20
  },
  button_container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  button_circle: {
    flex: 1, 
    height: 100, 
    width: 100, 
    backgroundColor: 'white',
    borderRadius: 50, 
    borderColor: 'grey', 
    borderWidth: 5
  },
  button_align: {
    margin: 50, 
    alignItems: 'center'
  }
});

export default styles;