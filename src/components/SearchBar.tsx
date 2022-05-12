import {
  StyleSheet,
  TextInput,
  View } from 'react-native';
import React from 'react';

import Icon from "react-native-vector-icons/MaterialIcons";

const SearchBar = ({
  term,
  onTermChange
  }: {term: string, onTermChange: (term: string) => void}) => {

  return (
    <View style={styles.backgroundStyle}>
      <Icon name="search" style={styles.iconStyle} />

      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
      />
    </View>
  );
};

export default SearchBar

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row'
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }
});
