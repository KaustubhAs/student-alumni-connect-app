import { RepositoryFactory } from '../../repositories/RepositoryFactory';

const adminInsertTableRepository = RepositoryFactory.get('postAdminInsert')

// Effects
export const performadminInsertTableRepository = (InsertData) => async () => {
    console.log("middle", InsertData);
    await adminInsertTableRepository.postAdminInsert(InsertData);
}
