import React from 'react';
import styles from './AlbumsPageStyles.js';
import { Text, SafeAreaView, View, ScrollView, FlatList, Button } from 'react-native';
import AlbumCard from '../../library/components/cards/AlbumCard/AlbumCard';
import SectionTitle from '../../library/components/UI/SectionTitle/SectionTitle';
import SectionTitleBack from '../../library/components/UI/SectionTitleBack/SectionTitleBack.js';

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
    return (
        <View style={styles.parentContainer}>
            <SafeAreaView style={styles.topContainer}>
                {/* <Text>hello top</Text> */}
            </SafeAreaView>
            <View style={styles.botContainer}>
                <FlatList  
                    ListHeaderComponent={<SectionTitleBack style={styles.sectionHeader} title={'dua lipa'} subtitle={'Albums'}/>}
                    data={DATA}
                    numColumns={2}
                    style={styles.grid}
                    contentContainerStyle={{paddingBottom:20}} 
                    renderItem={({ item }) => <AlbumCard style={styles.gridItem} title={'Future Nostalgia'} subtitle={'2020 · 11 tracks'}/>}
                    ListFooterComponent={<SafeAreaView />}/>
            </View>
        </View>
    );
};

export default AlbumsPage;