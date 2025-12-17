import { RepositoryFactory } from '../../repositories/RepositoryFactory';

export const SET_RANDOM_PASSWORD = 'SET_RANDOM_PASSWORD'

const AdminRepository = RepositoryFactory.get('admin_Put_Password')

/* istanbul ignore next */ 
export function setRandomPassword(resultString) {
    return {
        type: SET_RANDOM_PASSWORD,
        backend: resultString,
    };
};

// Effects
/* istanbul ignore next */ 
export const performPutRandomPassword = (putData) => async dispatch => {
    const response = await AdminRepository.putRandomPassword(putData)
        .catch((error) => {
            return error;
        });
    return dispatch(setRandomPassword(response.data.message.split(" ").slice(-1)[0].replace(".", "")))
}
