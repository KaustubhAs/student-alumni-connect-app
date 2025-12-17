import { RepositoryFactory } from '../../repositories/RepositoryFactory';

const AdminDeleteRepository = RepositoryFactory.get('adminDelete')

// Effects
export const performAdminDelete = async (username) => {
    // console.log("middle: ", username);
    await AdminDeleteRepository.deleteByAdmin(username);
}
