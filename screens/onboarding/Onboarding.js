import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './OnboardingStyles';
import LoginCard from 'library/components/cards/LoginCard/LoginCard';

import { useDispatch } from 'react-redux';

import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, ResponseType, useAuthRequest } from 'expo-auth-session';
import { addToken } from 'library/store/actions/auth';

import { strings, images, services } from 'res';
import i18n from 'library/utils/localization';

WebBrowser.maybeCompleteAuthSession();

const Onboarding = (props) => {

    const dispatch = useDispatch();

    const [request, response, promptAsync] = useAuthRequest({
            responseType: ResponseType.Token,
            clientId: services.credentials.clientId,
            scopes: ['user-read-email', 'playlist-modify-public'],
            usePKCE: false,
            redirectUri: makeRedirectUri({
                native: 'spotifyndr://redirect',
              }),
        },
        services.authEndPoints
    );

    React.useEffect(() => {
        if (response?.type === 'success') {
            const {
                access_token,
                expires_in
            } = response.params;
            const expiration_time = new Date().getTime() + expires_in * 1000;
            dispatch(addToken(access_token, expiration_time));
        }
    }, [response]);

    console.log(makeRedirectUri({
        native: 'spotifyndr://redirect',
      }))

    return (
        <React.Fragment>
            <View style={styles.topContainer}>
                <Text style={styles.topText}>
                    {i18n.t(strings.onboarding.welcome)}
                </Text>
            </View>
            <View style={styles.botContainer}>
                <LoginCard onLoginPress = {() => {promptAsync()}}
                />
            </View>
            <Image source={images.logo} style={styles.image} resizeMode="contain"/>
        </React.Fragment>
    );
};

export default Onboarding;