import database from '@react-native-firebase/database';
import moment from 'moment';
import { getCurrentUser } from '../../Auth';
import { convertChatList } from "./ChatConverter";

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

    return [];
}

export const sendMessage = message => {
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

    newChatReference
        .set(chat)
        .then(() => console.log('New message sent'));
}