import { RepositoryFactory } from '../../repositories/RepositoryFactory';

export const SET_ALL_PROFILES_BY_NAME_SEARCH = 'SET_ALL_PROFILES_BY_NAME_SEARCH'

const ProfilesByNameSearchRepository = RepositoryFactory.get('profilesByNameSearch')

// Actions

export function setProfilesByNameSearch(profilesList) {
    return {
        type: SET_ALL_PROFILES_BY_NAME_SEARCH,
        profiles: profilesList,
    };
};

// Effects

export const loadProfilesByNameSearch = filterData => async dispatch => {
    const response = await ProfilesByNameSearchRepository.getProfilesByNameSearch(filterData);
    return dispatch(setProfilesByNameSearch(response.data));
}
