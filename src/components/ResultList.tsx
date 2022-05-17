import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import ResultsDetail from './ResultsDetail'


const ResultList = ( {title, results}: {title: string, results: any} ) => {

const navigation = useNavigation();

if (!results.length) {
  return null;
}

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        {title}
        </Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
            onPress={
        () => navigation.navigate('Results', {id: item.id })
              }>
            <ResultsDetail result={item} />
            </TouchableOpacity>
          )
        }}
      />
    </View>
  );
};

export default ResultList

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
    marginBottom: 10
  }
});
