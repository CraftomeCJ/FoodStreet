import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import React from 'react';

import SearchBar from '../components/SearchBar'


const SearchScreen: React.FC = () => {

    return (
      <View>
        <SearchBar />
        <Text>Search Screen</Text>
      </View>
    );
  };

export default SearchScreen;

const styles = StyleSheet.create({});
