import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Welcome from './Welcome';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
<<<<<<< HEAD
        <Welcome/>
=======
        <Text>Welcome!</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Vi mår i Habitapps</Text>
>>>>>>> 4a28b19f7ed6308a81d6e4d05b2aca39c696181d
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
