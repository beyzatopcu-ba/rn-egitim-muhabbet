import React, { useRef, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';
import { cn, useThemedColors, useThemedValues } from '../../Theming';

import styles from '../styles/MapScreenStyles';

const MapScreen = props => {

    const colors = useThemedColors();
    const [selectedLocation, setSelectedLocation] = useState(null);

    const _onPress_Send = () => {
        props.navigation.navigate("chat-screen", {
            selectedLocation
        });
    }

    return (

        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity onPress={props.navigation.goBack} style={styles.backTouchable}>
                            <Text style={styles.backText}>{"<"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconContainer} onPress={_onPress_Send}>
                            <Icon svg={Svgs.Send} iconStyle={{ color: colors[cn.chat.sendIcon] }} />
                        </TouchableOpacity>
                    </View>

                </SafeAreaView>
            </View>
        </View>
    );
};

export default MapScreen;
