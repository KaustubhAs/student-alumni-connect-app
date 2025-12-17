import { RepositoryFactory } from '../../repositories/RepositoryFactory';

const EducationTableRepository = RepositoryFactory.get('editEducationTable')

// Effects
export const performEditEducationTable = (editData) => async () => {
    await EducationTableRepository.patchEducationTable(editData)
        .catch((error) => {
            return error;
        });;
}
