import { StyleSheet } from 'react-native';
import { cn } from '../../Theming';
import { Fonts, Metrics } from '../../../StylingConstants';

export default Colors => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors[cn.settings.background],
        padding: Metrics.marginHorizontal,
    },
    nameText: {
        fontSize: Fonts.size(18),
        marginBottom: Metrics.width * 0.01,
        color: Colors[cn.settings.usernameText],
    },
    emailText: {
        fontSize: Fonts.size(16),
        color: Colors[cn.settings.userEmailText],
    },
    menusContainer: {
        flexGrow: 1,
    },
    signOutTouchable: {
        height: Metrics.boxNormalHeight,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Metrics.borderRadiusStandard,
        borderWidth: 2,
        borderColor: Colors[cn.settings.signOutButtonBorder],
        backgroundColor: Colors[cn.settings.signOutButtonBackground],
    },
    signOutText: {
        fontSize: Fonts.size(18),
        color: Colors[cn.settings.signOutButtonText],
    }
});
