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
    postConnectionInsert(InsertData) {
        return axios.post('http://localhost:5000/connectionInsert', InsertData)
    }
};