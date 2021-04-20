import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocalization, tn, useLocale } from "../Localization";
import { darkColors, lightColors } from "./Colors";
import { ThemingActionCreators, ThemingSelectors } from "./Redux/ThemingRedux";
import { ThemeModes } from "./ThemingConstants";

export function useThemeOptions() {
    const locale = useLocale();
    const loc = useLocalization();

    const themeOptions = useMemo(() => {
        return [
            {
                key: ThemeModes.dark,
                title: loc.t(tn.dark),
            },
            {
                key: ThemeModes.light,
                title: loc.t(tn.light),
            }
        ]
    }, [locale]);

    return themeOptions;
}

export function useTheme() {
    const themeMode = useSelector(ThemingSelectors.themeMode);
    return themeMode;
}

export function useThemedColors() {
    const themeMode = useTheme();

    // Memoization
    const themedColors = useMemo(() => {

        const colors = themeMode === ThemeModes.light ?
            lightColors : darkColors;

        return colors;

    }, [themeMode]);

    return themedColors;
}

export function useThemedStyles(getStyles, params) {
    const colors = useThemedColors();

    const themedStyles = useMemo(() => {
        const styles = getStyles(colors, params);
        return styles;
    }, [colors, getStyles, params]);
    return themedStyles;
}

export function useThemedValues(getStyles, params) {
    const themedColors = useThemedColors();
    const themedStyles = useThemedStyles(getStyles, params);

    return {
        colors: themedColors,
        styles: themedStyles,
    }
}

export function useChangeTheme() {
    const dispatch = useDispatch();
    return (themeMode) => dispatch(ThemingActionCreators.changeTheme(themeMode));
}