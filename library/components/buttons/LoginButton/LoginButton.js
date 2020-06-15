import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './LoginButtonStyles';

const LoginButton = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.container}>
                <Image source={require('../../../../res/images/spotify.png')} style={styles.image} resizeMode="contain"/>
                <Text style={styles.text}>Login with Spotify</Text>
            </View>
        </TouchableOpacity>
    );
};

export default LoginButton;