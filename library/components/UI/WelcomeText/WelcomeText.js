import React from 'react';
import styles from './WelcomeTextStyles.js';
import colors from '../../../../res/colors.js';
import { View, Text } from 'react-native';

const WelcomeText = (props) => {
    return (
        <View style={{...styles.container, ...props.style}}>
            <Text style={styles.title}>Hello,</Text>
            <Text style={styles.subtitle}>Welcome to Spotifyndr</Text>
            <View style={styles.seperator}/>
            <Text style={styles.description}>Simply start by typing your desired artist in the search bar</Text>
        </View>
    );
};

export default WelcomeText;