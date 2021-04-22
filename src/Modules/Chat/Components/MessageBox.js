import React from 'react';
import { Text } from 'react-native';

import styles from '../styles/MessageBoxStyles';

const MessageBox = props => {
    return (
        <Text>{props.message}</Text>
    );
};

export default MessageBox;
