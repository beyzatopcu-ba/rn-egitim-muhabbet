import React from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';

import styles from '../styles/PhotoPreviewStyles';

const PhotoPreview = props => {
    const { base64image } = props;
    console.log(!!base64image)
    // Base64 image kullanımı
    const imageSource = {
        uri: "data:image/png;base64," + base64image,
    };

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={imageSource}/>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.cancelTouchable} onPress={props.onPress_Cancel}>
                    <Text>İptal</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sendTouchable} onPress={props.onPress_Send}>
                    <Text>Gönder</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PhotoPreview;
