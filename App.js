import 'react-native-gesture-handler';
import React, { useState } from 'react';
import AuthController from './screens/authController/AuthController';

import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import searchReducer from './library/store/reducers/search';
import authReducer from './library/store/reducers/auth';

const rootReducer = combineReducers({
  authReducer: authReducer,
  searchReducer: searchReducer
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'circular-book': require('./res/fonts/lineto-circular-book.ttf'),
    'circular-medium': require('./res/fonts/lineto-circular-medium.ttf'),
    'circular-bold': require('./res/fonts/lineto-circular-bold.ttf'),
    'circular-black': require('./res/fonts/lineto-circular-black.ttf'),
  });
};

export default function App() {
  
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }
  
  return (
    <Provider store={store}>
      <AuthController />
    </Provider>
  );
}