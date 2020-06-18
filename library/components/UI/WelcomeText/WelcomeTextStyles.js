import { StyleSheet } from 'react-native';
import colors from 'res/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 24,
        // paddingBottom: 75
    },
    title: {
        color: colors.dark,
        fontSize: 50,
        fontFamily: 'custom-black',
        marginBottom: 0,
        textAlign: 'left'
    },
    subtitle: {
        color: colors.dark,
        fontSize: 24,
        fontFamily: 'custom-black',
        textAlign: 'left'
    },
    seperator: {
        height: 4,
        width: 150,
        backgroundColor: colors.primary,
        // alignSelf: 'left',
        marginVertical: 15
    },
    description: {
        color: colors.light,
        fontSize: 16,
        fontFamily: 'custom-medium',
        textAlign: 'left'
    },
});