import React, { useEffect, useState } from 'react';
import { FlatList, Keyboard, KeyboardAvoidingView, LayoutAnimation, Platform, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';

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
import { getData, sendMessage } from '../API/Firebase';
import { createChatDataForRender } from '../Utils/RenderChatUtils';
import { useLocaleDateFormat } from '../../Localization/LocalizationHooks';

const ChatScreen = props => {

    const { styles, colors } = useThemedValues(getStyles);
    const loc = useLocalization();
    
    const [ chatList, setChatList ] = useState([]);
    const localeDateFormat = useLocaleDateFormat();

    useEffect(() => {
        const off = getData(chatList => {
            const chatDataForRender = createChatDataForRender(chatList, localeDateFormat);
            configureNewMessageAnimation();
            setChatList(chatDataForRender);
        });

        return async () => {
            await off();
        }
    }, []);

    const configureNewMessageAnimation = () => {
        LayoutAnimation.configureNext({
            create: {
                delay: 50,
                duration: 200,
                type: LayoutAnimation.Types.easeInEaseOut,
                property: LayoutAnimation.Properties.opacity,
            },
            update: {
                duration: 150,
                type: LayoutAnimation.Types.easeInEaseOut,
                property: LayoutAnimation.Properties.opacity,
            },
        })
    }

    const _onPress_SendMessage = message => {
        sendMessage(message);
    }

    const _renderChatItem = ({item}) => {
        // Tarih ayracı
        if (item.date) {
            return (
                <DateSeparator dateText={item.date} />
            )
        }
        // Gelen mesaj
        if (item.isMe) {
            return (
                <SentMessageBox messageData={item}/>
            )
        }

        return (
            <IncomingMessageBox messageData={item}/>
        )
    }

    const ListHeaderComponent = () => {
        return <View style={styles.flatListPadding}/>
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
                            data={chatList}
                            renderItem={_renderChatItem}
                            keyExtractor={(item, index) => item.date ? item.date : item.id }
                            inverted
                            ListHeaderComponent={ListHeaderComponent}
                        />
                    </View>
                    <SendMessage onPress_Send={_onPress_SendMessage}/>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default ChatScreen;
