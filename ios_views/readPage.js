import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class readPage extends Component {
  constructor() {
    super();
  }

  render(){
    return (
      <View><Text style={styles.text}>Read Page</Text></View>
    )
  }
}

var styles = StyleSheet.create({
  text:{
    fontSize:55,
    color:"green"
  }
})

module.exports = readPage;
