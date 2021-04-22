import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default Colors => StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: Metrics.width * 0.05,
    },
    line: {
        width: Metrics.width,
        height: StyleSheet.hairlineWidth * 5,
        backgroundColor: Colors[cn.chat.dateSeparatorBackground],
    },
    textContainer: {
        backgroundColor: Colors[cn.chat.dateSeparatorBackground],
        paddingHorizontal: Metrics.width * 0.03,
        paddingVertical: Metrics.width * 0.015,
        borderBottomLeftRadius: Metrics.borderRadiusStandard,
        borderBottomRightRadius: Metrics.borderRadiusStandard,
    },
    text: {
        fontFamily: Fonts.type.semibold,
        fontSize: Fonts.size(14),
        color: Colors[cn.chat.dateSeparatorText],
    }
});
