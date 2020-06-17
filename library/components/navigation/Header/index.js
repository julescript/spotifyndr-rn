import React from 'react';
import styles from './styles.js';
import { TextInput, SafeAreaView, View, Image } from 'react-native';

const SearchHeader = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.child}>
                <TextInput returnKeyType='done' value={props.value} onChangeText={props.onChangeText} style={styles.input} placeholder="Search Spotify artists" clearButtonMode='while-editing'/>
                <Image source={require('../../../../res/images/icon.png')} style={styles.image} resizeMode="contain"/>
            </View>
        </SafeAreaView>
    );
};

export default SearchHeader;