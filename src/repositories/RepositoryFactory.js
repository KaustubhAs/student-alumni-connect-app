import GetAllProfiles from './GetAllProfiles';
import GetProfilesByNameSearch from './GetProfilesByNameSearch';
import GetProfileByUserName from './GetProfileByUserName';
import GetLogin from './GetLogin';
import PatchUserTable from './PatchUserTable';
import PatchAddressTable from './PatchAddressTable';
import PatchEducationTable from './PatchEducationTable';
import PatchCompanyInfoTable from './PatchCompanyInfoTable';
import DeleteByAdmin from './DeleteByAdmin';
import GetAdminStatus from './GetAdminStatus';
import PostAdminStatus from './PostAdminStatus';
import PostRandomPassword_ByAdmin from './PostRandomPassword_ByAdmin';
import PostAdminInsert from './PostAdminInsert';
import GetAllConnection from './GetAllConnection';
import PostConnectionInsert from './PostConnectionInsert';
import PutRandomPassword from './PutRandomPassword';
import GetCheckUniqueUsername from './GetCheckUniqueUsername';

/* istanbul ignore next */ 
export function loadJsonData() {
    return window.location.href.startsWith('http://localhost:3000')
}

const repositories = {
    profiles: GetAllProfiles,
    profilesByNameSearch: GetProfilesByNameSearch,
    profileByUserName: GetProfileByUserName,
    login: GetLogin,
    editUserTable: PatchUserTable,
    editAddressTable: PatchAddressTable,
    editEducationTable: PatchEducationTable,
    editCompanyInfoTable: PatchCompanyInfoTable,
    adminDelete: DeleteByAdmin,
    adminStatus_Get: GetAdminStatus,
    adminStatus_Post: PostAdminStatus,
    admin_Post_Password: PostRandomPassword_ByAdmin,
    postAdminInsert: PostAdminInsert,
    connection: GetAllConnection,
    connectionInsert: PostConnectionInsert,
    admin_Put_Password: PutRandomPassword,
    unique_username: GetCheckUniqueUsername,
};

export const RepositoryFactory = {
    get: name => repositories[name],
}