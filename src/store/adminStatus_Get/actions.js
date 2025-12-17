import { RepositoryFactory } from '../../repositories/RepositoryFactory';

export const GET_ADMIN_STATUS = 'GET_ADMIN_STATUS'

const AdminRepository = RepositoryFactory.get('adminStatus_Get')

// Actions
export function setGetAdminStatus(result) {
    return {
        type: GET_ADMIN_STATUS,
        backend: result,
    };
};

// Effects
export const loadGetAdminStatus = username => async dispatch => {
    const response = await AdminRepository.getAdminStatus(username);
    return dispatch(setGetAdminStatus(response.data));
}
