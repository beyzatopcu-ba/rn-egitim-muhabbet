import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';

export default (Colors, params) => StyleSheet.create({
    container: {
        marginVertical: Metrics.width * 0.01,
        flexDirection: 'row',
        justifyContent: params.isMe ? 'flex-end' : 'flex-start',
    },
    boxContainer: {
        borderRadius: Metrics.borderRadiusStandard,
        borderWidth: 1,
        borderColor: params.senderColor,
        maxWidth: Metrics.width * 0.75,
        padding: Metrics.width * 0.025,
        backgroundColor: params.backgroundColor,
    },
    messageText: {
        color: params.messageTextColor,
    },
    timeText: {
        position: 'absolute',
        right: Metrics.width * 0.015,
        bottom: Metrics.width * 0.015,
        color: params.timeTextColor,
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size(10),
    },
    image: {
        width: Metrics.width * 0.5,
        height: undefined,
        aspectRatio: 1,
        resizeMode: 'contain',
        marginBottom: Metrics.width * 0.03,
    },
});
