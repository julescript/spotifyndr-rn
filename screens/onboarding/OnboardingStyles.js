import { StyleSheet, Dimensions } from 'react-native';
import { colors } from 'res';

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
        // paddingBottom: 20,
    },
    topText: {
        fontFamily: 'custom-black',
        fontSize: 60,
        lineHeight: 55,
        paddingVertical: 20,
        color: colors.white
    },
    image: {
        width: Dimensions.get('screen').width * 0.3333,
        height: Dimensions.get('screen').width * 0.3333,
        position: 'absolute',
        borderRadius: Dimensions.get('screen').width * 0.3333,
        alignSelf: 'center',
        bottom: '42.3%',
        backgroundColor: colors.primary
    }
});