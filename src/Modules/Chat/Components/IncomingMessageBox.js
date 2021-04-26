import React from 'react';
import { Text, View } from 'react-native';
import MessageBox from './MessageBox';

import styles from '../styles/IncomingMessageBoxStyles';
import { cn, useThemedColors } from '../../Theming';

const IncomingMessageBox = props => {
    const { message, time, color, hasSenderName, senderName } = props.messageData;
    const colors = useThemedColors();
    return (
        <View style={styles.container}>
        {
            hasSenderName ?
            <Text style={[styles.senderNameText, {color}]}>{senderName}</Text>
            :
            null
        }
        <MessageBox
            message={message}
            time={time}
            senderColor={color}
            backgroundColor={colors[cn.chat.incomingMessageBoxBackground]}
            messageTextColor={colors[cn.chat.incomingMessageText]}
            timeTextColor={colors[cn.chat.incomingMessageTimeText]}
            isMe={false}
        />
        </View>
    );
};

export default IncomingMessageBox;
