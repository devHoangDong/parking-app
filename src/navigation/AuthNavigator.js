import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from 'react';
import * as Keychain from 'react-native-keychain';
import LoginScreen from '../screens/Auth/login/LoginScreen';
import RegisterScreen from "../screens/Auth/login/RegisterScreen";

const RootStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const AuthNavigator = ({ navigation }) => {
  const [userData, setUserData] = useState()
  const fetchDataAuth = async () => {
    const credentials = await getCredentials();
    setUserData(credentials);
  }

  const getCredentials = async () => {
    return new Promise((resolve, reject) => {
      Keychain.getGenericPassword()
        .then((credentials) => {
          if (credentials && credentials.username) {
            console.log('Credentials successfully loaded for user ' + credentials.username);
            resolve(credentials);
          } else {
            resolve(null);
          }
        })
        .catch(err => {
          console.log("err: ", err);
          reject(err);
        });
    });
  }

  useEffect(() => {
    fetchDataAuth();
  }, [])

  return <RootStack.Navigator
    initialRouteName={userData ? "REGISTER" : "LOGIN"}
  >
    <RootStack.Screen
      name="REGISTER"
      component={RegisterScreen}
      options={{ headerShown: false }}
    />
    <RootStack.Screen
      name="LOGIN"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
  </RootStack.Navigator>
};

export default AuthNavigator;
