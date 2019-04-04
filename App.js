import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/reducers'
import firebase from 'firebase'
import LoginForm from './src/components/LoginForm'

export default class App extends React.Component {
  componentWillMount(){
    var config = {
      apiKey: "AIzaSyBDjtkK34K5kjbom0mJnVkFPrKl-x8maW8",
      authDomain: "manager-acbd7.firebaseapp.com",
      databaseURL: "https://manager-acbd7.firebaseio.com",
      projectId: "manager-acbd7",
      storageBucket: "manager-acbd7.appspot.com",
      messagingSenderId: "1069123981823"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
