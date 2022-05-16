import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import React, { useState } from 'react';

import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultList from '../components/ResultList'

const SearchScreen: React.FC = ({ navigation }: any) => {

    const [term, setTerm] = useState<string>('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultByPrice = (price: string) => {
      // price === '$' || price === '$$' || price === '$$$'
      return results.filter((result: { price: string; }) => {
        return result.price === price;
        });
    };

    return (
      // <View style={{flex: 1}}>
      <>
        <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
        />

  {errorMessage ? <Text>{errorMessage}</Text> : null}

        <ScrollView>

        <ResultList
        results={filterResultByPrice('$')}
        title="Cost Effective"
        navigation={navigation}
        />

        <ResultList
        results={filterResultByPrice('$$')}
        title="Bit Pricier"
        navigation={navigation}
        />

        <ResultList
        results={filterResultByPrice('$$$')}
        title="Big Spender"
        navigation={navigation}
        />


</ScrollView>
</>
// </View>
    );
  };


export default SearchScreen;

const styles = StyleSheet.create({});
