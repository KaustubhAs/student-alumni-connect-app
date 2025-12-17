import { type } from 'ramda';
import { getOtherProfile, getOtherProfileState } from '../../../src/store/otherProfile/selectors';

describe('Test getOtherProfile selector', () => {
    it('Should return result of type object', () => {
        const mockProfile = {
            content: [
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
        };
        const selected = getOtherProfile.resultFunc(mockProfile);
        expect(type(selected[0])).toEqual("Object");
        expect(selected[0].FullName).toEqual("Santa Claus")
    });

    it("Should return getOtherProfile state", () => {
        const state = getOtherProfileState();
        expect(state).toEqual({});
    });
});