import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';

import { REACT_NATIVE_Config }from '../config.env';

class App extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp(REACT_NATIVE_Config);

    //this will watch the firebase auth state change and change user loggedIn state accordingly
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    if (this.state.loggedIn) {
      return (
        <Button>
          Log Out
        </Button>
      );
    }

    return <LoginForm />
  }

  render () {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
