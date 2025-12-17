import { RepositoryFactory } from '../../repositories/RepositoryFactory';

export const SET_ALL_CONNECTION = 'SET_ALL_CONNECTION'

const ConnectionRepository = RepositoryFactory.get('connection')

export function setAllConnection(connectionList) {
    return {
        type: SET_ALL_CONNECTION,
        backend: connectionList,
    };
};

// Effects
export const loadAllConnection = () => async dispatch => {
    const answer = await ConnectionRepository.getAllConnection();
    dispatch(setAllConnection(answer.data))
    return answer.data;
}
