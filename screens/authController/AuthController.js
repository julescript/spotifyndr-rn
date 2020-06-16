import React from 'react';
import Onboarding from '../onboarding/Onboarding';
import SearchPage from '../search/SearchPage';
import { useSelector } from 'react-redux';

const AuthController = (props) => {

    const token = useSelector(state => state.authReducer.AUTH_TOKEN);
    const tokenExpirationTime = useSelector(state => state.authReducer.EXP_TIME);

    let rootPage = null;

    if (token && (tokenExpirationTime && new Date().getTime() < tokenExpirationTime)) {
      rootPage = <SearchPage />
    } else {
      rootPage = <Onboarding />
    }

    return rootPage;
};

export default AuthController;