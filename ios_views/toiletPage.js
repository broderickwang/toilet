import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View ,WebView} from 'react-native';
import TwebPage from './twebPage';

class toiletPage extends Component{
  constructor() {
      super();
  }

  render(){
    return (
      <View style={styles.container}>
        <TwebPage uri="http://localhost:63342/toilet/html/nearby.html?_ijt=rqbrlvljvhlfqfiiak423tjvnr"/>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  text:{
    fontSize:60
  },
  container:{
    flex:1
  }
});

module.exports = toiletPage;
