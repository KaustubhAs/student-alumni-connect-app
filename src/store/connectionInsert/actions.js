import { RepositoryFactory } from '../../repositories/RepositoryFactory';

const Repository = RepositoryFactory.get('connectionInsert')

// Effects
export const performConnectionInsert = (InsertData) => async () => {
    await Repository.postConnectionInsert(InsertData)
        .catch((error) => {
            return error;
        });
}
