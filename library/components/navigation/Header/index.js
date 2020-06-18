import React from 'react';
import styles from './styles.js';
import { TextInput, SafeAreaView, View, Image } from 'react-native';
import strings from 'res/strings.js';
import images from 'res/images.js';

const SearchHeader = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.child}>
                <TextInput returnKeyType='done' value={props.value} onChangeText={props.onChangeText} style={styles.input} placeholder={strings.search.placeholder} clearButtonMode='while-editing'/>
                <Image source={images.logo} style={styles.image} resizeMode="contain"/>
            </View>
        </SafeAreaView>
    );
};

export default SearchHeader;