import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import {LocalizationActionCreators, LocalizationSelectors} from './LocalizationRedux';
import I18n from './I18nConfig';
import { Locales } from "./LocalizationConstants";
import { tn } from "./Texts";

export function useLocaleOptions() {
    const locale = useLocale();
    const loc = useLocalization();

    const localeOptions = useMemo(() => {
        return [
            {
                key: Locales.english,
                title: loc.t(tn.english),
            },
            {
                key: Locales.turkish,
                title: loc.t(tn.turkish),
            }
        ]
    }, [locale]);

    return localeOptions;
}

export function useLocale() {
    const currentLocale = useSelector(LocalizationSelectors.locale);
    return currentLocale;
};

export function useLocalization() {
    const currentLocale = useLocale();
    const localizationAgent = useMemo(() => {
        I18n.locale = currentLocale;
        return I18n;
    }, [currentLocale]);

    return localizationAgent;
}

export function useChangeLocale() {
    const dispatch = useDispatch();
    return (locale) => {
        dispatch(LocalizationActionCreators.changeLocale(locale));
    };
}