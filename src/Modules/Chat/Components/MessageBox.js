import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import { cn, useThemedColors, useThemedStyles } from '../../Theming';

import getStyles from '../styles/MessageBoxStyles';
import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';
import { useNavigation } from '@react-navigation/core';

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

    const navigation = useNavigation();

    const styles = useThemedStyles(getStyles, props);
    const colors = useThemedColors();

    const _onLongPress_Message = () => {
        Clipboard.setString(message);
    }

    const _onPress_LocationMessage = () => {
        navigation.navigate('map-screen', { location: message.location });
    }

    const _renderMessageContent = () => {
       
        if (message.base64Image) {
            return (
                <Image style={styles.image} source={{ uri: "data:image/png;base64," + message.base64Image }} />
            )
        }

        if (message.location) {
            console.log(message.location)
            return (
                <TouchableOpacity style={styles.locationTouchable} onPress={_onPress_LocationMessage}>
                    <View style={styles.locationIconContainer}>
                        <Icon svg={Svgs.LocationPin} iconStyle={{color: colors[cn.chat.sentMessageText]}} />
                    </View>
                    <Text style={styles.messageText}>{message.location.latitude + ", " + message.location.longitude}</Text>
                </TouchableOpacity>
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
