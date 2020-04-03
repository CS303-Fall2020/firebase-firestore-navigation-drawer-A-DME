import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeScreen from './screens/HomeScreen';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgetScreen from './screens/ForgetScreen';
import TodoScreen from './screens/TodoScreen';
import ReviewDetails from './screens/reviewDetails';

import * as firebase from 'firebase';
import Header from './components/header';

var firebaseConfig = {
  apiKey: 'AIzaSyBP9uUhwLBoiGkLOEyipKfGMCUG4bcGtes',
  authDomain: 'todo-app-4442e.firebaseapp.com',
  databaseURL: 'https://todo-app-4442e.firebaseio.com',
  projectId: 'todo-app-4442e',
  storageBucket: 'todo-app-4442e.appspot.com',
  messagingSenderId: '385769084560',
  appId: '1:385769084560:web:9d10bfca974e569398aa15'
};

firebase.initializeApp(firebaseConfig);

const TodoStack = createStackNavigator({
  Todo: {
    screen: TodoScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Todos' />
      };
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Details'
    }
  }
});

const homeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Home' />
      };
    }
  }
});

const AppStack = createDrawerNavigator({
  Todo: TodoStack,
  Home: homeStack
});

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      headerLeft: null
    }
  },
  Forget: {
    screen: ForgetScreen,
    navigationOptions: {
      headerLeft: null
    }
  }
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: 'Loading'
    }
  )
);
