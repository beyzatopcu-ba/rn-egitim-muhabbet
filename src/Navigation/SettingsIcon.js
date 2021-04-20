import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '../Components/Icon';
import { cn, useThemedStyles } from '../Modules/Theming';
import { Metrics, Svgs } from '../StylingConstants';

const getStyles = Color => StyleSheet.create({
    iconContainer: {
        width: Metrics.width * 0.06,
        height: undefined,
        aspectRatio: 1,
        marginRight: Metrics.marginHorizontal,
    },
    icon: {
        color: Color[cn.header.rightIcon],
    }
})

const SettingsIcon = props => {
    const styles = useThemedStyles(getStyles);

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('settings-screen')}>
            <Icon iconStyle={styles.icon} svg={Svgs.Settings} />
        </TouchableOpacity>
    )
}

export default SettingsIcon;