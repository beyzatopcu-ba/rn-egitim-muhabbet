import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';

const AppStack = createStackNavigator();

const AppNavigation = () => {

    return (
        <AppStack.Navigator
        >
            <AppStack.Screen
                name="dummy-screen"
                component={() => <Text>laskdl</Text>}
            />
        </AppStack.Navigator>
    );
};

export default AppNavigation;
