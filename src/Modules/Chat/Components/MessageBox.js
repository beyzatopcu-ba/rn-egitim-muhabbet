import React from 'react';
import { Text, View } from 'react-native';
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
    
    return (
        <View style={styles.container}>
            <View style={styles.boxContainer}>
                <Text style={styles.messageText} selectable selectionColor='pink'>
                    {message}
                    <Text selectable={false} style={{color: 'transparent'}}>000000</Text>
                </Text>
                <Text style={styles.timeText}>{time}</Text>
            </View>
        </View>
    );
};

export default MessageBox;
