
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

const checkChat = (chat, nextChat) => {
    // Listedeki ilk mesaj mı (nextChat = null / undefined)
    const isFirstOnList = !nextChat;
    // Chat ile nextChat arası tarih farkı 1 günden fazla mı
    const isFirstOnDay = nextChat ? compareChatDates(chat, nextChat) === 1 : true;
    // Bir önceki mesaj başka birinin mi (chat.senderId != nextChat.senderId)
    const isFirstBySender = nextChat ? chat.senderId !== nextChat.senderId : true;

    return {
        isFirstOnList,
        isFirstOnDay,
        isFirstBySender,
    }
}

const getHasSenderName = (chat, nextChat) => {
    const {
        isFirstOnDay,
        isFirstOnList,
        isFirstBySender
    } = checkChat(chat, nextChat);

    return isFirstBySender || isFirstOnDay || isFirstOnList;
}

const getDateSeparatorIfNecessary = (chat, nextChat, localeDateFormat) => {
    const {
        isFirstOnDay,
        isFirstOnList,
    } = checkChat(chat, nextChat);

    if (isFirstOnList || isFirstOnDay) {
        let dateSeparator = {
            date: getLocaleDateString(chat.dateMoment, localeDateFormat),
        };
        return dateSeparator;
    }

    return null;
}

export const createChatDataForRender = (chatList, localeDateFormat) => {
    chatList.reverse();
    let dataList = [];

    let chat;
    let nextChat;
    let dateSeparator;
    for (let i = 0; i < chatList.length; i++) {
        chat = chatList[i];
        nextChat = chatList[i+1];

        chat.hasSenderName = getHasSenderName(chat, nextChat);
        dataList.push(chat);

        dateSeparator = getDateSeparatorIfNecessary(chat, nextChat, localeDateFormat);
        dateSeparator && dataList.push(dateSeparator);
    }

    return dataList;
}