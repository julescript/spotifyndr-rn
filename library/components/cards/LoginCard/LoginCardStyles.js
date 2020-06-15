import { StyleSheet } from 'react-native';
import colors from '../../../../res/colors';

export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: 30,
        borderRadius: 35,
        elevation: 10,
        shadowColor: colors.black,
        shadowOpacity: 0.1,
        shadowOffset: {width:0,height:10},
        shadowRadius: 20,
    },
    text: {
        fontFamily: 'circular-black',
        color: colors.dark,
        fontSize: 22,
        marginBottom: 20
    }
});