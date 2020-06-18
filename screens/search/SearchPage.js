import React from 'react';
import { SafeAreaView, View, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './SearchPageStyles';

import ArtistCard from 'library/components/cards/ArtistCard/ArtistCard';
import SectionTitle from 'library/components/UI/SectionTitle/SectionTitle';
import SearchHeader from 'library/components/navigation/Header';
import Spinner from 'library/components/UI/Spinner/Spinner';
import ErrorState from 'library/components/UI/ErrorState/ErrorState';
import WelcomeText from 'library/components/UI/WelcomeText/WelcomeText';

import { useDispatch, useSelector } from 'react-redux';
import axios from 'library/networking/axios';
import { setLoading, setError, updateSearchResults, updateSearchQuery } from 'library/store/actions/search';

import { isEmptyOrSpaces } from 'library/utils/common';
import useDebounce from 'library/utils/debounce';
import { strings } from 'res';

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
          keyboardDismissMode='on-drag'
          keyboardShouldPersistTaps='handled'
          ListHeaderComponent={<SectionTitle style={styles.sectionHeader} title={strings.artistsPage.heading.line1} subtitle={strings.artistsPage.heading.line2 + "'" + searchQuery + "'"}/>}
          data={searchResults.items}
          numColumns={2}
          style={styles.grid}
          contentContainerStyle={{paddingBottom:20}} 
          ListEmptyComponent={<ErrorState style={styles.botContainer} title={strings.artistsPage.emptyState.title} subtitle={strings.artistsPage.emptyState.description+"'"+searchQuery+"'"}/>}
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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.parentContainer}>
          <SearchHeader onChangeText={(e) => dispatch(updateSearchQuery(e))} value={searchQuery}/>
          <View style={styles.botContainer}>
              {content}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
};

export default SearchPage;