import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigation';
import { useSelector } from 'react-redux';
import { userSelector } from '../Modules/Auth';
import { cn, ThemeModes, useTheme, useThemedColors } from '../Modules/Theming';

const MainNavigation = (props) => {
    const loggedInUser = useSelector(userSelector);
    const theme = useTheme();
    const colors = useThemedColors();
    const barStyle = theme === ThemeModes.light ? 'light-content' : 'dark-content';
    return (
        <>
            <StatusBar barStyle={barStyle} backgroundColor={colors[cn.header.background]}/>
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
