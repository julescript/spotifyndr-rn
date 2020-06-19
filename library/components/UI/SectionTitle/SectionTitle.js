import React from 'react';
import styles from './SectionTitleStyles.js';
import { Text, View } from 'react-native';

const SectionTitle = (props) => {
    return (
        <View style={props.style}>
            <Text numberOfLines={3} adjustsFontSizeToFit={true} style={styles.title}>{props.title}</Text>
            <Text numberOfLines={1} style={styles.subtitle}>{props.subtitle}</Text>
        </View>
    );
};

export default SectionTitle;