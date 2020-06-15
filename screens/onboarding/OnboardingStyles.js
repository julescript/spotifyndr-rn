import { StyleSheet } from 'react-native';
import colors from '../../res/colors';

export default StyleSheet.create({
    topContainer:{
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    botContainer:{
        flex: 1,
        backgroundColor: colors.lightest,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
    },
    topText: {
        fontFamily: 'circular-black',
        fontSize: 60,
        lineHeight: 55,
        paddingTop: 20,
        color: colors.white
    },
    image: {
        width: 100,
        height: 100,
        position: 'absolute',
        borderRadius: 50,
        alignSelf: 'center',
        bottom: '45%'
    }
});