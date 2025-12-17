import { SET_ALL_PROFILES_BY_NAME_SEARCH } from './actions';

export const initialState = {
    profiles: []
};

export default function filterProfilesReducer(initState = initialState, action) {
    switch (action.type) {
        case SET_ALL_PROFILES_BY_NAME_SEARCH:
            return {...initState, profiles: action.profiles};
        default:
            return initState;
    }
}
