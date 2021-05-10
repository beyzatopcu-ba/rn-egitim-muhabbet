import { Platform } from "react-native"
import messaging from '@react-native-firebase/messaging';
import Axios from 'axios';
import { isObject } from "validate.js";

const axios = Axios.create({
    baseURL: 'https://fcm.googleapis.com/fcm/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'key=AAAA0us2pEo:APA91bHSoWtfxKJBdG_IPuOWczJKg5CqZdIQ6MLhqMiXHVkj9muMIBMr-LslKdVoOLVsRYqgMPdFwreGgMcY22_uEbU7Ewk9E3wsnsyalGPKSgRab8ZejiAxMgSOUAC9FyOExeXlQiUU',
    },
})

export const subscribeToFCM = () => {
    if (Platform.OS === 'ios') return;

    messaging().subscribeToTopic('chat');
}

export const unsubscribeFromFCM = () => {
    if (Platform.OS === 'ios') return;

    messaging().unsubscribeFromTopic('chat');
}

export const sendNewMessageNotification = (message, notificationTitle) => {
    const notification = {
        title: notificationTitle,
    }

    // Fotoğraf veya konum ise
    if (message.base64Image) {
        notification.body = 'Fotoğraf';
    }
    else if (message.location) {
        notification.body = 'Konum';
    }
    else {
        notification.body = message;
    }

    axios.post('send', {
        notification,
        to: '/topics/chat',
    })
    .then(response => console.log('Notification sent successfully', response))
    .catch(error => console.log('Sending notification failed', error));

}