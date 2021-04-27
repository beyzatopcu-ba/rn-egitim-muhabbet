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

export default React.memo(IncomingMessageBox, (prevProps, nextProps) => {
    const { message1, time1, color1, hasSenderName1, senderName1 } = prevProps.messageData;
    const { message2, time2, color2, hasSenderName2, senderName2 } = nextProps.messageData;
    return (
        message1 === message2
        && time1 === time2
        && color1 === color2
        && hasSenderName1 === hasSenderName2
        && senderName1 === senderName2
    );
});