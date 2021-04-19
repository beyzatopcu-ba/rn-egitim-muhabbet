import {StyleSheet} from 'react-native';
import {Fonts} from '../../../StylingConstants';
import { colorNames } from '../../Theming/Colors';

const styles = (Colors) => StyleSheet.create({
    touchable: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: Fonts.type.bold,
        fontSize: Fonts.size(18),
        color: Colors[colorNames.auth.coloredButtonText],
    },
});

export default styles;
