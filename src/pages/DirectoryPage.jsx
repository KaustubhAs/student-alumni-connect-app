import AllProfiles from '../components/AllProfiles';
import Header from '../components/Header';
import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.div`
    display: flex;
`;

const DirectoryPage = ({ userProfile, setOther }) => {

    return (
        <>
            <Header userProfile={userProfile}/>
            <Wrapper>
                <AllProfiles setOther={setOther}/>
            </Wrapper>
        </>
    )
};

DirectoryPage.prototypes = {
    // loggedInUser: PropTypes.string.isRequired,
}

export default DirectoryPage;