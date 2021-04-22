import React from 'react';
import { Text, View } from 'react-native';
import MessageBox from './MessageBox';

import styles from '../styles/SentMessageBoxStyles';

const SentMessageBox = props => {
    const { message, time, color } = props.messageData;
    return (
        <View style={styles.container}>
            <MessageBox
                message={message}
                time={time}
                senderColor={'transparent'}
                backgroundColor={"orange"}
                messageTextColor={"white"}
                timeTextColor={"grey"}
                isMe={true}
            />
        </View>
    );
};

export default SentMessageBox;
