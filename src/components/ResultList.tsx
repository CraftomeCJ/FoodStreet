import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native'
import React from 'react'


const ResultList = ( {title, results}: {title: string, results: undefined} ) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
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
