import React from 'react';
import styles from './SectionTitleStyles.js';
import { Text, View } from 'react-native';

const SectionTitle = (props) => {
    return (
        <View style={props.style}>
            <Text style={styles.title}>Artists</Text>
            <Text style={styles.subtitle}>Showing results for “dua"</Text>
        </View>
    );
};

export default SectionTitle;