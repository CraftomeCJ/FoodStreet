import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import React, { useState } from 'react';

import SearchBar from '../components/SearchBar'

const SearchScreen: React.FC = () => {
    const [term, setTerm] = useState('');

    return (
      <View>
        <SearchBar term={term} onTermChange={(newTerm: React.SetStateAction<string>) => setTerm(newTerm)} />
        <Text>Search Screen</Text>
        <Text>{term}</Text>
      </View>
    );
  };

export default SearchScreen;

const styles = StyleSheet.create({});
