/* eslint-disable import/no-anonymous-default-export */

import axios from 'axios';

const baseDomain = '';
const baseURL = `${baseDomain}`;
const Repository = axios.create({
    baseURL,
});

export default {
    /**
     * Calls the NodeJS API
     * 
     * @return {Promise<any>}
     */
    getCheckUniqueUsername(inputUsername) {
        return Repository.get(`username?UserName=${inputUsername}`)
    }
};