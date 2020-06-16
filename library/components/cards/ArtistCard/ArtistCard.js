import React from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import styles from './ArtistCardStyles';
import RatingStars from '../../UI/RatingStars/RatingStars';
import { followersString } from '../../../utils/common';
import colors from '../../../../res/colors';

const ArtistCard = (props) => {
    return (
        <TouchableOpacity style={{...styles.parentContainer, ...props.style}} activeOpacity={0.8} onPress={props.onPress} disabled={props.disabled}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{uri: props.img,}} 
                    PlaceholderContent={<ActivityIndicator size='large' color={colors.lighter}/>}/>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.nameLabel}>{props.name}</Text>
                    <Text style={styles.descLabel}>{followersString(props.followers)}</Text>
                    <RatingStars rating={props.stars}/>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ArtistCard;