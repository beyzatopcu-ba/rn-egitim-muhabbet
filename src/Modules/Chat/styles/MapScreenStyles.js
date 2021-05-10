import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';

export default StyleSheet.create({
    container: {
        width: Metrics.width,
        height: Metrics.height,
        position: 'absolute',
    },
    map: {
        flex: 1,
    },
    backTouchable: {
        position: 'absolute',
        left: Metrics.width * 0.05,
        top: Metrics.width * 0.05,
        backgroundColor: 'white',
        width: Metrics.width * 0.15,
        height: undefined,
        aspectRatio: 1,
        borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 5,
    },
    backText: {
        fontSize: Fonts.size(50),
        lineHeight: Metrics.width * 0.13,
    },
    iconContainer: {
        position: 'absolute',
        right: Metrics.width * 0.1,
        bottom: Metrics.width * 0.1,
        width: Metrics.width * 0.2,
        paddingVertical: Metrics.width * 0.05,
        paddingLeft: Metrics.width * 0.02,
        height: undefined,
        aspectRatio: 1,
        borderRadius: 1000,
        backgroundColor: 'white',
        zIndex: 5,
    },

});
