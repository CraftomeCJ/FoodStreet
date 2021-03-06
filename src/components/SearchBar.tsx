import {
  StyleSheet,
  TextInput,
  View } from 'react-native';
import React from 'react';

import Icon from "react-native-vector-icons/MaterialIcons";

const SearchBar = (
  {
  term,
  onTermChange,
  onTermSubmit
  }: {term: string, onTermChange: (term: string) => void, onTermSubmit: (term: any) => void}) => {

  return (
    <View style={styles.backgroundStyle}>
      <Icon name="search" style={styles.iconStyle} />

      <TextInput
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
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
    flexDirection: 'row',
    marginBottom: 10
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
