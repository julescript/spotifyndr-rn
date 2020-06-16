import { AsyncStorage } from 'react-native'

export const setUserData = async (key, value) => {
    try {
        await AsyncStorage.setItem(
            key,
            value
        );
    } catch (error) {
        // Error saving data
    }
};

export const getUserData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value
        }
    } catch (error) {
        // Error retrieving data
    }
};