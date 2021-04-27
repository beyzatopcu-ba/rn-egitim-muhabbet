import React, { useRef, useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
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

    const [inputText, setInputText] = useState('');

    const { styles, colors } = useThemedValues(getStyles);
    const loc = useLocalization();

    const _onPress_Send = () => {
        if (inputText.length === 0) return;
        setInputText('');
        props.onPress_Send(inputText)
    }

    return (

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
                    value={inputText}
                    onChangeText={setInputText}
                    multiline
                    placeholder={loc.t(tn.startWriting)}
                    placeholderTextColor={colors[cn.chat.messageInputPlaceholder]}
                    style={styles.input} />
                <TouchableOpacity style={styles.cameraIconContainer} onPress={props.onPress_Camera}>
                    <Icon svg={Svgs.Camera} iconStyle={{color: 'grey'}}/>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.iconContainer} onPress={_onPress_Send}>
                <Icon svg={Svgs.Send} iconStyle={{ color: colors[cn.chat.sendIcon] }} />
            </TouchableOpacity>
        </View>
        
    );
};

export default SendMessage;
