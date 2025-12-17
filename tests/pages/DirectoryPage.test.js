import React from 'react';
import DirectoryPage from '../../src/pages/DirectoryPage';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })

const mockProfile = [
    {
        "UserID":1,
        "FullName":"Santa Claus",
        "FirstName":"Santa",
        "LastName":"Claus",
        "UserName":"santa2022",
        "ProfilePic":"",
        "Pronouns":"they/them/theirs",
        "Bio":"On spring break",
        "Phone":"+1 444-777-9999",
        "Email":"santa@mailinator.edu",
        "JobTitle":"Admin","Mentoring":"Admin",
        "LastUpdate":"01/01/2022",
        "Password":"LYNCNOSYNCSOTwp",
        "Admin":"Yes",
        "Street":" FRANKLIN ST",
        "City":" OAKLAND",
        "District":"Lower South Snearind",
        "State":" IA",
        "Country":"USA","Postcode":"94607",
        "Latitude":"31°34'N",
        "Longitude":"85°15'W",
        "University":"Wesleyan University",
        "Major1":"Chemistry - Physical Chemistry",
        "Major2":"",
        "ClassYear":1990,
        "UniOrg1":"Strictly Social",
        "UniOrg2":"",
        "UniOrg3":"",
        "OtherEduDegree":"",
        "OtherEduMajor":"",
        "OtherEduClassYear":""
    }
]

describe('Render Directory Page', () => {

    it('Render Directory Page', () => {
        const wrapper = shallow(<DirectoryPage userProfile={mockProfile} />);
        expect(wrapper).toBeTruthy();
    });
});
