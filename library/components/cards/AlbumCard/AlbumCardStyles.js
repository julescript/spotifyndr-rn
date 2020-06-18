import { StyleSheet, Dimensions } from 'react-native';
import {colors, palette} from 'res';

export default StyleSheet.create({
    parentContainer: {
        flex: 1,
        margin: 5,
    },
    imageContainer: {
        backgroundColor: colors.dark,
        borderRadius: palette.borderRadius.sm,
        overflow: 'hidden',
        minHeight: (Dimensions.get('window').width - 40) / 2,
        maxWidth: (Dimensions.get('window').width - 40) / 2,
        position: 'relative'
    },
    image: {
        backgroundColor: colors.dark,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    titleLabel: {
        fontSize: 16,
        fontFamily: 'custom-black',
        color: colors.dark,
        marginBottom: 2,
        marginTop: 7
    },
    subtitleLabel: {
        fontSize: 12,
        fontFamily: 'custom-medium',
        color: colors.dark,
        opacity: 0.66,
        marginBottom: 2,
    }
});