import React from 'react';
import { View, Text, Button, StyleSheet, WebView, Image } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14

var backgroundImage = require('./img/g1.jpg')

const HomeScreen = ({ navigation }) => (
  
  <View style={{ flex: 1, justifyContent: 'flex-end' }}>
    
    <View style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }} >
      <Image source={backgroundImage} style={{ flex: 1, height: null, width: null }} />
    </View>
   
    <Button
      onPress={() => navigation.navigate('Attendance')}
      title="Check Your Attendance"
      color= '#6abf69'
    />
    <Button
      onPress={() => navigation.navigate('Results')}
      title="Check Scary Results"
    />
  </View>
);

const AttendanceScreen = () => (
  <WebView
    source={{ uri: 'http://myaccount.jnujaipur.ac.in/Default' }}
  />
);
const ResultsScreen = () => (
  <WebView
    source={{ uri: 'http://results.jnujaipur.ac.in/' }}
  />
);

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Smart App -JNU Jaipur (UNOFFICIAL)',
    },
  },
  Attendance: {
    screen: AttendanceScreen,
    navigationOptions: {
      headerTitle: 'Attendance',
    },
  },
  Results: {
    screen: ResultsScreen,
    navigationOptions: {
      headerTitle: 'Results',
    },
  },
});

export default RootNavigator;