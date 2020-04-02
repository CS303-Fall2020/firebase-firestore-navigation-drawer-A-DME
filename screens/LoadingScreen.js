import React, { Component } from 'react';
import { View, Text, StyleSheet ,ActivityIndicator} from 'react-native';
import * as firebase from 'firebase'
export default class LoadingScreen extends Component {

componentDidMount(){
  firebase.auth().onAuthStateChanged(user=>{
    this.props.navigation.navigate(user? "App":"Auth")
  })
}


  render() {  
    return (
      <View style={styles.container}>
        <Text>{'Loading...\n'}</Text>
        <ActivityIndicator size='large'></ActivityIndicator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
