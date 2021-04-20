import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigation';

const MainNavigation = (props) => {
    const user = null;
    return (
        <>
            <StatusBar barStyle={"light-content"}/>
            <NavigationContainer>
                {
                    user === null ?
                    <AuthNavigation />
                    :
                    <AppNavigation />
                }
            </NavigationContainer>
        </>
    );
};

export default MainNavigation;
