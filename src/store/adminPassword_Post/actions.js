import { RepositoryFactory } from '../../repositories/RepositoryFactory';

const AdminRepository = RepositoryFactory.get('admin_Post_Password')

// Effects
export const loadAdminPostPassword = async (data) => {
    await AdminRepository.postRandomPassword_ByAdmin(data);
}
