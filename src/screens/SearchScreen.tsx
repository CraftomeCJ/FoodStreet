import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import React, { useState } from 'react';

import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultList from '../components/ResultList'

const SearchScreen: React.FC = () => {

    const [term, setTerm] = useState<string>('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultByPrice = (price: string) => {
      // price === '$' || price === '$$' || price === '$$$'
      return results.filter((result: { price: string; }) => {
        return result.price === price;
        });
    };

    return (
      <View>
        <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
        />

  {errorMessage ? <Text>{errorMessage}</Text> : null}

        <Text>We have found {results.length} results for {term}</Text>

        <ResultList results={filterResultByPrice('$')} title="Cost Effective" />
        <ResultList results={filterResultByPrice('$$')} title="Bit Pricier" />
        <ResultList results={filterResultByPrice('$$$')} title="Big Spender" />
      </View>
    );
  };


export default SearchScreen;

const styles = StyleSheet.create({});
