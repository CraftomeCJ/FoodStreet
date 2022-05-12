import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import React, { useState } from 'react';

import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp';

const SearchScreen: React.FC = () => {
    const [term, setTerm] = useState<string>('');
    const [results, setResults] = useState<any[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>('');

      const searchApi = async (searchTerm: string) => {
        try {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term: searchTerm,
        location: 'singapore'
      }
    });
    setResults(response.data.businesses);
        } catch (e) {
          setErrorMessage('Oops!!Something went wrong');
        }
  };

  return (
    <View>
      <SearchBar
      term={term}
      onTermChange={setTerm}
      //step 12c
      onTermSubmit={() => searchApi(term)}
      />

  {errorMessage ? <Text>{errorMessage}</Text> : null}

        <Text>We have found {results.length} results.</Text>
      </View>
    );
  };

export default SearchScreen;

const styles = StyleSheet.create({});
