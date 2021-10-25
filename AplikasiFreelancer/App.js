/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackComponent from './src/routes/StackComponent/StackComponent';

class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <StackComponent />
      </NavigationContainer>
    )
  }
}

export default App;
