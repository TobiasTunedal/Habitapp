import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome!</Text>
        <Text>Shake your phone to open the developer menu.</Text>
<<<<<<< HEAD
        <Text>Djurgården</Text>
=======
        <Text>AIK!</Text>
>>>>>>> 418bf77e5350da1b18572afeb28747ef0c8c5986
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
