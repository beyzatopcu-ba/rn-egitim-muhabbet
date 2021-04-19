import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './AppNavigation';

const MainNavigation = (props) => {
    return (
        <>
            <StatusBar barStyle={"light-content"}/>
            <NavigationContainer>
                <AppNavigation />
            </NavigationContainer>
        </>
    );
};

export default MainNavigation;
