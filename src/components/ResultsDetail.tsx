import {
  StyleSheet,
  Text,
  View,
  Image
  } from 'react-native'
import React from 'react'

// step 19d receive 'result' Props which is an object
const ResultsDetail = ({ result }: any) => {
  // console.log(result);

  return (
    <View style={styles.container}>
<Image
style={styles.image}
source={{ uri: result.image_url ? result.image_url : null }}
/>
<Text
style={styles.name}>
  {result.name}
</Text>
<Text>
        {result.rating} Stars,
        {result.review_count} Reviews
</Text>
    </View>
  );
};

export default ResultsDetail

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18
  }
});
