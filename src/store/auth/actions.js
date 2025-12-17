import { RepositoryFactory } from '../../repositories/RepositoryFactory';

export const SET_LOG_IN = 'SET_LOG_IN'

const LoginRepository = RepositoryFactory.get('login')

// Actions
export function setLogin(loginResult) {
    return {
        type: SET_LOG_IN,
        login: loginResult,
    };
};

// Effects
export const loadLogin = loginData => async dispatch => {
    const response = await LoginRepository.getLogin(loginData.UserName, loginData.Password);
    return dispatch(setLogin(response.data));
}
