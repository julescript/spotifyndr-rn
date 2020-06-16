import React from 'react';
import { Text, SafeAreaView, View, ScrollView, FlatList, Button } from 'react-native';
import styles from './SearchPageStyles';
import ArtistCard from '../../library/components/cards/ArtistCard/ArtistCard';
import SectionTitle from '../../library/components/UI/SectionTitle/SectionTitle';

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
    return (
        <View style={styles.parentContainer}>
            <SafeAreaView style={styles.topContainer}>
                {/* <Text>hello top</Text> */}
            </SafeAreaView>
            <View style={styles.botContainer}>
                <FlatList  
                    ListHeaderComponent={<SectionTitle style={styles.sectionHeader}/>}
                    data={DATA}
                    numColumns={2}
                    style={styles.grid}
                    contentContainerStyle={{paddingBottom:20}} 
                    renderItem={({ item }) => <ArtistCard style={styles.gridItem}/>}
                    ListFooterComponent={<SafeAreaView />}/>
            </View>
        </View>
    );
};

export default SearchPage;