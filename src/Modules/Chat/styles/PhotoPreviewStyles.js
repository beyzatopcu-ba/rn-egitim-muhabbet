import { StyleSheet } from 'react-native';
import { Metrics } from '../../../StylingConstants';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: Metrics.width,
        height: Metrics.height - Metrics.width * 0.25,
        resizeMode: 'contain',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sendTouchable: {
        flex: 0.48,
        backgroundColor: 'lightgreen',
        height: Metrics.width * 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Metrics.borderRadiusStandard
    },
    cancelTouchable: {
        flex: 0.48,
        backgroundColor: 'orange',
        height: Metrics.width * 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Metrics.borderRadiusStandard
    },
});
