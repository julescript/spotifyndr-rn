import React from 'react';
import { Text, View } from 'react-native';
import styles from './LoginCardStyles';
import LoginButton from '../../buttons/LoginButton/LoginButton';
import { strings } from 'res';
import i18n from 'library/utils/localization';

const LoginCard = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{i18n.t(strings.onboarding.loginText)}</Text>
            <LoginButton disabled={props.disabled} onPress={props.onLoginPress}/>
        </View>
    );
};

export default LoginCard;