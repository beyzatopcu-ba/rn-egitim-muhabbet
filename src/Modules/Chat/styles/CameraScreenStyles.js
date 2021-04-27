import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    backTouchable: {
        margin: Metrics.marginHorizontal,
        backgroundColor: 'white',
        width: Metrics.width * 0.15,
        height: undefined,
        aspectRatio: 1,
        borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backText: {
        fontSize: Fonts.size(50),
        lineHeight: Metrics.width * 0.13,
    },
    cameraTouchableContainer: {
        alignItems: 'center',
    },
    cameraTouchable: {
        width: Metrics.width * 0.25,
        height: undefined,
        aspectRatio: 1,
        backgroundColor: 'white',
        borderRadius: 1000,
        padding: Metrics.width * 0.05,
        marginBottom: Metrics.width * 0.05,
    }

});
