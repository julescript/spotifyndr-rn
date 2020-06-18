import { StyleSheet } from 'react-native';
import {Dimensions } from "react-native";
import colors from 'res/colors';

export default StyleSheet.create({
    parentContainer: {
        flex: 1,
        backgroundColor: colors.lighter
    },
    topContainer:{
        // backgroundColor: colors.white,
    },
    botContainer:{
        flex: 1,
        // backgroundColor: colors.lighter,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    gridItem: {
        margin: 5,
        minHeight: (Dimensions.get('window').width - 30) / 1.8,
        maxWidth: (Dimensions.get('window').width - 30) / 2,
    },
    grid: {
        padding: 10,
    },
    sectionHeader: {
        paddingHorizontal: 5,
        marginVertical: 10
    }
});