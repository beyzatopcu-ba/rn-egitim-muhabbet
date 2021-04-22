import React from 'react';
import { Text } from 'react-native';
import MessageBox from './MessageBox';

import styles from '../styles/IncomingMessageBoxStyles';

const IncomingMessageBox = props => {
    const {message} = props.messageData;
    return (
        <MessageBox message={'gelen: ' + message}/>
    );
};

export default IncomingMessageBox;
