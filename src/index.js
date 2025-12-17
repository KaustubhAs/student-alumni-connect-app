import React from 'react';
import ReactDOM from 'react-dom';
import DirectoryPage from './pages/DirectoryPage.jsx';
import LogInPage from './pages/LoginPage.jsx';
import ViewProfilePage from './pages/ViewProfilePage.jsx';
import ViewOtherProfile from './pages/ViewOtherProfile.jsx';
import AdminPage from './pages/AdminPage.jsx';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter, useRoutes, Route, Routes, Navigate } from 'react-router-dom';
import configureStore from './store/configureStore';
import useToken from './store/useToken';
import useRiver from './store/useRiver';
import { getProfileByUserName } from './store/profileByUserName/selectors';
import { getOtherProfile } from './store/otherProfile/selectors';
import { loadUserProfile } from './store/profileByUserName/actions';
import { loadOtherProfile } from './store/otherProfile/actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import SignUpContainer from './repositories/SignUpContainer.js';
import FollowingPage from './pages/FollowingPage.jsx';
import ResourcesPage from './pages/ResourcesPage.jsx';
import EditPage from './pages/EditPage.jsx';
import HolderPage from './pages/HolderPage.jsx';
import ChatPage from './pages/ChatPage.jsx';

const store = configureStore();

const DefinedRoutes = ({ loggedInUser, setToken, setLoggedInUser }) => {

    const dispatch = useDispatch();
    const userProfile = useSelector(getProfileByUserName);
    const { otherUserName, setOther } = useRiver();
    const otherProfile = useSelector(getOtherProfile);

    useEffect(() => {
        if (!userProfile || userProfile.length === 0) {
            dispatch(loadUserProfile(loggedInUser));
        }
    }, [loggedInUser, userProfile, dispatch]);

    useEffect(() => {
        if (!otherProfile || otherProfile.length === 0 || otherProfile[0].UserName.toLowerCase() !== otherUserName.toLowerCase()) {
            dispatch(loadOtherProfile(otherUserName.toLowerCase()));
        }
    }, [otherUserName, otherProfile, dispatch]);

    const adminStatus = localStorage.getItem('Admin');

    return useRoutes([
        { path: '/directory', element: <DirectoryPage userProfile={userProfile} setOther={setOther} /> },
        { path: '/following', element: (adminStatus === "No" ? <FollowingPage userProfile={userProfile} /> : <AdminPage />) },
        { path: '/resources', element: <ResourcesPage userProfile={userProfile} /> },
        { path: '/view-profile/', element: <ViewProfilePage userProfile={userProfile} setOther={setOther} /> },
        { path: `/other-profile/${otherUserName}`, element: <ViewOtherProfile userProfile={userProfile} otherProfile={otherProfile} setOther={setOther} /> },
        { path: `/#/other-profile/${otherUserName}`, element: <ViewOtherProfile userProfile={userProfile} otherProfile={otherProfile} setOther={setOther} /> },
        { path: '/edit', element: <EditPage userProfile={userProfile} /> },
        { path: '/admin', element: (adminStatus === "Yes" ? <AdminPage /> : (adminStatus === "No" ? <Navigate replace to="/directory" /> : <></>)) },
        { path: '/faq', element: <HolderPage userProfile={userProfile} /> },
        { path: '/chat', element: <ChatPage userProfile={userProfile} /> },
        { path: '/chat/:username', element: <ChatPage userProfile={userProfile} /> },
        { path: '*', element: (adminStatus === "Yes" ? <Navigate replace to="/admin" /> : (adminStatus === "No" ? <Navigate replace to="/directory" /> : <></>)) },
    ])
};

const Welcome = () => {
    const { token, setToken, loggedInUser, setLoggedInUser } = useToken();

    if (token !== 1) {
        return (
            <ReduxProvider store={store}>
                <BrowserRouter>

                    {/* Whatever path you're on, if you're not already logged in, you'll be redicted to the LOGIN page */}

                    {/* <Routes>
                        <Route path="/" element={<LogInPage setToken={setToken} setLoggedInUser={setLoggedInUser} />} />
                    </Routes> */}

                    {/* <Routes>
                        <Route path="/login" element={<LogInPage setToken={setToken} setLoggedInUser={setLoggedInUser} />} />
                    </Routes> */}

                    <Routes>
                        <Route path="*" element={<LogInPage setToken={setToken} setLoggedInUser={setLoggedInUser} />} />
                    </Routes>

                </BrowserRouter>
            </ReduxProvider>
        )
    } else {
        return (
            <ReduxProvider store={store}>
                <BrowserRouter>
                    <DefinedRoutes loggedInUser={loggedInUser} setToken={setToken} setLoggedInUser={setLoggedInUser} />
                </BrowserRouter>
            </ReduxProvider>
        )
    }
};

export default Welcome;

ReactDOM.render(<Welcome />, document.getElementById('root'));
