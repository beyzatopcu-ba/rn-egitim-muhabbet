// Packages
import { combineReducers } from 'redux';
import { ThemeReducer, THEMING_NAMESPACE } from '../Modules/Theming';

// Reducers

export default combineReducers({
    [THEMING_NAMESPACE]: ThemeReducer
});


