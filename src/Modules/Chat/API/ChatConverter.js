const timeFormatWithMS = "HH:mm:ss";
const timeFormatStandard = "HH:mm";
const dateFormatStandard = "MM/DD/YYYY";

const getMomentDate = (date, time) => {
    const dateTimeString = date + '-' + time;
    const formatString = dateFormatStandard + '-' + timeFormatWithMS;
    return moment(dateTimeString, formatString);
}

const getTime = (momentDate) => {
    return momentDate.format(timeFormatStandard);
}

const sortByDate = (chatList) => {
    return chatList.sort((chat1, chat2) => {
        if (chat1.dateMoment.isAfter(chat2.dateMoment)) {
            return 1;
        }
        if (chat1.dateMoment.isBefore(chat2.dateMoment)) {
            return -1;
        }

        return 0;
    })
}

const convertSingleChat = (chat, currentUserId) => {
    let dateMoment = getMomentDate(chat.date, chat.time);
    let convertedChat = {
        id: chat.id,
        senderId: chat.senderId,
        senderName: chat.senderName,
        message: chat.message,
        time: getTime(dateMoment),
        color: chat.color,
        dateMoment,
        isMe: chat.senderId === currentUserId,
    };

    return convertedChat;
}

export const convertChatList = (chatList, currentUserId) => {

    if (chatList?.length === 0) {
        return [];
    }

    let convertedChatList = [];

    let chat;
    let convertedChat;
    for (let chatKey in chatList) {
        chat = chatList[chatKey];
        convertedChat = convertSingleChat(chat, currentUserId);
        convertedChatList.push(convertedChat);
    }

    sortByDate(convertedChatList);

    return convertedChatList;
}

