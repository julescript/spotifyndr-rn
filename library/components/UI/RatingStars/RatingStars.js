import React from 'react';
import styles from './RatingStarsStyles.js';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
import colors from '../../../../res/colors.js';

const RatingStars = (props) => {
    let n = Math.round(parseFloat(props.rating))

    if (n > 5) {
        n = 5;
    }
    else if (n < 0) {
        n = 0;
    }

    let rating = [0,0,0,0,0];

    for (let i=0;i<n;i++) {
        rating[i] = 1;
    }

    let stars = rating.map((e,idx) => {
        if (e === 0) {
            return (<Ionicons key={idx} name="md-star" size={18} color={colors.lighter} style={styles.star}/>);
        }
        else {
            return (<Ionicons key={idx} name="md-star" size={18} color={colors.stars} style={styles.star}/>);
        }
    });

    return (
        <View style={styles.container}>
            {stars}
        </View>
    );
};

export default RatingStars;