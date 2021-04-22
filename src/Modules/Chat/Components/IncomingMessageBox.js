import React from 'react';
import { Text, View } from 'react-native';
import MessageBox from './MessageBox';

import styles from '../styles/IncomingMessageBoxStyles';

const IncomingMessageBox = props => {
    const { message, time, color, hasSenderName, senderName } = props.messageData;
    return (
        <View style={styles.container}>
        {
            hasSenderName ?
            <Text>{senderName}</Text>
            :
            null
        }
        <MessageBox
            message={message}
            time={time}
            senderColor={color}
            backgroundColor={"white"}
            messageTextColor={"black"}
            timeTextColor={"grey"}
            isMe={false}
        />
        </View>
    );
};

export default IncomingMessageBox;
