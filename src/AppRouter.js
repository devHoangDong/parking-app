import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme, NavigationContainer
} from '@react-navigation/native';
import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import {
    DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme
} from 'react-native-paper';
import { useSelector } from 'react-redux';
import { useAuth } from './context/authcontext';
import AuthNavigator from './navigation/AuthNavigator';
import MainTabScreen from './navigation/MainNavigator';
import Menu from './screens/Menu/Menu';

const AppRouter = () => {
    const { authData, loading } = useAuth();
    const Drawer = createDrawerNavigator();
    const layoutStore = useSelector(state => state.authReducer)
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const CustomDefaultTheme = {
        ...NavigationDefaultTheme,
        ...PaperDefaultTheme,
        colors: {
            ...NavigationDefaultTheme.colors,
            ...PaperDefaultTheme.colors,
            background: '#ffffff',
            text: '#06132B',
        },
    };
    const CustomDarkTheme = {
        ...NavigationDarkTheme,
        ...PaperDarkTheme,
        colors: {
            ...NavigationDarkTheme.colors,
            ...PaperDarkTheme.colors,
            background: '#06132B',
            text: '#ffffff',
        },
    };
    const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
    const AppStack = () => {
        return (
            <Drawer.Navigator
                initialRouteName="MainTabScreen"
                drawerContent={props => <Menu {...props} />}
            >
                <Drawer.Screen
                    name="MainTabScreen"
                    component={MainTabScreen}
                    options={{ headerShown: false }}
                />
            </Drawer.Navigator>
        )
    }
    if (loading) {
        return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" />
        </View>
    }
    return (
        <NavigationContainer theme={theme}>
            {authData ? <AppStack /> : <AuthNavigator />}
        </NavigationContainer>
    )
};
export default AppRouter