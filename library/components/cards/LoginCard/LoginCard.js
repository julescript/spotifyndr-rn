import React from 'react';
import { Text, View } from 'react-native';
import styles from './LoginCardStyles';
import LoginButton from '../../buttons/LoginButton/LoginButton';

const LoginCard = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Get Started</Text>
            <LoginButton disabled={props.disabled} onPress={props.onLoginPress}/>
        </View>
    );
};

export default LoginCard;