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
    getProfilesByNameSearch(dt) {
        // const dt = {
        // "FirstName": "",
        // "LastName" : "",
        // "JobTitle" : "",
        // "Mentoring" : "",
        // "University" : "",
        // "CompanyName" : "",
        // "Industry" : ""
        // }
        return Repository.get(`getProfilesByNameSearch?FirstName=${dt.FirstName}&LastName=${dt.FirstName}&JobTitle=${dt.JobTitle}&Mentoring=${dt.Mentoring}&University=${dt.University}&CompanyName=${dt.CompanyName}&Industry=${dt.Industry}`)
    },
};