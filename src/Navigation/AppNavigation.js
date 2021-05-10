import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../Modules/Settings/Screens/SettingsScreen';
import ChatScreen from '../Modules/Chat/Screen/ChatScreen';
import { Fonts, Metrics } from '../StylingConstants';
import { cn, useThemedColors } from '../Modules/Theming';
import { useLocalization, tn } from '../Modules/Localization';
import SettingsIcon from './SettingsIcon';
import CameraScreen from '../Modules/Chat/Screen/CameraScreen';
import MapScreen from '../Modules/Chat/Screen/MapScreen';


const AppStack = createStackNavigator();

const AppNavigation = () => {

    const colors = useThemedColors();
    const loc = useLocalization();

    return (
        <AppStack.Navigator
        >
            <AppStack.Screen
                name="chat-screen"
                component={ChatScreen}
                options={{
                    title: loc.t(tn.groupChat),
                    headerStyle: {
                        backgroundColor: colors[cn.header.background],
                    },
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontFamily: Fonts.type.bold,
                        fontSize: Fonts.size(18),
                        color: colors[cn.header.text],
                    },
                    headerRight: SettingsIcon
                }}
            />
            <AppStack.Screen
                name="settings-screen"
                component={SettingsScreen}
                options={{
                    title: loc.t(tn.settings),
                    headerStyle: {
                        backgroundColor: colors[cn.header.background],
                    },
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontFamily: Fonts.type.bold,
                        fontSize: Fonts.size(18),
                        color: colors[cn.header.text],
                    },
                    headerBackTitleVisible: false,
                    headerLeftContainerStyle: {
                        marginLeft: Metrics.marginHorizontal * 0.7,
                    },
                    headerTintColor: colors[cn.header.backIcon]
                }}
            />
            <AppStack.Screen
                name="camera-screen"
                component={CameraScreen}
                options={{
                    headerShown: false,
                }}
            />
            <AppStack.Screen
                name="map-screen"
                component={MapScreen}
                options={{
                    headerShown: false,
                }}
            />
        </AppStack.Navigator>
    );
};

export default AppNavigation;
