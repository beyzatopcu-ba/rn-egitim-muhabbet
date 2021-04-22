import React from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Icon from '../../../Components/Icon';
import { Metrics, Svgs } from '../../../StylingConstants';

import { tn, useLocalization } from '../../Localization';
import { cn, useThemedValues } from '../../Theming';
import SendMessage from '../Components/SendMessage';
import getStyles from '../styles/ChatScreenStyles';

const ChatScreen = props => {

    const { styles, colors } = useThemedValues(getStyles);
    const loc = useLocalization();

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView 
            style={{flex:1}} 
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            keyboardVerticalOffset={Metrics.navBarHeight * 1.6}
            >
                <TouchableOpacity style={styles.container} activeOpacity={1} onPress={Keyboard.dismiss}>
                    <View style={styles.chatContainer}></View>
                    <SendMessage />
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default ChatScreen;
