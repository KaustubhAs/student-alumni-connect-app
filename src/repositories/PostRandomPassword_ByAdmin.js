/* eslint-disable import/no-anonymous-default-export */

import axios from 'axios';
import baseDomain from './url.js';

const baseURL = `${baseDomain}`;

export default {
    /**
     * Calls the NodeJS API
     * 
     * @return {Promise<any>}
     */
    postRandomPassword_ByAdmin(dt) {
        return axios.patch(baseURL, dt)
    }
};