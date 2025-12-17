/* eslint-disable import/no-anonymous-default-export */

import axios from 'axios';

const baseDomain = 'http://localhost:5000';
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
    getLogin(UserName, Password) {
        return Repository.get(`login?UserName=${UserName}&Password=${Password}`)
    }
};