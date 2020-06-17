import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './LoginButtonStyles';
import UniversalTouchable from '../../UI/UniversalTouchable/UniversalTouchable';

const LoginButton = (props) => {
    return (
        <UniversalTouchable onPress={props.onPress} disabled={props.disabled}>
            <View style={styles.container}>
                <Image source={require('../../../../res/images/spotify.png')} style={styles.image} resizeMode="contain"/>
                <Text style={styles.text}>Login with Spotify</Text>
            </View>
        </UniversalTouchable>
    );
};

export default LoginButton;