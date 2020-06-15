import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './OnboardingStyles';
import LoginCard from '../../library/components/cards/LoginCard/LoginCard';

const Onboarding = (props) => {
    return (
        <React.Fragment>
            <View style={styles.topContainer}>
                <Text style={styles.topText}>
                    {"find\nyour\nartists"}
                </Text>
            </View>
            <View style={styles.botContainer}>
                <LoginCard />
            </View>
            <Image source={require('../../res/images/icon.png')} style={styles.image} resizeMode="contain"/>
        </React.Fragment>
    );
};

export default Onboarding;