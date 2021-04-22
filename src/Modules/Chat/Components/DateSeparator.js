import React from 'react';
import { Text } from 'react-native';

import styles from '../styles/DateSeparatorStyles';

const DateSeparator = props => {
    return (
        <Text>{props.dateText}</Text>
    );
};

export default DateSeparator;
