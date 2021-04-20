import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useChangeTheme, useTheme, useThemedValues } from '../../Theming';
import { ThemeModes } from '../../Theming/ThemingConstants';
import OptionMenu from '../Components/OptionMenu';

import getStyles from '../styles/SettingsScreenStyles';

const SettingsScreen = props => {

    const currentTheme = useTheme();

    const {styles, colors} = useThemedValues(getStyles);
    const changeTheme = useChangeTheme();

    const themeOptions = [
        {
            key: ThemeModes.dark,
            title: 'Karanlık',
        },
        {
            key: ThemeModes.light,
            title: 'Aydınlık',
        },
    ]

    const _onSelect_Theme = (key) => {
        changeTheme(key);
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex: 1}}>
                <Text style={styles.nameText}>Beyza Topçu</Text>
                <Text style={styles.emailText}>beyzatopcu@mail.com</Text>
                <View style={styles.menusContainer}>
                    <OptionMenu 
                        options={themeOptions}
                        menuTitle={'Renk Teması'}
                        selectedOptionKey={currentTheme}
                        onSelect={_onSelect_Theme}
                    />
                </View>
                <TouchableOpacity style={styles.signOutTouchable}>
                    <Text style={styles.signOutText}>Çıkış Yap</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
};

export default SettingsScreen;
