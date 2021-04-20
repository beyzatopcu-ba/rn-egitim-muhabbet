import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import { useChangeTheme, useTheme, useThemedValues, useThemeOptions } from '../../Theming';
import { useLocalization, tn, useLocaleOptions, useLocale, useChangeLocale } from '../../Localization';
import OptionMenu from '../Components/OptionMenu';

import getStyles from '../styles/SettingsScreenStyles';

const SettingsScreen = props => {

    const currentTheme = useTheme();
    const {styles, colors} = useThemedValues(getStyles);
    const changeTheme = useChangeTheme();
    const themeOptions = useThemeOptions();

    const currentLocale = useLocale();
    const loc = useLocalization();
    const localeOptions = useLocaleOptions();
    const changeLocale = useChangeLocale();


    const _onSelect_Theme = (key) => {
        changeTheme(key);
    }

    const _onSelect_Locale = (key) => {
        changeLocale(key);
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex: 1}}>
                <Text style={styles.nameText}>Beyza Topçu</Text>
                <Text style={styles.emailText}>beyzatopcu@mail.com</Text>
                <View style={styles.menusContainer}>
                    <OptionMenu 
                        options={themeOptions}
                        menuTitle={loc.t(tn.colorTheme)}
                        selectedOptionKey={currentTheme}
                        onSelect={_onSelect_Theme}
                    />
                    <OptionMenu 
                        options={localeOptions}
                        menuTitle={loc.t(tn.language)}
                        selectedOptionKey={currentLocale}
                        onSelect={_onSelect_Locale}
                    />
                </View>
                <TouchableOpacity style={styles.signOutTouchable}>
                    <Text style={styles.signOutText}>{loc.t(tn.signOut)}</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
};

export default SettingsScreen;
