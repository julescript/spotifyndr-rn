import React from 'react';
import styles from './SectionTitleBackStyles.js';
import { View, Text, TouchableOpacity } from 'react-native';
import SectionTitle from '../SectionTitle/SectionTitle.js';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../../../res/colors.js';

const SectionTitleBack = (props) => {
    return (
        <View style={{...styles.container, ...props.style}}>
            <SectionTitle title={props.title} subtitle={props.subtitle}/>
            <TouchableOpacity style={styles.backButton} onPress={props.onPressed}>
                <Ionicons name="ios-arrow-back" size={40} color={colors.primary} style={styles.backIcon}/>
            </TouchableOpacity>
        </View>
    );
};

export default SectionTitleBack;