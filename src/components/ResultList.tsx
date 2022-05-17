import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native'
import React from 'react'

import ResultsDetail from './ResultsDetail'


const ResultList = ( {title, results, navigation}: {title: string, results: any, navigation: any} ) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Results')}>
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
