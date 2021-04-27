import database from '@react-native-firebase/database';
import moment from 'moment';
import { getCurrentUser } from '../../Auth';
import { convertChatList } from "./ChatConverter";
import { sendNewMessageNotification } from '../../PushNotification';


const timeFormatWithMS = "HH:mm:ss";
const dateFormat = "MM/DD/YYYY";

export const getData = (onChatDataRetrieved) => {
    database()
        .ref('/chats')
        .on('value', snapshot => {
            const rawData = snapshot.val();
            const convertedChatList = convertChatList(rawData, getCurrentUser().uid);
            onChatDataRetrieved(convertedChatList);
        });

    return () => {
        database().ref('/chats').off('value');
    }
}

export const sendMessage = (message, getLocalizedTitle) => {
    const newChatReference = database()
        .ref('/chats')
        .push();

    let now = moment();
    const chat = {
        id: newChatReference.key,
        senderId: getCurrentUser().uid,
        senderName: getCurrentUser().displayName,
        message,
        time: now.format(timeFormatWithMS),
        date: now.format(dateFormat),
    };

    console.log(getLocalizedTitle(getCurrentUser().displayName))

    newChatReference
        .set(chat)
        .then(() => {
            sendNewMessageNotification(
                message, 
                getLocalizedTitle(getCurrentUser().displayName)
            );
        });
}