/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button
} from 'react-native';
import
  Colors from './src/assets/colors';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TextInput } from 'react-native-gesture-handler';
import Login from './src/screens/Login';
import LeaderboardScreen from './src/screens/Leaderboard';
import Profile from './src/screens/Profile';
import TabBar from './src/components/TabBar';
import colors from './src/assets/colors';
import { Provider } from 'react-redux';
import { initStore } from './src/store/reduxStore';

const store = initStore();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const adamTheme = {
darK: true,
colors: {
    primary: colors.blue,
    background: colors.black,
    card: colors.darkColor,
    text: colors.white,
    border: colors.blue,
}
};
function Home() {
  return (
    <Tab.Navigator tabBarOptions={{ inactiveBackgroundColor: colors.black, activeBackgroundColor: colors.blue, activeTintColor: colors.white, inactiveTintColor: colors.white}}>
      <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={ store }>
      <NavigationContainer theme={ adamTheme }>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={ Login } />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
