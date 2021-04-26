const SenderColors = [
    '#DE6161', // kırmızı
    '#C32E61', // pembemsi kırmızı
    '#C142E6', // cart pembe
    '#DE6CCD', // bebiş pembe
    '#9345FF', // pembemsi mor
    '#7F74FF', // mor
    '#507FFF', // mat mavi
    '#4098FF', // gök mavi
    '#38BBE2', // turkuaz
    '#3BD8BA', // su yeşili
    '#54C17E', // yeşil
    '#2AD31C', // cart yeşil
    '#509A2F', // koyu yeşil
    '#9BC900', // fıstık yeşili
    '#9FA333', // pis yeşil sarı
    '#DDBB03', // bozuk limon
    '#B7912A', // açık çamur
    '#F0B514', // bebiş turuncu
    '#FF9D17', // cart turuncu
    '#AA7020', // kahverengi
    '#DB6A08', // kiremit turuncusu
    '#C73D00', // koyu kırmızı
];

// [{senderId, senderColor},...]
const currentSenderColorData = []; 
const remainingColors = [...SenderColors];

const getExistingSenderColor = senderId => {
    /*
    for (let senderColorData of currentSenderColorData) {
        if (senderColorData.senderId === senderId) {
            return senderColorData.senderColor;
        }
    }

    return null;
    */

    const senderColorData = currentSenderColorData.find(
        item => {
            return item.senderId === senderId;
        }
    )

    return senderColorData?.senderColor;
}

// min ile max arasında random integer döndürüyor. min dahil, max dahil değil
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const pickRandomColor = () => {
    if (remainingColors.length === 0) {
        remainingColors = [...SenderColors];
    }

    const randomIndex = getRandomInt(0, remainingColors.length);
    const randomColor = remainingColors[randomIndex];
    remainingColors.splice(randomIndex, 1);
    return randomColor;
}

const getSenderColor = senderId => {
    let senderColor = getExistingSenderColor(senderId);
    if (!senderColor) {
        senderColor = pickRandomColor();
        currentSenderColorData.push({
            senderId,
            senderColor,
        });
    }

    return senderColor;
}

export const assignColorsToSenders = (chatList, currentUserId) => {
    for (let chat of chatList) {
        if (chat.senderId !== currentUserId) {
            chat.color = getSenderColor(chat.senderId);
        }
    }
}