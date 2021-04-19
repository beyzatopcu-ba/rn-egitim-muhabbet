import { useMemo } from "react";
import { useSelector } from "react-redux";
import { darkColors, lightColors } from "./Colors";
import { ThemingSelectors } from "./Redux/ThemingRedux";
import { ThemeModes } from "./ThemingConstants";


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