import React from 'react';
import { Text, View } from 'react-native';
import { useThemedValues } from '../../Theming';

import getStyles from '../styles/SettingsScreenStyles';

const SettingsScreen = props => {

    const {styles, colors} = useThemedValues(getStyles);

    return (
        <View style={styles.container}>

        </View>
    );
};

export default SettingsScreen;
