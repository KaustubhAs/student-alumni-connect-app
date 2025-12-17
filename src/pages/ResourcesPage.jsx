import React from 'react';
import Header from '../components/Header';
// import styled from 'styled-components';
import { Box } from '@mui/material';
import Resrc from "../components/Resrc";

// const Wrapper = styled.div`
//     display: flex;
//     width: 100%;
// `;

const ResourcesPage = ({ userProfile }) => {
    return (
        <>
            <Header userProfile={userProfile}/>
            {/* <Wrapper>
                <h1>Resources</h1>
            </Wrapper> */}
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                    // maxWidth: 300,
                    borderRadius: 1,
                }}
            >
                <Resrc />
                <Resrc />
                <Resrc />
                <Resrc />
                <Resrc />
                <Resrc />
                <Resrc />
                <Resrc />
            </Box>
        </>
    )
}

export default ResourcesPage;