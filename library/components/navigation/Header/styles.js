import { StyleSheet, Dimensions, Platform } from 'react-native';
import colors from '../../../../res/colors';

export default StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    child: {
        padding: 10,
        flexDirection: 'row',
    },
    image: {
        height: 44,
        width: 44,
        marginLeft: 7
    },
    input: {
        flex: 1,
        height: 44,
        backgroundColor: colors.white,
        borderRadius: 22,
        fontSize: 18,
        fontFamily: 'circular-black',
        color: colors.dark,
        paddingHorizontal: 20
    }
});