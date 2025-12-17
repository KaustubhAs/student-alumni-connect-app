import { RepositoryFactory } from '../../repositories/RepositoryFactory';

export const SET_OTHER_PROFILE = 'SET_OTHER_PROFILE'

const ProfilesRepository = RepositoryFactory.get('profileByUserName')

export function setOtherProfile(result) {
    return {
        type: SET_OTHER_PROFILE,
        backend: result,
    };
};

// Effects
export const loadOtherProfile = (userName) => async dispatch => {
    const response = await ProfilesRepository.getProfileByUserName(userName);
    return dispatch(setOtherProfile(response.data));
}
