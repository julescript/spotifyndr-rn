import { StyleSheet } from 'react-native';
import colors from 'res/colors';
import { convertHexToRGBA } from 'library/utils/common';
import palette from 'res/palette';

export default StyleSheet.create({
    parentContainer: {
        backgroundColor: colors.dark,
        flex: 1,
        borderRadius: palette.borderRadius.sm,
        overflow: 'hidden',
        position: 'relative'
    },
    imageContainer: {
        backgroundColor: colors.dark,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    loader: {
        height: '60%',
        width: '100%',
    },
    descriptionContainer: {
        backgroundColor: convertHexToRGBA(colors.dark, 85),
        paddingHorizontal: 18,
        paddingVertical: 12,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    nameLabel: {
        fontSize: 16,
        fontFamily: 'custom-black',
        color: colors.white,
        marginBottom: 3
    },
    descLabel: {
        fontSize: 12,
        fontFamily: 'custom-medium',
        color: colors.white,
        opacity: 0.66,
        marginBottom: 7
    },
    image: {
        height: '100%',
        width: '100%',
    }
});