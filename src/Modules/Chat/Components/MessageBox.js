import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import { useThemedStyles } from '../../Theming';

import getStyles from '../styles/MessageBoxStyles';

const MessageBox = props => {
    const {
        message,
        time,
        senderColor,
        backgroundColor,
        messageTextColor,
        timeTextColor,
        isMe,
    } = props;

    const styles = useThemedStyles(getStyles, props);

    const _onLongPress_Message = () => {
        Clipboard.setString(message);
    }
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.boxContainer} onLongPress={_onLongPress_Message}>
                <Text style={styles.messageText}>
                    {message}
                    <Text style={{color: 'transparent'}}>000000</Text>
                </Text>
                <Text style={styles.timeText}>{time}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MessageBox;
