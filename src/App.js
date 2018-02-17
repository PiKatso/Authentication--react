import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

import { REACT_NATIVE_Config }from '../config.env';

class App extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp(REACT_NATIVE_Config);

    //this will watch the firebase auth state change and change user loggedIn state accordingly
    firebase.auth().onAuthStateChange((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
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
