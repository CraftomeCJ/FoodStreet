import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import React, { useState } from 'react';

import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp';

const SearchScreen: React.FC = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState<any[]>([]);

    const searchApi = async () => {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'singapore'
        }
      });
      setResults(response.data.businesses);
    };

    return (
      <View>
        <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchApi}
        />
        <Text>Search Screen</Text>
          <Text>We have found {results.length} results.</Text>
      </View>
    );
  };

export default SearchScreen;

const styles = StyleSheet.create({});
