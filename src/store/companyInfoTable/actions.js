import { RepositoryFactory } from '../../repositories/RepositoryFactory';

const CompanyInfoTableRepository = RepositoryFactory.get('editCompanyInfoTable')

// Effects
export const performEditCompanyInfoTable = (editData) => async () => {
    await CompanyInfoTableRepository.patchCompanyInfoTable(editData)
        .catch((error) => {
            return error;
        });
}
