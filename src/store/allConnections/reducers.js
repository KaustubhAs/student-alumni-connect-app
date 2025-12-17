import { SET_ALL_CONNECTION } from './actions';

export const initialState = {
    content: []
};

export default function allConnectionReducer(initState = initialState, action) {
    switch (action.type) {
        case SET_ALL_CONNECTION:
            return {...initState, content: action.backend};
        default:
            return initState;
    }
}
