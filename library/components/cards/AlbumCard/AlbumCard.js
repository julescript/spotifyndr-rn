import React from 'react';
import styles from './AlbumCardStyles.js';
import { View, Image, Text, ActivityIndicator } from 'react-native';
import {colors} from 'res';
import { tracksString } from '../../../utils/common.js';

const AlbumCard = (props) => {
    return (
        <View style={{...styles.parentContainer, ...props.style}}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{uri: props.img,}} 
                    PlaceholderContent={<ActivityIndicator size='large' color={colors.lighter}/>}/>
            </View>
            <Text style={styles.titleLabel} numberOfLines={3}>{props.name}</Text>
            <Text style={styles.subtitleLabel}>{props.date + ' · ' + tracksString(props.tracks)}</Text>
        </View>
    );
};

export default AlbumCard;