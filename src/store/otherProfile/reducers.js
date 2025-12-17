import { SET_OTHER_PROFILE } from './actions';

export const initialState = {
    content: []
};

export default function otherProfileReducer(initState = initialState, action) {
    switch (action.type) {
        case SET_OTHER_PROFILE:
            return {...initState, content: action.backend};
        default:
            return initState;
    }
}
