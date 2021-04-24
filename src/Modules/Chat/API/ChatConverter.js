const timeFormatWithMS = "HH:mm:ss";
const timeFormatStandard = "HH:mm";
const dateFormatStandard = "MM/DD/YYYY";

const getMomentDate = (date, time) => {
    const dateTimeString = chat.date + '-' + chat.time;
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

export const convertChatList = (chatList, currentUserId) => {
    // YAPILACAK
    return [];
}

