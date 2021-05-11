import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import { useNavigation } from '@react-navigation/native';

import { cn, useThemedColors, useThemedStyles } from '../../Theming';

import getStyles from '../styles/MessageBoxStyles';
import { Svgs } from '../../../StylingConstants';
import Icon from '../../../Components/Icon';

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
    const colors = useThemedColors();
    const navigation = useNavigation();

    const _onLongPress_Message = () => {
        Clipboard.setString(message);
    }

    const _renderMessageContent = () => {
       
        if (message.base64Image) {
            return (
                <Image style={styles.image} source={{ uri: "data:image/png;base64," + message.base64Image }} />
            )
        }

        if (message.location) {
            const latitude = ("" + message.location.latitude).substr(0, 9);
            const longitude = ("" + message.location.longitude).substr(0, 9);
            return (
                <TouchableOpacity style={styles.locationTouchable} onPress={() => {
                    navigation.navigate("map-screen", {
                        location: message.location,
                    })
                }}>
                    <View style={styles.locationIconContainer}>
                        <Icon svg={Svgs.LocationPin} iconStyle={{color: colors[cn.chat.sentMessageText]}}/>
                    </View>
                    <Text style={styles.messageText}>{latitude + ', ' + longitude}</Text>
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
