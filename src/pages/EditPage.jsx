import React from 'react';
import EditComponent from '../components/EditComponent';
import Header from '../components/Header';
import styled from 'styled-components';
import picture from '../images/profile.jpeg';


const Wrapper = styled.div`
    display: flex;
`;

export const SideBar = styled.div`
    display: block;
    width: 25%;
    margin: 2%;
    margin-top: 5%;
`;

/* istanbul ignore next */
const EditPage = ({ userProfile }) => {
    return (
        <>
            <Header userProfile={userProfile}/>
            <Wrapper>
                <SideBar>
                    <img src={picture} alt='' width={"100%"} style={{"border-radius":"50%"}}/>
                </SideBar>
              <EditComponent userProfile={userProfile} />
            </Wrapper>
        </>
    )
}

export default EditPage;