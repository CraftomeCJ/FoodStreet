import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import React, { useState } from 'react';

import SearchBar from '../components/SearchBar'
import useResults from "../hooks/useResults"

const SearchScreen: React.FC = () => {

    const [term, setTerm] = useState<string>('');
    const [searchApi, results, errorMessage] = useResults();


    return (
      <View>
        <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
        />

  {errorMessage ? <Text>{errorMessage}</Text> : null}

        <Text>We have found {results.length} results for {term}</Text>
      </View>
    );
  };

export default SearchScreen;

const styles = StyleSheet.create({});
