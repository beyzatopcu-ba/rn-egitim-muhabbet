import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';

import styles from '../styles/CameraScreenStyles';

const CameraScreen = props => {
    return (
        <RNCamera
            style={styles.camera}
            ref={ref => {
                // this.camera = ref;
            }}
            style={styles.camera}
            type={RNCamera.Constants.Type.front}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
            }}
            >
            <SafeAreaView style={styles.container}>
                <TouchableOpacity onPress={props.navigation.goBack} style={styles.backTouchable}>
                    <Text style={styles.backText}>{"<"}</Text>
                </TouchableOpacity>
                <View style={styles.cameraTouchableContainer}>
                    <TouchableOpacity style={styles.cameraTouchable}>
                        <Icon svg={Svgs.Camera} iconStyle={{ color: 'orange' }} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </RNCamera>
    );
};

export default CameraScreen;
