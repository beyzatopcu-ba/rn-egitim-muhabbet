const constantColors = {
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',
    mainColor1: '#30D086', // green
    mainColor2: '#FF7E39', // orange
    greys: {
        1: '#383838',
        2: '#ACACAC',
        3: '#868686',
        4: '#BCBCBC',
    },
};

const toRGBA = (hexCode, opacity) => {
    let hex = hexCode.replace('#', '');

    if (hex.length === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r},${g},${b},${opacity / 100})`;
};

const auth = {
    background: 'auth/background',
    inputBorder: 'auth/inputBorder',
    inputBackground: 'auth/inputBackground',
    inputText: 'auth/inputText',
    inputPlaceholder: 'auth/inputPlaceholder',
    coloredButtonBackground: 'auth/coloredButtonBackground',
    coloredButtonText: 'auth/coloredButtonText',
    paleButtonBackground: 'auth/paleButtonBackground',
    paleButtonText: 'auth/paleButtonText',
    appNameText: 'auth/appNameText',
}

const chat = {
    background: 'chat/background',
    incomingMessageBoxBackground: 'chat/incomingMessageBoxBackground',
    incomingMessageText: 'chat/incomingMessageText',
    incomingMessageTimeText: 'chat/incomingMessageTimeText',
    sentMessageBoxBackground: 'chat/sentMessageBoxBackground',
    sentMessageBoxBorder: 'chat/sentMessageBoxBorder',
    sentMessageText: 'chat/sentMessageText',
    sentMessageTimeText: 'chat/sentMessageTimeText',
    dateSeparatorBackground: 'chat/dateSeparatorBackground',
    dateSeparatorText: 'chat/dateSeparatorText',
    messageInputBackground: 'chat/messageInputBackground',
    messageInputBorder: 'chat/messageInputBorder',
    messageInputPlaceholder: 'chat/messageInputPlaceholder',
    messageInputText: 'chat/messageInputText',
    sendIcon: 'chat/sendIcon',
    messageAreaBackground: 'chat/messageAreaBackground',
    transition1: 'chat/transition1',
    transition2: 'chat/transition2',
    transition3: 'chat/transition3',
}

const settings = {
    background: 'settings/background',
    usernameText: 'settings/usernameText',
    userEmailText: 'setting/userEmailText',
    titleText: 'settings/titleText',
    radioButtonUnselectedIcon: 'settings/radioButtonUnselectedIcon',
    radioButtonSelectedIcon: 'settings/radioButtonSelectedIcon',
    radioButtonText: 'settings/radioButtonText',
    signOutButtonBackground: 'settings/signOutButtonBackground',
    signOutButtonBorder: 'settings/signOutButtonBorder',
    signOutButtonText: 'settings/signOutButtonText',
}

const header = {
    background: 'header/background',
    text: 'header/text',
    backIcon: 'header/backIcon',
    rightIcon: 'header/rightIcon',
}

// cn: color names
export const cn = {
    auth,
    chat,
    settings,
    header,
}

export const darkColors = {
    // auth
    [auth.background]: constantColors.mainColor1,
    [auth.inputBorder]: constantColors.greys[1],
    [auth.inputBackground]: toRGBA(constantColors.greys[1], 10),
    [auth.inputText]: constantColors.greys[1],
    [auth.inputPlaceholder]: toRGBA(constantColors.greys[1], 40),
    [auth.coloredButtonBackground]: constantColors.greys[1],
    [auth.coloredButtonText]: constantColors.white,
    [auth.paleButtonBackground]: constantColors.transparent,
    [auth.paleButtonText]: constantColors.greys[1],
    [auth.appNameText]: constantColors.greys[1],
    // chat
    [chat.background]: constantColors.greys[1],
    [chat.incomingMessageBoxBackground]: constantColors.transparent,
    [chat.incomingMessageText]: constantColors.white,
    [chat.incomingMessageTimeText]: constantColors.greys[2],
    [chat.sentMessageBoxBackground]: constantColors.mainColor2,
    [chat.sentMessageBoxBorder]: constantColors.mainColor2,
    [chat.sentMessageText]: constantColors.greys[1],
    [chat.sentMessageTimeText]: toRGBA(constantColors.black, 40),
    [chat.dateSeparatorBackground]: constantColors.mainColor1,
    [chat.dateSeparatorText]: constantColors.greys[1],
    [chat.messageInputBackground]: constantColors.transparent,
    [chat.messageInputBorder]: constantColors.greys[2],
    [chat.messageInputPlaceholder]: constantColors.greys[3],
    [chat.messageInputText]: constantColors.white,
    [chat.sendIcon]: constantColors.mainColor1,
    [chat.transition1]: toRGBA(constantColors.greys[1], 80),
    [chat.transition2]: toRGBA(constantColors.greys[1], 50),
    [chat.transition3]: toRGBA(constantColors.greys[1], 10),
    // settings
    [settings.background]: constantColors.greys[1],
    [settings.usernameText]: constantColors.white,
    [settings.userEmailText]: constantColors.white,
    [settings.titleText]: constantColors.mainColor2,
    [settings.radioButtonUnselectedIcon]: constantColors.greys[2],
    [settings.radioButtonSelectedIcon]: constantColors.mainColor2,
    [settings.radioButtonText]: constantColors.white,
    [settings.signOutButtonBackground]: constantColors.transparent,
    [settings.signOutButtonBorder]: constantColors.mainColor2,
    [settings.signOutButtonText]: constantColors.white,
    // header
    [header.background]: constantColors.mainColor1,
    [header.text]: constantColors.greys[1],
    [header.backIcon]: constantColors.greys[1],
    [header.rightIcon]: constantColors.greys[1],
};

export const lightColors = {
    // auth
    [auth.background]: constantColors.mainColor1,
    [auth.inputBorder]: constantColors.white,
    [auth.inputBackground]: toRGBA(constantColors.white, 20),
    [auth.inputText]: constantColors.white,
    [auth.inputPlaceholder]: toRGBA(constantColors.white, 60),
    [auth.coloredButtonBackground]: constantColors.white,
    [auth.coloredButtonText]: constantColors.mainColor2,
    [auth.paleButtonBackground]: constantColors.transparent,
    [auth.paleButtonText]: constantColors.white,
    [auth.appNameText]: constantColors.white,
    // chat
    [chat.background]: constantColors.white,
    [chat.incomingMessageBoxBackground]: constantColors.transparent,
    [chat.incomingMessageText]: constantColors.black,
    [chat.incomingMessageTimeText]: constantColors.greys[2],
    [chat.sentMessageBoxBackground]: constantColors.mainColor2,
    [chat.sentMessageBoxBorder]: constantColors.mainColor2,
    [chat.sentMessageText]: constantColors.white,
    [chat.sentMessageTimeText]: toRGBA(constantColors.white, 80),
    [chat.dateSeparatorBackground]: constantColors.mainColor1,
    [chat.dateSeparatorText]: constantColors.white,
    [chat.messageInputBackground]: constantColors.transparent,
    [chat.messageInputBorder]: constantColors.greys[2],
    [chat.messageInputPlaceholder]: constantColors.greys[4],
    [chat.messageInputText]: constantColors.black,
    [chat.sendIcon]: constantColors.mainColor1,
    [chat.transition1]: toRGBA(constantColors.white, 80),
    [chat.transition2]: toRGBA(constantColors.white, 50),
    [chat.transition3]: toRGBA(constantColors.white, 20),
    // settings
    [settings.background]: constantColors.white,
    [settings.usernameText]: constantColors.black,
    [settings.userEmailText]: constantColors.black,
    [settings.titleText]: constantColors.mainColor2,
    [settings.radioButtonUnselectedIcon]: constantColors.greys[2],
    [settings.radioButtonSelectedIcon]: constantColors.mainColor2,
    [settings.radioButtonText]: constantColors.black,
    [settings.signOutButtonBackground]: constantColors.transparent,
    [settings.signOutButtonBorder]: constantColors.mainColor2,
    [settings.signOutButtonText]: constantColors.black,
    // header
    [header.background]: constantColors.mainColor1,
    [header.text]: constantColors.white,
    [header.backIcon]: constantColors.white,
    [header.rightIcon]: constantColors.white,
}
