import React from 'react';
import { Text } from 'react-native';
import MessageBox from './MessageBox';

import styles from '../styles/SentMessageBoxStyles';

const SentMessageBox = props => {
    const {message} = props.messageData;
    return (
        <MessageBox message={'giden: ' + message}/>
    );
};

export default SentMessageBox;
