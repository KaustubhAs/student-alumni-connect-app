import React, { useEffect, useState } from 'react';
import UserProfile from '../components/UserProfile';
import Header from '../components/Header';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import picture from '../images/profile.jpeg';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { getAllConnection } from '../store/allConnections/selectors';
import { useDispatch } from 'react-redux';
import { performConnectionInsert } from '../store/connectionInsert/actions';
import { loadAllConnection } from '../store/allConnections/actions';
import useRiver from '../store/useRiver';
import CheckIcon from '@mui/icons-material/Check';


const Wrapper = styled.div`
    display: flex;
`;

export const SideBar = styled.div`
    display: block;
    width: 25%;
    margin: 2%;
    margin-top: 5%;
`;


const ViewOtherProfile = ({ userProfile, otherProfile }) => {

    const dispatch = useDispatch();
    const { refresh, setRefresh } = useRiver();

    const you = otherProfile?.at(0)?.UserName.toLowerCase();
    // const me = userProfile?.at(0)?.UserName.toLowerCase();
    const me = localStorage.getItem('username')?.replace(/"/g, '')?.toLowerCase();

    console.log("ViewOtherProfile:", { me, you, userProfile, otherProfile });

    const connections = useSelector(getAllConnection);

    useEffect(() => {
        if (!connections || connections.length === 0 || refresh) {
            dispatch(loadAllConnection());
            setRefresh(false)
        }
    }, [dispatch, connections, refresh, setRefresh]);

    let connectedness;
    /* istanbul ignore next */
    Object.keys(connections).forEach(x => connectedness = connections[x].NameOne.toLowerCase() === me && connections[x].NameTwo.toLowerCase() === you ? connections[x] : connectedness)

    /* istanbul ignore next */
    // const connectionData1 = {
    //     NameOne: you,
    //     NameTwo: me,
    // }

    /* istanbul ignore next */
    const connectionData2 = {
        NameOne: me,
        NameTwo: you,
    }

    const [disableStable, setDisableStatus] = useState(false)
    const [connectButtonTag, setConnectButtonTag] = useState("Follow")

    /* istanbul ignore next */
    const handleConnect = async () => {
        if (!me || !you) {
            console.error("handleConnect: Missing user info", { me, you });
            return;
        }
        setDisableStatus(true);
        // await dispatch(performConnectionInsert(connectionData1));
        await dispatch(performConnectionInsert(connectionData2));
        setRefresh(true);
        setConnectButtonTag("Followed");
    }

    return (
        <>
            <Header userProfile={userProfile} />
            <Wrapper>
                <SideBar>
                    <img src={picture} alt='' width={"100%"} style={{ "border-radius": "50%" }} />

                    <Box textAlign='center'>

                        {
                            /* istanbul ignore next */
                            (me === you) ? <></> :
                                (connectedness !== undefined || connectButtonTag === "Followed" ?
                                    <Button variant="contained"
                                        color="success"
                                        endIcon={<CheckIcon />}
                                    >
                                        Followed
                                    </Button> :
                                    <Button variant="contained"
                                        onClick={handleConnect}
                                        disabled={disableStable}
                                    >
                                        {connectButtonTag}
                                    </Button>
                                )
                        }

                    </Box>

                </SideBar>
                <UserProfile
                    user={otherProfile}
                    headerTitle={
                        /* istanbul ignore next */
                        `Visiting: ${otherProfile?.at(0)?.FirstName} ${otherProfile?.at(0)?.LastName}` === " " ? "No Name" : `${otherProfile?.at(0)?.FirstName} ${otherProfile?.at(0)?.LastName}`
                    } />
            </Wrapper>
        </>
    )
};

ViewOtherProfile.prototypes = {
    userProfile: PropTypes.object.isRequired,
    otherProfile: PropTypes.object.isRequired,
}

export default ViewOtherProfile;