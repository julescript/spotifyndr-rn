import { StyleSheet } from 'react-native';
import colors from '../../../../res/colors';
import { convertHexToRGBA } from '../../../utils/common';

export default StyleSheet.create({
    parentContainer: {
        backgroundColor: colors.dark,
        flex: 1,
        borderRadius: 20,
        overflow: 'hidden',
        position: 'relative'
    },
    imageContainer: {
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
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
        fontFamily: 'circular-black',
        color: colors.white,
        marginBottom: 3
    },
    descLabel: {
        fontSize: 12,
        fontFamily: 'circular-medium',
        color: colors.white,
        opacity: 0.66,
        marginBottom: 7
    },
    image: {
        backgroundColor: colors.dark,
        height: '100%',
        width: '100%',
    }
});