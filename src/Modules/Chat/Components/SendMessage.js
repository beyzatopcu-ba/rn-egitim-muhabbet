import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';
import { tn, useLocalization } from '../../Localization';
import { cn, useThemedValues } from '../../Theming';
import LinearGradient from 'react-native-linear-gradient';


{/* <View style={styles.transition3} />
<View style={styles.transition2} />
<View style={styles.transition1} /> */}
import getStyles from '../styles/SendMessageStyles';

const SendMessage = props => {
    const { styles, colors } = useThemedValues(getStyles);
    const loc = useLocalization();
    return (
        
            // <LinearGradient
            //     style={{ height: 20, width: 300 }}
        //     locations={[0, 0.5, 0.6]}
        //     colors={['#4c669f', '#3b5998', '#192f6a']}
        // /> 

        < View style={styles.messageAreaContainer} >
            <View style={styles.transitionsContainer}>
                <LinearGradient
                    style={styles.linearGradient}
                    locations={[0, 0.6, 0.9]}
                    colors={[
                        colors[cn.chat.transition3],
                        colors[cn.chat.transition2],
                        colors[cn.chat.transition1],
                    ]}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    multiline
                    placeholder={loc.t(tn.startWriting)}
                    placeholderTextColor={colors[cn.chat.messageInputPlaceholder]}
                    style={styles.input} />
            </View>
            <View style={styles.iconContainer}>
                <Icon svg={Svgs.Send} iconStyle={{ color: colors[cn.chat.sendIcon] }} />
            </View>
        </View>
        
    );
};

export default SendMessage;
