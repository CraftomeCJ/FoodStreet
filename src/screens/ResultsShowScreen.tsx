import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet
  } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const {id} = route.params;

  console.log(result);

  const getResult = async (id: any) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  return (
    <View>
      <Text>Welcome to Search Results Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
