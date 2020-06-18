import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './LoginButtonStyles';
import UniversalTouchable from '../../UI/UniversalTouchable/UniversalTouchable';
import strings from 'res/strings';
import images from 'res/images';

const LoginButton = (props) => {
    return (
        <UniversalTouchable onPress={props.onPress} disabled={props.disabled}>
            <View style={styles.container}>
                <Image source={images.spotifyLogo} style={styles.image} resizeMode="contain"/>
                <Text style={styles.text}>{strings.onboarding.button}</Text>
            </View>
        </UniversalTouchable>
    );
};

export default LoginButton;