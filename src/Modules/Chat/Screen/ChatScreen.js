import React from 'react';
import { FlatList, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Icon from '../../../Components/Icon';
import { Metrics, Svgs } from '../../../StylingConstants';

import { tn, useLocalization } from '../../Localization';
import { cn, useThemedValues } from '../../Theming';
import SendMessage from '../Components/SendMessage';
import getStyles from '../styles/ChatScreenStyles';

import ChatData from '../DummyChatData';
import DateSeparator from '../Components/DateSeparator';
import IncomingMessageBox from '../Components/IncomingMessageBox';
import SentMessageBox from '../Components/SentMessageBox';

const currentUserId = 2;
const ChatScreen = props => {

    const { styles, colors } = useThemedValues(getStyles);
    const loc = useLocalization();

    const _renderChatItem = ({item}) => {
        // Tarih ayracı
        if (item.date) {
            return (
                <DateSeparator dateText={item.date} />
            )
        }
        // Gelen mesaj
        if (item.senderId === currentUserId) {
            return (
                <SentMessageBox messageData={item}/>
            )
        }

        return (
            <IncomingMessageBox messageData={item}/>
        )
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                keyboardVerticalOffset={Metrics.navBarHeight * 1.6}
            >
                <View style={styles.container} activeOpacity={1} onPress={Keyboard.dismiss}>
                    <View style={styles.chatContainer}>
                        <FlatList 
                            style={{flexGrow: 0}}
                            data={ChatData}
                            renderItem={_renderChatItem}
                            keyExtractor={(item, index) => index}
                            inverted
                        />
                    </View>
                    <SendMessage />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default ChatScreen;
