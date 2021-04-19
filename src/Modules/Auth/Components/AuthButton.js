import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import BorderedBox from '../../../Components/BorderedBox';
import { useThemedColors, useThemedStyles } from '../../Theming';
import { colorNames } from '../../Theming/Colors';

import getStyles from '../styles/AuthButtonStyles';

const AuthButton = (props) => {
    const colors = useThemedColors();
    const styles = useThemedStyles(getStyles);
    return (
        <BorderedBox
            borderColor={colors[colorNames.auth.inputBorder]}
            backgroundColor={colors[colorNames.auth.coloredButtonBackground]}>
            <TouchableOpacity
                style={styles.touchable}
                onPress={props.onPress}
                disabled={props.disabled}>
                <Text style={styles.text}>{props.text.toLocaleUpperCase('tr')}</Text>
            </TouchableOpacity>
        </BorderedBox>
    );
};

export default AuthButton;
