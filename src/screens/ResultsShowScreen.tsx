import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image
  } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const {id} = route.params;

  // console.log(result);

  const getResult = async (id: any) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return (
          <Image
          style={styles.image}
          source={{ uri: item }}
          />
          )
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#246EE9'
  },
  image: {
    height: 200,
    width: 300,
    marginLeft: 45,
    marginTop: 20,
  }
});

export default ResultsShowScreen;
