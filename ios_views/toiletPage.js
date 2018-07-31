import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class toiletPage extends Component{
  constructor() {
      super();
  }

  render(){
    return (
      <View><Text style={styles.text}>toiletPage</Text></View>
    )
  }
}

var styles = StyleSheet.create({
  text:{
    fontSize:60
  }
});

module.exports = toiletPage;
