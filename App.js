import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry, Image } from 'react-native';
import Hamburger from 'react-native-hamburger';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }
  
  render() {
    let pic = {
      uri: 'https://t4.ftcdn.net/jpg/01/60/56/39/240_F_160563921_kVvQMkxGXdZrqa9EFNpA6bd7Ctaq0hSb.jpg'
    };

    return (

      <View style={styles.container}>
      
      <View style={[styles.hamburgerMenu]}>
      <Hamburger active={this.state.active}
      type="cross"
      onPress={()=> this.setState({active: !this.state.active})} />
      </View>
    
      <View style={[styles.boxcontainer]}>
        <Image source={pic} style={styles.logo}/>
        <Text>Welcome!</Text>
        <Text>To Habitapp</Text>
      </View>

      </View>
      
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  boxcontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  hamburgerMenu: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  logo: {
    width: 240,
    height: 260,
    alignItems: 'center',
    justifyContent: 'center',

  },
  
});
