import React from 'react';
import UserProfile from '../components/UserProfile';
import ViewConnections from '../components/ViewConnections';
import Header from '../components/Header';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import picture from '../images/profile.jpeg';
import Box from '@mui/material/Box';


const Wrapper = styled.div`
    display: flex;
`;

export const SideBar = styled.div`
    display: block;
    width: 25%;
    margin: 2%;
    margin-top: 5%;
`;

const ViewProfilePage = ({ userProfile, setOther }) => {
    
    return (
        <>
            <Header userProfile={userProfile} />
            <Wrapper>
                <SideBar>
                    <img src={picture} alt='' width={"100%"} style={{"border-radius":"50%"}}/>
                    <Box textAlign='center'>
                        <ViewConnections setOther = {setOther}/>
                    </Box>
                </SideBar>
                <UserProfile 
                    user={userProfile} 
                    headerTitle={
                        /* istanbul ignore next */
                        `${userProfile?.at(0)?.FirstName} ${userProfile?.at(0)?.LastName}` === " " ? "No Name" : `${userProfile?.at(0)?.FirstName} ${userProfile?.at(0)?.LastName}`
                    } 
                />
            </Wrapper>
        </>
    )
};

ViewProfilePage.prototypes = {
    userProfile: PropTypes.object.isRequired,
}

export default ViewProfilePage;