import { StyleSheet } from 'react-native';
import colors from '../../../../res/colors';

export default StyleSheet.create({
    container:{
        backgroundColor: colors.dark,
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 7,
        borderRadius: 25,
        overflow: 'hidden',
    },  
    image: {
        // backgroundColor: colors.white,
        height: 36,
        width: 36,
        overflow: 'hidden',
        borderRadius: 36,
    },
    text: {
        color: colors.white,
        paddingHorizontal: 12,
        fontFamily: 'circular-bold',
        minWidth: 180,
        fontSize: 14
    },
});