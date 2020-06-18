import { StyleSheet } from 'react-native';
import colors from 'res/colors';
import palette from 'res/palette';

export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: 30,
        borderRadius: palette.borderRadius.lg,
        elevation: 10,
        shadowColor: colors.black,
        shadowOpacity: 0.1,
        shadowOffset: {width:0,height:10},
        shadowRadius: 20,
    },
    text: {
        fontFamily: 'custom-black',
        color: colors.dark,
        fontSize: 22,
        marginBottom: 20
    }
});