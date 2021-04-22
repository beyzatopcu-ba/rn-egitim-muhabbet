import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigation';
import { useSelector } from 'react-redux';
import { userSelector } from '../Modules/Auth';

const MainNavigation = (props) => {
    const loggedInUser = useSelector(userSelector);
    return (
        <>
            <StatusBar barStyle={"light-content"}/>
            <NavigationContainer>
                {
                    loggedInUser ?
                    <AppNavigation />
                    :
                    <AuthNavigation/>
                }
            </NavigationContainer>
        </>
    );
};

export default MainNavigation;
