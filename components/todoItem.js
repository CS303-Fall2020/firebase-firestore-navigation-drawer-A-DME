import React from 'react';
import { Text, TouchableOpacity, View, Button } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';

export default function TodoItem({
  item,
  pressHandler,
  navigation,
  txt,
  checkHandler,
  upHand
}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ReviewDetails', { item, upHand })}
    >
      <View style={globalStyles.item}>
        <MaterialIcons
          // style={globalStyles.del}
          name='delete'
          size={22}
          color='#333'
          onPress={() => pressHandler(item.id)}
        />
        <View style={globalStyles.itemText}>
          <Text
            // style={globalStyles.itemText}
            style={
              Boolean(item.completed) && { textDecorationLine: 'line-through' }
            }
          >
            {item.title}
          </Text>
        </View>
      </View>
      <CheckBox
        // center
        // style={globalStyles.check}
        checked={item.completed}
        onPress={() => checkHandler(item.id)}
        center
        title='Click me to mark as done'
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checkedTitle="Wohoo it's finished"
        // checked={this.state.checked}
      />
    </TouchableOpacity>
  );
}
