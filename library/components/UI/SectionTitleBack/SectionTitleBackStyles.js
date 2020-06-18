import { StyleSheet } from 'react-native';
import { colors } from 'res';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: Platform.OS === 'android' ? 15 : 0
    },
    title: {
        flex: 1
    },
    backButton: {
        justifyContent: 'center',
        marginLeft: 'auto',
        paddingHorizontal: 10,
    }
});