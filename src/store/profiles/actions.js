import { RepositoryFactory } from '../../repositories/RepositoryFactory';

export const SET_ALL_PROFILES = 'SET_ALL_PROFILES'

const ProfilesRepository = RepositoryFactory.get('profiles')

// Actions
// export function setAllProfiles(profilesDictionary) {
//     const profilesList = Object.keys(profilesDictionary.students).map(function(key){
//         return profilesDictionary.students[key];
//     });
//     return {
//         type: SET_ALL_PROFILES,
//         profiles: profilesList,
//     };
// };
export function setAllProfiles(profilesList) {
    return {
        type: SET_ALL_PROFILES,
        backend: profilesList,
    };
};

// Effects
export const loadAllProfiles = () => async dispatch => {
    const response = await ProfilesRepository.getAllProfiles();
    return dispatch(setAllProfiles(response.data));
}
