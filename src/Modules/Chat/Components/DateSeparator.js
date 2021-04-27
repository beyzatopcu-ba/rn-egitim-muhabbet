import React from 'react';
import { Text, View } from 'react-native';
import { useThemedStyles } from '../../Theming';

import getStyles from '../styles/DateSeparatorStyles';

const DateSeparator = props => {
    const styles = useThemedStyles(getStyles);
    return (
        <View style={styles.container}>
            <View style={styles.line} />
            <View style={styles.textContainer}>
                <Text style={styles.text}>{props.dateText}</Text>
            </View>
        </View>
    );
};

export default React.memo(DateSeparator);
