import React from 'react';
import styles from './ErrorStateStyles.js';
import { colors } from 'res';
import { View, Text } from 'react-native';

const ErrorState = (props) => {
    return (
        <View style={{...styles.container, ...props.style}}>
            <Text style={{...styles.title, color: props.danger ? colors.danger : colors.primary}}>{props.title}</Text>
            <Text style={styles.subtitle}>{props.subtitle}</Text>
        </View>
    );
};

export default ErrorState;