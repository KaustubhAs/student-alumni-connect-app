import axios from 'axios';
import baseDomain from './url.js';

const baseURL = `${baseDomain}`;
// const Repository = axios.create({
//     baseURL,
// });

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    /**
     * Calls the NodeJS API
     * 
     * @return {Promise<any>}
     */
    patchUserTable(editData) {
        return axios.patch(baseURL, editData)
        // console.log("patch: ", editData);
        // return Repository.patch(`userTable?FullName=${editData.FullName}&FirstName=${editData.FirstName}&LastName=${editData.LastName}&CurrentUserName=${editData.CurrentUserName}&NewUserName=${editData.NewUserName}&ProfilePic=${editData.ProfilePic}&Pronouns=${editData.Pronouns}&Bio=${editData.Bio}&Phone=${editData.Phone}&Email=${editData.Email}&JobTitle=${editData.JobTitle}&Mentoring=${editData.Mentoring}&LastUpdate=${editData.LastUpdate}`)
    }
};