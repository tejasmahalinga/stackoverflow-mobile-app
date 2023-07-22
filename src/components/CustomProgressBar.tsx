import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

const CustomProgressBar = () => (
  <View style={{borderRadius: 10, backgroundColor: 'white', padding: 25}}>
    <Text style={{fontSize: 20, fontWeight: '200'}}>Loading</Text>
    <ActivityIndicator size="large" />
  </View>
);

export default CustomProgressBar;
