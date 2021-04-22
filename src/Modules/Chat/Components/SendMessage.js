import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';
import { tn, useLocalization } from '../../Localization';
import { cn, useThemedValues } from '../../Theming';

import getStyles from '../styles/SendMessageStyles';

const SendMessage = props => {
    const { styles, colors } = useThemedValues(getStyles);
    const loc = useLocalization();
    return (
        <View style={styles.messageAreaContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    multiline
                    placeholder={loc.t(tn.startWriting)}
                    placeholderTextColor={colors[cn.chat.messageInputPlaceholder]}
                    style={styles.input} />
            </View>
            <View style={styles.iconContainer}>
                <Icon svg={Svgs.Send} iconStyle={{ color: colors[cn.chat.sendIcon] }} />
            </View>
        </View>
    );
};

export default SendMessage;
