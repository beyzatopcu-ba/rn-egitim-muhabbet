import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default Colors => StyleSheet.create({
    messageAreaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: Metrics.width * 0.02,
        paddingHorizontal: Metrics.marginHorizontal,
    },
    inputContainer: {
        flexGrow: 1,
        flexShrink: 1,
        borderWidth: 1,
        borderColor: Colors[cn.chat.messageInputBorder],
        borderRadius: Metrics.borderRadiusStandard,
        paddingHorizontal: Metrics.width * 0.03,
        paddingTop: Metrics.width * 0.02,
        paddingBottom: Metrics.width * 0.03,
        justifyContent: 'center',
        maxHeight: Metrics.width * 0.3,
        minHeight: Metrics.width * 0.13,
        marginRight: Metrics.width * 0.05,
        backgroundColor: Colors[cn.chat.messageInputBackground],
    },
    input: {
        color: Colors[cn.chat.messageInputText],
        fontFamily: Fonts.type.medium,
        fontSize: Fonts.size(16),
        paddingVertical: 0,
    },
    iconContainer: {
        width: Metrics.width * 0.1,
        height: undefined,
        aspectRatio: 1,
    },
    transitionsContainer: {
        position: 'absolute',
        top: Metrics.width * 0.02 * -3,
    },
    linearGradient: {
        height: Metrics.width * 0.02 * 3,
        width: Metrics.width,
    },
    transition1: {
        width: Metrics.width,
        height: Metrics.width * 0.02,
        backgroundColor: Colors[cn.chat.transition1]
    },
    transition2: {
        width: Metrics.width,
        height: Metrics.width * 0.02,
        backgroundColor: Colors[cn.chat.transition2]
    },
    transition3: {
        width: Metrics.width,
        height: Metrics.width * 0.02,
        backgroundColor: Colors[cn.chat.transition3]
    },
});
