import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default Colors => StyleSheet.create({
    container: {
        marginVertical: Metrics.width * 0.03,
    },
    text: {
        fontFamily: Fonts.type.bold,
    },
    optionTouchable: {
        flexDirection: 'row',
        marginTop: Metrics.width * 0.02,
        alignItems: 'center',
    },
    iconContainer: {
        width: Metrics.width * 0.04,
        height: undefined,
        aspectRatio: 1,
        marginRight: Metrics.width * 0.03,
    },
    optionTitleText: {
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size(16),
        color: Colors[cn.settings.radioButtonText],
    },
});
