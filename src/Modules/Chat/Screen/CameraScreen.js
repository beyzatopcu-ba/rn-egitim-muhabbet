import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';

import styles from '../styles/CameraScreenStyles';

const CameraScreen = props => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={props.navigation.goBack} style={styles.backTouchable}>
                <Text style={styles.backText}>{"<"}</Text>
            </TouchableOpacity>
            <View style={styles.cameraTouchableContainer}>
                <TouchableOpacity style={styles.cameraTouchable}>
                    <Icon svg={Svgs.Camera} iconStyle={{color: 'orange'}}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default CameraScreen;
