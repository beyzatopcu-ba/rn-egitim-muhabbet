import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default Colors => StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors[cn.chat.background],
    },
    container: {
        flex: 1,
        paddingHorizontal: Metrics.marginHorizontal,
    },
    chatContainer: {
        flexGrow: 1,
        backgroundColor: 'pink'
    },
    messageAreaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: Metrics.width * 0.05,
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
    },
    iconContainer: {
        width: Metrics.width * 0.1,
        height: undefined,
        aspectRatio: 1,
    }
});
