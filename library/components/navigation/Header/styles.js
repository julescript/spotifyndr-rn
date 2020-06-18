import { StyleSheet, Platform } from 'react-native';
import { palette, colors } from 'res';

export default StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        borderBottomRightRadius: palette.borderRadius.md,
        borderBottomLeftRadius: palette.borderRadius.md,
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
        borderRadius: palette.borderRadius.searchBar,
        fontSize: 18,
        fontFamily: 'custom-black',
        color: colors.dark,
        paddingHorizontal: 20
    }
});