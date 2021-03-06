import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {

  const [results, setResults] = useState<{ id: string; name: string }[]>([]);
const [errorMessage, setErrorMessage] = useState('');

const searchApi = async (searchTerm: string): Promise<string | void> => {
// to check error use console.log
console.log('Hi there!!');


   try {
     const response = await yelp.get('/search', {
       params: {
         limit: 50,
         term: searchTerm,
         location: "singapore",
       },
     });
     setResults(response.data.businesses);
   } catch (err) {
     setErrorMessage("Oops!! Something went wrong");
   }
 };

 useEffect(() => {
  searchApi('pasta');
}, []);


 return [
   searchApi,
   results,
   errorMessage];
};
