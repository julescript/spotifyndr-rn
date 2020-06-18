import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './OnboardingStyles';
import LoginCard from 'library/components/cards/LoginCard/LoginCard';

import { useDispatch } from 'react-redux';

import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, ResponseType, useAuthRequest } from 'expo-auth-session';
import { spotifyCredentials } from 'library/utils/common';
import * as AuthSession from 'expo-auth-session';
import { addToken } from 'library/store/actions/auth';
import { ResponseError } from 'expo-auth-session/build/Errors';

import strings from 'res/strings';
import images from 'res/images';

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

const Onboarding = (props) => {

    const dispatch = useDispatch();
    // const token = useSelector(state => state.authReducer.AUTH_TOKEN);

    const [request, response, promptAsync] = useAuthRequest({
            responseType: ResponseType.Token,
            clientId: spotifyCredentials.clientId,
            scopes: ['user-read-email', 'playlist-modify-public'],
            // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
            // this must be set to false
            usePKCE: false,
            redirectUri: makeRedirectUri({
                native: 'spotifyndr://redirect',
              }),
        },
        discovery
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

    return (
        <React.Fragment>
            <View style={styles.topContainer}>
                <Text style={styles.topText}>
                    {strings.onboarding.welcome}
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