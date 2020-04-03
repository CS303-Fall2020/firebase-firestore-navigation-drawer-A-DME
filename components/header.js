import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';
import * as firebase from 'firebase'

export default function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer();
  };
const handleLogout=()=>{firebase.auth().signOut()}
  return (
    <View style={globalStyles.header}>
      <MaterialIcons
        name='menu'
        size={28}
        onPress={openMenu}
        style={globalStyles.icon}
      />
      <View style={{marginLeft:150}}>
        <Text style={globalStyles.headerText}>{title}</Text>
        </View>
        {/* <Text style={{fontSize:22,marginLeft:70,fontWeight:'bold',textDecorationLine:'underline'}}
        onPress={handleLogout}>SignOut</Text> */}
        <TouchableOpacity style={{marginLeft:70}} onPress={handleLogout}>
  <Text style={{fontSize:22,fontWeight:'bold',textDecorationLine:'underline'}}>SignOut</Text>
</TouchableOpacity>
    </View>
  );
}
