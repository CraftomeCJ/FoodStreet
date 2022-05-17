import React from 'react';
import {
  View,
  Text,
  StyleSheet
  } from 'react-native';

const ResultsShowScreen = ({ route, navigation }) => {

  const {id} = route.params;

  console.log(id);

  return (
    <View>
      <Text>Welcome to Search Results Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
