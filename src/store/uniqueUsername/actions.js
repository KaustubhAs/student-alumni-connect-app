import { RepositoryFactory } from '../../repositories/RepositoryFactory';

const Repo = RepositoryFactory.get('unique_username')

export const SET_USERNAME_UNIQUE_CHECK = 'SET_USERNAME_UNIQUE_CHECK'

export function setCheckUnqiueUsername(result) {
    return {
        type: SET_USERNAME_UNIQUE_CHECK,
        backend: result,
    };
};

// Effects
export const loadCheckUniqueUsername = inputUsername => async dispatch => {
    const response = await Repo.getCheckUniqueUsername(inputUsername);
    return dispatch(setCheckUnqiueUsername(response.data));
}
