import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native'
import React from 'react'
import ResultsDetail from './ResultsDetail'

const ResultList = ( {title, results}: {title: string, results: any} ) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />;
        }}
      />
    </View>
  );
};

export default ResultList

const styles = StyleSheet.create({
    title: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
