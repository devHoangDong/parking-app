import { createTheme, lightColors } from '@rneui/themed';
import React from 'react';
import { Platform } from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { AuthContextProvider } from './src/context/authcontext';
import { Button, colors, ThemeProvider } from 'react-native-elements';
import { LogBox } from 'react-native';
import AppRouter from './src/AppRouter';
import authReducer from './src/redux/authReducer';
import SplashScreen from 'react-native-splash-screen'
import { useEffect } from 'react';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  const store = createStore(authReducer);
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }
  const theme = createTheme({
    colors: {
      ...Platform.select({
        default: colors.platform.android,
        ios: colors.platform.ios,
      }),
    },
  });
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    // <PaperProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AuthContextProvider>
          <AppRouter />
        </AuthContextProvider>
      </Provider>
    </ThemeProvider>
    // </PaperProvider>
  );
};
export default App;
