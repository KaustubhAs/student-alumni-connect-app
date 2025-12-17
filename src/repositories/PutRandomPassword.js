/* eslint-disable import/no-anonymous-default-export */

import axios from 'axios';
import baseDomain from './url.js';

const baseURL = `${baseDomain}`;

/* istanbul ignore next */ 
export default {
    /**
     * Calls the NodeJS API
     * 
     * @return {Promise<any>}
     */
    putRandomPassword(dt) {
        return axios.put(baseURL, dt)
    }
};