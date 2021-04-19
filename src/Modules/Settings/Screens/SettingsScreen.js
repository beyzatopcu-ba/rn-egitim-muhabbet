import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useChangeTheme, useThemedValues } from '../../Theming';
import { ThemeModes } from '../../Theming/ThemingConstants';

import getStyles from '../styles/SettingsScreenStyles';

const SettingsScreen = props => {

    const params = {};
    const {styles, colors} = useThemedValues(getStyles, params);
    const changeTheme = useChangeTheme();

    const _onPress_MakeDark = () => {
        changeTheme(ThemeModes.dark);
    };

    const _onPress_MakeLight = () => {
        changeTheme(ThemeModes.light);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={_onPress_MakeDark}>
                <Text>Karanlık</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={_onPress_MakeLight}>
                <Text>Aydınlık</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SettingsScreen;
