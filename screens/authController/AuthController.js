import React from 'react';
import Onboarding from '../onboarding/Onboarding';
import SearchPage from '../search/SearchPage';
import { useSelector } from 'react-redux';
import AlbumsPage from '../albums/AlbumsPage';

import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const AuthController = (props) => {

    const token = useSelector(state => state.authReducer.AUTH_TOKEN);
    const tokenExpirationTime = useSelector(state => state.authReducer.EXP_TIME);

    let rootPage = null;

    if (token && (tokenExpirationTime && new Date().getTime() < tokenExpirationTime)) {
      rootPage = (
        <NavigationContainer>
          <Stack.Navigator headerMode='none' initialRouteName="Artists">
            <Stack.Screen name="Artists" component={SearchPage} />
            <Stack.Screen name="Albums" component={AlbumsPage} />
          </Stack.Navigator>
        </NavigationContainer>
      )
    } else {
      rootPage = <Onboarding />
    }

    return rootPage;
};

export default AuthController;