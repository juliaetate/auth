import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from  './src/components/LoginForm';

export default class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
	    apiKey: 'AIzaSyAcyMv1WRHiNtBVwAS5w3SJKArAXVtMWvU',
	    authDomain: 'auth-37f1c.firebaseapp.com',
	    databaseURL: 'https://auth-37f1c.firebaseio.com',
	    projectId: 'auth-37f1c',
	    storageBucket: 'auth-37f1c.appspot.com',
	    messagingSenderId: '238134480024'
	  });
	}

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Authentication'} />
        <LoginForm />
      </View>
    );
  }
}
