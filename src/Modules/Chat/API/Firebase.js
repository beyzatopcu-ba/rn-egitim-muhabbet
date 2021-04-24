import { convertChatList } from "./ChatConverter";
import DummyRawData from "./DummyRawData"

const currentUserId = 'Kk9hGoF0TSh3n4XiCCX7WSdloEF3';

export const getData = () => {
    // API'den chat data'sını iste (obje geliyor)
    const rawData = DummyRawData;
    // Convert işlemini yaptır
    const convertedData = convertChatList(rawData, currentUserId);

    // Döndür
    return convertedData;
}