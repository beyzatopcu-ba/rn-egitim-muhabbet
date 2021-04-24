
// Gün bakımından mesajları karşılaştırır
const compareChatDates = (chat1, chat2) => {
    // chat1, chat2'den bir veya daha fazla gün önce yazıldıysa -1
    if (chat1.dateMoment.isBefore(chat2.dateMoment, 'day')) {
        return -1;
    }
    // chat1, chat2'den bir veya daha fazla gün sonra yazıldıysa +1
    if (chat1.dateMoment.isAfter(chat2.dateMoment, 'day')) {
        return 1;
    }

    // Aynı günde yazıldılarsa 0 döndür
    return 0;
}

// Moment cinsinden verilen tarihi, lokale göre string e çevirip döndürür
const getLocaleDateString = (dateMoment, localeDateFormat) => {
    return dateMoment.format(localeDateFormat);
}

export const createChatDataForRender = (chatList, localeDateFormat) => {
    // ...
    return [];
}