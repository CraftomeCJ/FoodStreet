import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import React from 'react'


const ResultList = ( {title, results}: {title: string, results: string} ) => {
  return (
    <View>
      <Text style={styles.title}>{ title }</Text>
      <Text>Results: {results.length}</Text>
    </View>
  )
}

export default ResultList

const styles = StyleSheet.create({
    title: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
