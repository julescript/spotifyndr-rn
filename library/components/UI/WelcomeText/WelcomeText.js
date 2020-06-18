import React from 'react';
import styles from './WelcomeTextStyles.js';
import { View, Text } from 'react-native';
import { colors, strings } from 'res';

const WelcomeText = (props) => {
    return (
        <View style={{...styles.container, ...props.style}}>
            <Text style={styles.title}>{strings.artistsPage.welcome.line1}</Text>
    <Text style={styles.subtitle}>{strings.artistsPage.welcome.line2}</Text>
            <View style={styles.seperator}/>
            <Text style={styles.description}>{strings.artistsPage.welcome.line3}</Text>
        </View>
    );
};

export default WelcomeText;