import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Welcome from './Welcome';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBTtCPyMd158nKeq1O2-l_a1UXh-05-PQ0",
  authDomain: "habitapp-88060.firebaseapp.com",
  databaseURL: "https://habitapp-88060.firebaseio.com",
  storageBucket: "habitapp-88060.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Welcome/>
      </View>
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
