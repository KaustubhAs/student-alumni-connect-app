import { RepositoryFactory } from '../../repositories/RepositoryFactory';

export const SET_USER_PROFILE = 'SET_USER_PROFILE'

const ProfilesRepository = RepositoryFactory.get('profileByUserName')

export function setProfileByUserName(result) {
    return {
        type: SET_USER_PROFILE,
        backend: result,
    };
};

// Effects
export const loadUserProfile = (userName) => async dispatch => {
    const response = await ProfilesRepository.getProfileByUserName(userName);
    return dispatch(setProfileByUserName(response.data));
}
