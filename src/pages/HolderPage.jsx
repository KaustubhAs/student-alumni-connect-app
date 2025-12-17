import React from 'react';
import Header from '../components/Header';
// import styled from 'styled-components';

// const Wrapper = styled.div`
//     display: flex;
// `;

const HolderPage = ({ userProfile }) => {
    return (
        <>
            <Header userProfile={userProfile}/>
            {/* <Wrapper>
            <h1>Content Coming Soon!</h1>
            </Wrapper> */}
        </>
    )
}

export default HolderPage;