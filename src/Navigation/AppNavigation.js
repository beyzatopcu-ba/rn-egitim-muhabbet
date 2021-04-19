import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import SettingsScreen from '../Modules/Settings/Screens/SettingsScreen';

const AppStack = createStackNavigator();

const AppNavigation = () => {

    return (
        <AppStack.Navigator
        >
            <AppStack.Screen
                name="settings-screen"
                component={SettingsScreen}
            />
        </AppStack.Navigator>
    );
};

export default AppNavigation;
