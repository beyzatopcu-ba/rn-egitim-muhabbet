import { Platform } from "react-native"
import messaging from '@react-native-firebase/messaging';

export const subscribeToFCM = () => {
    if (Platform.OS === 'ios') return;

    messaging().subscribeToTopic('chat');
}

export const unsubscribeFromFCM = () => {
    if (Platform.OS === 'ios') return;

    messaging().unsubscribeFromTopic('chat');
}