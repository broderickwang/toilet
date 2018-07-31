import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class weatherPage extends Component {
  constructor() {
    super();
  }
  render(){
    return (
      <View><Text style={styles.text}>Weather Page</Text></View>
    )
  }
}

var styles = StyleSheet.create({
  text:{
    fontSize:60,
    color:"red"
  }
})

module.exports = weatherPage;
