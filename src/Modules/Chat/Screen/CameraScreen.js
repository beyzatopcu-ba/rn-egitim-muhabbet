import React, { useRef, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Modal from 'react-native-modal';

import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';
import PhotoPreview from '../Components/PhotoPreview';

import styles from '../styles/CameraScreenStyles';

const CameraScreen = props => {

    const refCamera = useRef();
    const [isPreviewVisible, setIsPreviewVisible] = useState(false);
    const [base64image, setBase64Image] = useState('');
    

    const _onPress_TakePicture = async () => {
        if (refCamera.current) {
            const options = { quality: 0.5, base64: true };
            const data = await refCamera.current.takePictureAsync(options);
            setIsPreviewVisible(true);
            setBase64Image(data.base64);
        }
    }

    const _onPress_Send = () => {
        props.navigation.navigation("chat-screen", {
            base64image
        });
    }

    return (
        <>
            <RNCamera
                style={styles.camera}
                ref={rnCameraRef => refCamera.current = rnCameraRef}
                style={styles.camera}
                type={RNCamera.Constants.Type.back}
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
                        <TouchableOpacity style={styles.cameraTouchable} onPress={_onPress_TakePicture}>
                            <Icon svg={Svgs.Camera} iconStyle={{ color: 'orange' }} />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </RNCamera>
            <Modal isVisible={isPreviewVisible} style={{margin: 0}}>
                <PhotoPreview 
                    base64image={base64image}
                    onPress_Send={_onPress_Send}
                    onPress_Cancel={() => setIsPreviewVisible(false)}
                    />
            </Modal>
        </>
    );
};

export default CameraScreen;
