import React, { useEffect, useState } from 'react';
import styles from './AlbumsPageStyles.js';
import { SafeAreaView, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import AlbumCard from 'library/components/cards/AlbumCard/AlbumCard';
import SectionTitleBack from 'library/components/UI/SectionTitleBack/SectionTitleBack.js';
import ErrorState from 'library/components/UI/ErrorState/ErrorState.js';
import Spinner from 'library/components/UI/Spinner/Spinner.js';

import axios from 'library/networking/axios';
import { strings } from 'res';

const AlbumsPage = (props) => {

    const token = useSelector(state => state.authReducer.AUTH_TOKEN);
    const { ID, name } = props.route.params;

    const [ results, setResults ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);

    let content = null;

    useEffect(() => {
      if (ID) {
        setLoading(true)
        setError(false)
        axios.get('artists/'+ID+'/albums', {
          headers: {
              'Authorization': 'Bearer ' + token,
          },
          params: {
              'id': ID,
              'country': 'US',
              'limit': 24
          }
        })
          .then(res => {
            setResults(res.data)
            setLoading(false)
            setError(false)
          })
          .catch(err => {
            setResults([])
            setLoading(false)
            setError(err.response)
          })
      }
    }, []);

    if (results.length != 0) {
      content = (
        <FlatList  
        ListHeaderComponent={<SectionTitleBack style={styles.sectionHeader} title={name} subtitle={strings.albumsPage.heading.line2} onPressed={() => props.navigation.goBack()}/>}
        data={results.items}
        numColumns={2}
        style={styles.grid}
        contentContainerStyle={{paddingBottom:20}} 
        ListEmptyComponent={<ErrorState style={styles.botContainer} title={strings.albumsPage.emptyState.title} subtitle={strings.albumsPage.emptyState.description+"'"+name+"'"}/>}
        renderItem={({ item }) => <AlbumCard style={styles.gridItem} img={item.images[1] ? item.images[1].url : null} name={item.name} date={item.release_date.substring(0, 4)} tracks={item.total_tracks}/>}
        ListFooterComponent={<SafeAreaView />}/>
      );
    }else {
      content = <ErrorState danger title={strings.errorState.title} subtitle={strings.errorState.description}/>;
    }
    if (loading) {
      content = <Spinner />
    }

    return (
        <View style={styles.parentContainer}>
            <SafeAreaView />
            <View style={styles.botContainer}>
              {content}
            </View>
        </View>
    );
};

export default AlbumsPage;