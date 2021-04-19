import React, {useState} from 'react';
import {
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import AuthInput from '../Components/AuthInput';
import AuthButton from '../Components/AuthButton';

import Images from '../../../StylingConstants/Images';

import getStyles from '../styles/AuthScreenStyles';
import { useThemedStyles, useThemedOption } from '../../Theming';
import { Texts, useLocalization, useLocale } from '../../Localization';

const AuthScreen = props => {

    const [isLogin, setIsLogin] = useState(true);

    const styles = useThemedStyles(getStyles);
    const loc = useLocalization();
    const appLogoImage = useThemedOption(Images.appLogoLight, Images.appLogoDark);

    const locale = useLocale();
    const loginUppercase = loc.t(Texts.login).toLocaleUpperCase(locale);
    const signupUppercase = loc.t(Texts.signup).toLocaleUpperCase(locale);

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView style={styles.keyboardAvoiding} behavior={'padding'} keyboardVerticalOffset={0}>
                <View style={styles.container}>
                    <View style={styles.appLogoContainer}>
                        <Image source={appLogoImage} style={styles.image} />
                    </View>
                    <View style={styles.inputsContainer}>
                    {
                            isLogin ?
                                null
                                :
                                <View style={styles.inputContainer}>
                                    <AuthInput
                                        value={props.nameValue}
                                        onChangeText={props.onChangeText_Name}
                                        autoCapitalize={'words'}
                                        placeholder={loc.t(Texts.name)} />
                                </View>
                        }
                        <View style={styles.inputContainer}>
                            <AuthInput
                                value={props.emailValue}
                                onChangeText={props.onChangeText_Email}
                                autoCapitalize={'none'}
                                placeholder={loc.t(Texts.email)} />
                        </View>
                        <View style={styles.inputContainer}>
                            <AuthInput
                                value={props.passwordValue}
                                onChangeText={props.onChangeText_Password}
                                autoCapitalize={'none'}
                                placeholder={loc.t(Texts.password)}
                                secureTextEntry={true} />
                        </View>
                        {
                            isLogin ?
                                null
                                :
                                <View style={styles.inputContainer}>
                                    <AuthInput
                                        value={props.passwordConfirmValue}
                                        onChangeText={props.onChangeText_PasswordConfirm}
                                        autoCapitalize={'none'}
                                        placeholder={loc.t(Texts.passwordConfirm)}
                                        secureTextEntry={true} />
                                </View>
                        }
                    </View>
                    <View style={styles.buttonsContainer}>
                        <AuthButton
                            onPress={isLogin ? props.onPress_SignIn : props.onPress_SignUp}
                            disabled={false}
                            text={isLogin ? loginUppercase : signupUppercase} />
                        <TouchableOpacity style={styles.signupTouchable} onPress={() => setIsLogin(!isLogin)}>
                            <Text style={styles.signupText}>
                                {isLogin ? loc.t(Texts.signup) : loc.t(Texts.login)}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.appNameContainer}>
                        <Text style={styles.appNameText}>MUHABBET</Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );

};

export default AuthScreen;
