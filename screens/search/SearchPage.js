import React, { useState } from 'react';
import { Text, SafeAreaView, View, ScrollView, FlatList, Button } from 'react-native';
import styles from './SearchPageStyles';
import ArtistCard from '../../library/components/cards/ArtistCard/ArtistCard';
import SectionTitle from '../../library/components/UI/SectionTitle/SectionTitle';
import SearchHeader from '../../library/components/navigation/Header';
import useDebounce from '../../library/utils/debounce';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../library/networking/axios';
import { setLoading, setError, updateSearchResults, updateSearchQuery } from '../../library/store/actions/search';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-br23rd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-r32r23aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac6r23r32r28afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '5869ewq4a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7ar1cbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68ar32rfc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
  ];
  

const SearchPage = (props) => {

  const dispatch = useDispatch();

  const token = useSelector(state => state.authReducer.AUTH_TOKEN);
  const searchQuery = useSelector(state => state.searchReducer.SEARCH_QUERY);
  const searchResults = useSelector(state => state.searchReducer.SEARCH_RESULTS);
  const loading = useSelector(state => state.searchReducer.loading);
  const error = useSelector(state => state.searchReducer.error);
  
  const debouncedSearchTerm = useDebounce(searchQuery, 300);

  React.useEffect(
    () => {
      if (debouncedSearchTerm) {
        dispatch(setLoading(true));
        dispatch(setError(false));
        axios.get('/search/', {
          headers: {
              'Authorization': 'Bearer ' + token,
          },
          params: {
              'q': debouncedSearchTerm,
              'type': 'artist',
              'limit': 12
          }
        })
          .then(res => {
            dispatch(updateSearchResults(res.data.artists));
            dispatch(setLoading(false));
            dispatch(setError(false));
          })
          .catch(err => {
            dispatch(setLoading(false));
            dispatch(setError(true));
          })
      }
    }, [debouncedSearchTerm] );

    return (
        <View style={styles.parentContainer}>
            <SearchHeader onChangeText={(e) => dispatch(updateSearchQuery(e))} value={searchQuery}/>
            <View style={styles.botContainer}>
                <FlatList  
                    ListHeaderComponent={<SectionTitle style={styles.sectionHeader} title={'Artists'} subtitle={"Showing results for '" + searchQuery + "'"}/>}
                    data={searchResults.items}
                    numColumns={2}
                    style={styles.grid}
                    contentContainerStyle={{paddingBottom:20}} 
                    renderItem={({ item }) => (
                    <ArtistCard 
                      img={item.images[1] ? item.images[1].url : undefined} 
                      name={item.name} 
                      followers={item.followers.total} 
                      stars={(item.popularity/20.0)}
                      style={styles.gridItem}/>)}
                    ListFooterComponent={<SafeAreaView />}/>
            </View>
        </View>
    );
};

export default SearchPage;