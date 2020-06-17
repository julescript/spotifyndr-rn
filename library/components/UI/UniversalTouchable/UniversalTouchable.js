import React from 'react';
import { Platform, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

const UniversalTouchable = (props) => {
    let Touchable = <TouchableOpacity style={props.style} onPress={props.onPress} activeOpacity={0.8} disabled={props.disabled}>{props.children}</TouchableOpacity>;
    // if (Platform.OS === 'android' && Platform.Version >= 21) {
    // Touchable = <TouchableNativeFeedback style={props.style} onPress={props.onPress} disabled={props.disabled}>{props.children}</TouchableNativeFeedback>;
    // }
    return Touchable;
};

export default UniversalTouchable;