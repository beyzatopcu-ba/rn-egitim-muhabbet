import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';

export default StyleSheet.create({
    container: {
        paddingHorizontal: Metrics.marginHorizontal,
    },
    senderNameText: {
        fontFamily: Fonts.type.medium,
        fontSize: Fonts.size(14),
        marginBottom: Metrics.width * 0.01,
    }
});
