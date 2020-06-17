import { StyleSheet } from 'react-native';
import colors from '../../res/colors';
import {Dimensions } from "react-native";

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
    gridItem: {
        margin: 5,
        minHeight: (Dimensions.get('window').width - 30) / 1.8,
        maxWidth: (Dimensions.get('window').width - 30) / 2,
    },
    grid: {
        flex: 1,
        padding: 10,
    },
    sectionHeader: {
        paddingHorizontal: 5,
        marginVertical: 10,
    }
});