import { combineReducers } from 'redux';
import userProfileReducer from './profileByUserName/reducers';
import allProfilesReducer from './profiles/reducers';
import loginReducer from './auth/reducers'
import otherProfileReducer from './otherProfile/reducers';
import allConnectionReducer from './allConnections/reducers';
import randonPasswordReducer from './adminPassword_Put/reducers';
import checkUniqueUsernameReducer from './uniqueUsername/reducers';

const rootReducer = combineReducers({
    login: loginReducer,
    profiles: allProfilesReducer,
    userProfile: userProfileReducer,
    otherProfile: otherProfileReducer,
    connection: allConnectionReducer,
    admin_Put_Password: randonPasswordReducer,
    unique_username: checkUniqueUsernameReducer,
});

export default rootReducer;