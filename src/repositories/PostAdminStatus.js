/* eslint-disable import/no-anonymous-default-export */

import axios from 'axios';
import baseDomain from './url.js';

const baseURL = `${baseDomain}adminAccess`;

export default {
    /**
     * Calls the NodeJS API
     * 
     * @return {Promise<any>}
     */
    postAdminStatus(dt) {
        return axios.post(baseURL, dt)
    }
};