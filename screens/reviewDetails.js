import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReveiwDetails({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };

  const [title, setTitle] = useState('');

  const changeHandler = val => {
    setTitle(navigation.getParam('item').title + val);
  };

  const update = navigation.getParam('upHand');

  return (
    <View style={globalStyles.container3}>
      <TextInput
        style={globalStyles.input2}
        defaultValue={navigation.getParam('item').title}
        onChangeText={changeHandler}
        multiline={true}
      />
      <Button
        title='Done'
        onPress={() => update(navigation.getParam('item').id, title)}
      />
    </View>
  );
}
