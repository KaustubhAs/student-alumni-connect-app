import axios from 'axios';
import baseDomain from './url.js';

const baseURL = `${baseDomain}`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    /**
     * Calls the NodeJS API
     * 
     * @return {Promise<any>}
     */
    deleteByAdmin(username) {
        return axios.delete(`${baseURL}?UserName=${username}`)}
};