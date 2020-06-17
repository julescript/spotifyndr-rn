import React from 'react';
import styles from './SpinnerStyles.js';
import { View, ActivityIndicator } from 'react-native';
import colors from '../../../../res/colors.js';

const Spinner = (props) => {
    return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size='large' color={colors.dark}/>
        </View>
    );
};

export default Spinner;