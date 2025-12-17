import { useState } from 'react';

export default function useToken() {
    
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.matched;
    };
    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.matched);
    };

    const getLoggedInUser = () => {
        const usernameString = localStorage.getItem('username');
        const username = JSON.parse(usernameString);
        return username;
    };
    const [loggedInUser, setLoggedInUser] = useState(getLoggedInUser());

    const saveLoggedInUser = username => {
        localStorage.setItem('username', JSON.stringify(username));
        setLoggedInUser(username);
    };

    return {
        setToken: saveToken,
        token,
        setLoggedInUser: saveLoggedInUser,
        loggedInUser,
    }
}