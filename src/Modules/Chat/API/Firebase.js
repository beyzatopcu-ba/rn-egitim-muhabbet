import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { convertChatList } from "./ChatConverter";

export const getData = (onChatDataRetrieved) => {
    database()
        .ref('/chats')
        .on('value', snapshot => {
            const rawData = snapshot.val();
            const convertedChatList = convertChatList(rawData, auth().currentUser.uid);
            onChatDataRetrieved(convertedChatList);
        });
    /*
    // API'den chat data'sını iste (obje geliyor)
    const rawData = DummyRawData;
    // Convert işlemini yaptır
    const convertedData = convertChatList(rawData, currentUserId);

    // Döndür
    return convertedData;
    */

    return [];
}