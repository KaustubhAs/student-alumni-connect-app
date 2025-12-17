import { SET_RANDOM_PASSWORD } from './actions';

export const initialState = {
    content: []
};

export default function randomPasswordReducer(initState = initialState, action) {
    switch (action.type) {
        case SET_RANDOM_PASSWORD:
            return {...initState, content: action.backend};
        default:
            return initState;
    }
}
