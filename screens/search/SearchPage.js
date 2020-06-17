import React, { useState } from 'react';
import { Text, SafeAreaView, View, ScrollView, FlatList, Button, ActivityIndicator } from 'react-native';
import styles from './SearchPageStyles';
import ArtistCard from '../../library/components/cards/ArtistCard/ArtistCard';
import SectionTitle from '../../library/components/UI/SectionTitle/SectionTitle';
import SearchHeader from '../../library/components/navigation/Header';
import useDebounce from '../../library/utils/debounce';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../library/networking/axios';
import { setLoading, setError, updateSearchResults, updateSearchQuery } from '../../library/store/actions/search';
import colors from '../../res/colors';
import Spinner from '../../library/components/UI/Spinner/Spinner';
import ErrorState from '../../library/components/UI/ErrorState/ErrorState';
import { isEmptyOrSpaces } from '../../library/utils/common';
import WelcomeText from '../../library/components/UI/WelcomeText/WelcomeText';

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

  let content = null;

  React.useEffect(
    () => {
      if (isEmptyOrSpaces(searchQuery)){
        dispatch(updateSearchResults([]));
      }
    }, [searchQuery] );

  React.useEffect(
    () => {
      if (debouncedSearchTerm && !isEmptyOrSpaces(searchQuery)) {
        dispatch(setLoading(true));
        dispatch(setError(false));
        axios.get('/search/', {
          headers: {
              'Authorization': 'Bearer ' + token,
          },
          params: {
              'q': debouncedSearchTerm,
              'type': 'artist',
              'limit': 24
          }
        })
          .then(res => {
            dispatch(updateSearchResults(res.data.artists));
            dispatch(setLoading(false));
            dispatch(setError(false));
          })
          .catch(err => {
            dispatch(updateSearchResults([]));
            dispatch(setLoading(false));
            dispatch(setError(true));
          })
      }
    }, [debouncedSearchTerm] );

    if (searchResults.length != 0) {
      content = (
        <FlatList  
                    ListHeaderComponent={<SectionTitle style={styles.sectionHeader} title={'Artists'} subtitle={"Showing results for '" + searchQuery + "'"}/>}
                    data={searchResults.items}
                    numColumns={2}
                    style={styles.grid}
                    contentContainerStyle={{paddingBottom:20}} 
                    ListEmptyComponent={<ErrorState style={styles.botContainer} title="No Results Found" subtitle={"Sorry we couldn't find results for '"+searchQuery+"'"}/>}
                    renderItem={({ item }) => (
                    <ArtistCard 
                      onPressed={() => props.navigation.navigate('Albums', {
                        ID: item.id,
                        name: item.name,
                      })}
                      img={item.images[1] ? item.images[1].url : undefined} 
                      name={item.name} 
                      followers={item.followers.total} 
                      stars={(item.popularity/20.0)}
                      style={styles.gridItem}/>)}
                    ListFooterComponent={<SafeAreaView />}/>
      );
    }else {
      content = <WelcomeText />;
    }
    if (loading) {
      content = <Spinner />
    }
    return (
        <View style={styles.parentContainer}>
            <SearchHeader onChangeText={(e) => dispatch(updateSearchQuery(e))} value={searchQuery}/>
            <View style={styles.botContainer}>
                {content}
            </View>
        </View>
    );
};

export default SearchPage;