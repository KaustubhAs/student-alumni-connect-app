import { RepositoryFactory } from '../../repositories/RepositoryFactory';

const AddressTableRepository = RepositoryFactory.get('editAddressTable')

// Effects
export const performEditAddressTable = (editData) => async () => {
    await AddressTableRepository.patchAddressTable(editData)
        .catch((error) => {
            return error;
        });
}
