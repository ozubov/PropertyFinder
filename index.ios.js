'use strict';

//var React = require('react-native');

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    NavigatorIOS
} from 'react-native';

var SearchPage = require('./SearchPage');

var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

class HelloWorld extends Component {
    render() {
        return <Text style={styles.text}>"Hello World! (gaga)"</Text>;
    }
}

class PropertyFinder extends Component {
    render() {
        return <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>;
    }
}

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);