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
    },
    chatContainer: {
        flexGrow: 1,
    },
});
