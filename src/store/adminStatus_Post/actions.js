import { RepositoryFactory } from '../../repositories/RepositoryFactory';

const AdminRepository = RepositoryFactory.get('adminStatus_Post')

// Effects
export const loadPostAdminStatus = async (data) => {
    await AdminRepository.postAdminStatus(data);
}
