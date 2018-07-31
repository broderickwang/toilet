import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class settingPage extends Component {
  constructor() {
    super();
  }

  render(){
    return (
      <View><Text style={styles.text}>Setting Page</Text></View>
    )
  }
}

var styles = StyleSheet.create({
  text:{
    fontSize:88,
    color:"yellow"
  }
})

module.exports = settingPage;
