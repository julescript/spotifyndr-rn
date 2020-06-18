import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './SearchPageStyles';

import ArtistCard from 'library/components/cards/ArtistCard/ArtistCard';
import SectionTitle from 'library/components/UI/SectionTitle/SectionTitle';
import SearchHeader from 'library/components/navigation/Header';
import Spinner from 'library/components/UI/Spinner/Spinner';
import ErrorState from 'library/components/UI/ErrorState/ErrorState';
import WelcomeText from 'library/components/UI/WelcomeText/WelcomeText';

import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setError, updateSearchResults, updateSearchQuery } from 'library/store/actions/search';

import { isEmptyOrSpaces } from 'library/utils/common';
import useDebounce from 'library/utils/debounce';
import { strings, services } from 'res';

const SearchPage = (props) => {

  const dispatch = useDispatch();

  const token = useSelector(state => state.authReducer.AUTH_TOKEN);
  const searchQuery = useSelector(state => state.searchReducer.SEARCH_QUERY);
  const searchResults = useSelector(state => state.searchReducer.SEARCH_RESULTS);
  const loading = useSelector(state => state.searchReducer.loading);
  const error = useSelector(state => state.searchReducer.error);
  
  const debouncedSearchTerm = useDebounce(searchQuery, 300);

  const [ shoulLoadMore, setShoulLoadMore ] = useState(false);

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
        services.searchArtists(debouncedSearchTerm, token)
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

  React.useEffect(
    () => {
      if(shoulLoadMore && !loading) {
        fetchNext(searchResults.next)
      }
  }, [shoulLoadMore] );

  const fetchNext = (next) => {
    if (next != null) {
      dispatch(setLoading(true));
      dispatch(setError(false));
      services.next(next, token)
        .then(res => {
            const results = {...res.data.artists}
            const oldResults = {...searchResults}
            results['items'].unshift(...oldResults['items']);
            dispatch(updateSearchResults(results));
            dispatch(setLoading(false));
            dispatch(setError(false));
            setShoulLoadMore(false);
        })
        .catch(err => {
          dispatch(updateSearchResults([]));
          dispatch(setLoading(false));
          dispatch(setError(true));
          setShoulLoadMore(false);
        })
    }
  }

    if (searchResults.length != 0) {
      content = (
        <FlatList  
          scrollIndicatorInsets={{ right: 1 }} 
          keyboardDismissMode='on-drag'
          keyboardShouldPersistTaps='handled'
          ListHeaderComponent={<SectionTitle style={styles.sectionHeader} title={strings.artistsPage.heading.line1} subtitle={strings.artistsPage.heading.line2 + "'" + searchQuery + "'"}/>}
          data={searchResults.items}
          numColumns={2}
          onEndReachedThreshold={0.5}
          onEndReached={() => setShoulLoadMore(true)}
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
    } else {
      content = <WelcomeText />;
    }
    if (error) {
      content = <ErrorState danger title={strings.errorState.title} subtitle={strings.errorState.description}/>;
    }
    // if (loading) {
    //   content = <Spinner />
    // }
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