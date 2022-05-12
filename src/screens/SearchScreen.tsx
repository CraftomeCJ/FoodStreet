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

        <SearchBar
        term={term}
        onTermChange={(newTerm: React.SetStateAction<string>) => setTerm(newTerm)}
        onTermSubmit={() => console.log('term was submitted')}
        />
        <Text>
          Search Screen
          </Text>
        <Text>
          {term}
          </Text>
      </View>
    );
  };

export default SearchScreen;

const styles = StyleSheet.create({});
