import React from 'react';
import styles from './WelcomeTextStyles.js';
import { View, Text } from 'react-native';
import { colors, strings } from 'res';
import i18n from 'library/utils/localization';

const WelcomeText = (props) => {
    return (
        <View style={{...styles.container, ...props.style}}>
            <Text style={styles.title}>{i18n.t(strings.artistsPage.welcome.line1)}</Text>
    <Text style={styles.subtitle}>{i18n.t(strings.artistsPage.welcome.line2)}</Text>
            <View style={styles.seperator}/>
            <Text style={styles.description}>{i18n.t(strings.artistsPage.welcome.line3)}</Text>
        </View>
    );
};

export default WelcomeText;