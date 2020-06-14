import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>
                {props.title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 56,
        padding: 10,
        backgroundColor: '#f7287b',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: '#fff',
        fontSize: 18
    }
});

export default Header;