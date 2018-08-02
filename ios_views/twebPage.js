import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View ,WebView} from 'react-native';

class twebPage extends Component{
  constructor(props) {
      super(props);
      this.state = {
        uri: this.props.uri,
        isError: false
      };
  }

  render(){
    return (
      <View style={styles.container}>
          {
            this.state.isError?
            <Text style={styles.errorInfo}> network has down , pls retry again </Text>:
            <WebView
                source={{uri: this.state.uri}}
                startInLoadingState={true}
                onError={this._showError.bind(this)}
            />
          }
      </View>

    )
  }

  _showError(){
    this.setState(
      {
        isError: true
      }
    )
  }
}

var styles = StyleSheet.create({
  text:{
    fontSize:60
  },
  container:{
    flex:1
  },
  errorInfo:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});

module.exports = twebPage;
