import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

import { REACT_NATIVE_Config }from '../config.env';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(REACT_NATIVE_Config);
  }

  render () {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
