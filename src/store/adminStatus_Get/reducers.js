import { GET_ADMIN_STATUS } from './actions';

export const initialState = {
    content: {},
};

export default function getAdminStatusReducer(initState = initialState, action) {
    switch (action.type) {
        case GET_ADMIN_STATUS:
            return {...initState, backend: action.content};
        default:
            return initState;
    }
}
