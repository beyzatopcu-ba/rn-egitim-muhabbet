import React from 'react';
import { Text, View } from 'react-native';
import MessageBox from './MessageBox';

import styles from '../styles/SentMessageBoxStyles';
import { cn, useThemedColors } from '../../Theming';

const SentMessageBox = props => {
    const { message, time, color } = props.messageData;
    const colors = useThemedColors();
    return (
        <View style={styles.container}>
            <MessageBox
                message={message}
                time={time}
                senderColor={'transparent'}
                backgroundColor={colors[cn.chat.sentMessageBoxBackground]}
                messageTextColor={colors[cn.chat.sentMessageText]}
                timeTextColor={colors[cn.chat.sentMessageTimeText]}
                isMe={true}
            />
        </View>
    );
};

export default SentMessageBox;
