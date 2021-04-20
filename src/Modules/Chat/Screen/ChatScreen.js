import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ChatScreen = props => {
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('settings-screen')}>
            <Text>Ayarlara git</Text>
        </TouchableOpacity>
    );
};

export default ChatScreen;
