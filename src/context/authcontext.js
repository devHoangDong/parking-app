import React, { createContext, useContext } from 'react';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [authData, setAuthData] = useState();
    const [loading, setLoading] = useState(true);

    const signIn = async (result) => {
        setAuthData(result);
        AsyncStorage.setItem('@AuthData', JSON.stringify(result));
    };
    const signOut = async () => {
        setAuthData();
        await AsyncStorage.removeItem('@AuthData');
    };
    const loadStorageData = async () => {
        try {
            const authDataSerialized = await AsyncStorage.getItem('@AuthData');
            if (authDataSerialized) {
                const _authData = JSON.parse(authDataSerialized);
                setAuthData(_authData);
            }
        } catch (error) {
            console.log('error: ', error);
        }
        finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        loadStorageData();
    }, []);

    return (
        <AuthContext.Provider value={{ authData, loading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
