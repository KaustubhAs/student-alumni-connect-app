import { RepositoryFactory } from '../../repositories/RepositoryFactory';

const UserTableRepository = RepositoryFactory.get('editUserTable')

// Effects
export const performEditUserTable = (editData) => async () => {
    await UserTableRepository.patchUserTable(editData)
        .catch((error) => {
            return error;
        });
}
