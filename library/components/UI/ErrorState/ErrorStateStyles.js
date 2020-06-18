import { StyleSheet } from 'react-native';
import {Dimensions } from "react-native";
import { colors } from 'res';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        justifyContent: 'center',
        height: Dimensions.get('window').height - 300,
        paddingHorizontal: 24
    },
    title: {
        color: colors.primary,
        fontSize: 26,
        fontFamily: 'custom-black',
        marginBottom: 10,
        textAlign: 'center'
    },
    subtitle: {
        color: colors.dark,
        fontSize: 16,
        fontFamily: 'custom-book',
        textAlign: 'center'
    },
});