import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './src/components/common';
import LoginForm from  './src/components/LoginForm';

export default class App extends Component {
	state = { loggedIn: null };

	componentWillMount() {
		firebase.initializeApp({
	    apiKey: 'AIzaSyAcyMv1WRHiNtBVwAS5w3SJKArAXVtMWvU',
	    authDomain: 'auth-37f1c.firebaseapp.com',
	    databaseURL: 'https://auth-37f1c.firebaseio.com',
	    projectId: 'auth-37f1c',
	    storageBucket: 'auth-37f1c.appspot.com',
	    messagingSenderId: '238134480024'
	  });

	  firebase.auth().onAuthStateChanged((user) => {
	  	if ( user ) {
	  		this.setState({ loggedIn: true });
	  	} else {
	  		this.setState({ loggedIn: false });
	  	}
	  });
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
		      <Button>
		        Log Out
		      </Button>
		    );
			case false:
				return <LoginForm />;
			default:
				return <Spinner />;
		}
	}

  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        {this.renderContent()}
      </View>
    );
  }
}
