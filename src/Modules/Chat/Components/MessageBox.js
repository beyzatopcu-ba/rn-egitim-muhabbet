import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
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

    const _renderMessageContent = () => {
       
        if (message.base64Image) {
            return (
                <Image style={styles.image} source={{ uri: "data:image/png;base64," + message.base64Image }} />
            )
        }

        return (
            <Text style={styles.messageText}>
                {message}
                <Text style={{ color: 'transparent' }}>000000</Text>
            </Text>
        );
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.boxContainer} onLongPress={_onLongPress_Message}>
                {_renderMessageContent()}
                <Text style={styles.timeText}>{time}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MessageBox;
