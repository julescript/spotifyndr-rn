import React from 'react';
import styles from './styles.js';
import { TextInput, SafeAreaView, View, Image } from 'react-native';
import {strings, images} from 'res';
import i18n from 'library/utils/localization';

const SearchHeader = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.child}>
                <TextInput returnKeyType='done' value={props.value} onChangeText={props.onChangeText} style={styles.input} placeholder={i18n.t(strings.search.placeholder)} clearButtonMode='while-editing'/>
                <Image source={images.logo} style={styles.image} resizeMode="contain"/>
            </View>
        </SafeAreaView>
    );
};

export default SearchHeader;