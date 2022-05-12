import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import React, { useEffect, useState } from 'react';

import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp';

const SearchScreen: React.FC = () => {
    const [term, setTerm] = useState<string>('curry');
    const [results, setResults] = useState<any[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>('');

      const searchApi = async (_term: string) => {
        try {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        location: 'san jose'
      }
    });
    setResults(response.data.businesses);
        } catch (e) {
          setErrorMessage('Oops!!Something went wrong' + e);
        }
  };

  useEffect(() => {
    searchApi(term);
  }, []);

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
