import React, { useEffect, useState } from 'react';
import styles from './AlbumsPageStyles.js';
import { Text, SafeAreaView, View, ScrollView, FlatList, Button } from 'react-native';
import AlbumCard from '../../library/components/cards/AlbumCard/AlbumCard';
import SectionTitle from '../../library/components/UI/SectionTitle/SectionTitle';
import SectionTitleBack from '../../library/components/UI/SectionTitleBack/SectionTitleBack.js';
import axios from '../../library/networking/axios';
import { useSelector } from 'react-redux';
import ErrorState from '../../library/components/UI/ErrorState/ErrorState.js';
import Spinner from '../../library/components/UI/Spinner/Spinner.js';

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
  

const AlbumsPage = (props) => {

    const token = useSelector(state => state.authReducer.AUTH_TOKEN);
    const { ID, name } = props.route.params;

    const [ results, setResults ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);

    let content = null;

    useEffect(() => {
      console.log('mount it!');
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
            console.log(res)
          })
          .catch(err => {
            console.log(res)
            setResults([])
            setLoading(false)
            setError(err.response)
          })
      }
    }, []);

    if (results.length != 0) {
      content = (
        <FlatList  
        ListHeaderComponent={<SectionTitleBack style={styles.sectionHeader} title={name} subtitle={'Albums'} onPressed={() => props.navigation.goBack()}/>}
        data={results.items}
        numColumns={2}
        style={styles.grid}
        contentContainerStyle={{paddingBottom:20}} 
        ListEmptyComponent={<ErrorState style={styles.botContainer} title="No Albums Found" subtitle={"Sorry we couldn't find albums for '"+name+"'"}/>}
        renderItem={({ item }) => <AlbumCard style={styles.gridItem} img={item.images[1] ? item.images[1].url : null} name={item.name} date={item.release_date.substring(0, 4)} tracks={item.total_tracks}/>}
        ListFooterComponent={<SafeAreaView />}/>
      );
    }else {
      content = <ErrorState danger title="Something Went Wrong" subtitle={"Please try again later"}/>;
    }
    if (loading) {
      content = <Spinner />
    }

    return (
        <View style={styles.parentContainer}>
            <View style={styles.botContainer}>
              {content}
            </View>
        </View>
    );
};

export default AlbumsPage;