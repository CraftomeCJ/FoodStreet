import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import React from 'react'


const ResultList = ( {title}: {title: string} ) => {
  return (
    <View>
      <Text style={styles.title}>{ title }</Text>
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
