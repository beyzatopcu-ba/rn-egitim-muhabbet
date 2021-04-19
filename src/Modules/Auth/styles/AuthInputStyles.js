import { StyleSheet } from 'react-native';
import {Metrics, Fonts} from '../../../StylingConstants';
import { colorNames } from '../../Theming/Colors';

const styles = (Colors) => StyleSheet.create({
    inputContainer: {
        flex:1,
        paddingHorizontal: Metrics.textMargin,
        backgroundColor: Colors[colorNames.auth.inputBackground],
    },
    input: {
        flex:1,
        fontSize: Fonts.size(18),
        fontFamily: Fonts.type.regular,
        color: Colors[colorNames.auth.inputText],
    },
});

export default styles;
