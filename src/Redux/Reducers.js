// Packages
import { combineReducers } from 'redux';
import { ThemeReducer, THEMING_NAMESPACE } from '../Modules/Theming';
import { LocalizationReducer, LOCALIZATION_NAMESPACE } from '../Modules/Localization';

// Reducers

export default combineReducers({
    [THEMING_NAMESPACE]: ThemeReducer,
    [LOCALIZATION_NAMESPACE]: LocalizationReducer,
});


