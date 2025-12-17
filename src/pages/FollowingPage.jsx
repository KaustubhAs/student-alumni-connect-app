import React, { useEffect } from 'react';
import Header from '../components/Header';
import { Box, Card, CardContent, Grid, Stack, Typography, Chip } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { getAllConnection } from '../store/allConnections/selectors';
import { loadAllConnection } from '../store/allConnections/actions';
import { getAllProfiles } from '../store/profiles/selectors';
import { loadAllProfiles } from '../store/profiles/actions';
import { useNavigate } from "react-router-dom";
import useRiver from '../store/useRiver';

const FollowingPage = ({ userProfile }) => {
    const dispatch = useDispatch();
    const connections = useSelector(getAllConnection);
    const directory = useSelector(getAllProfiles);
    const { setOther } = useRiver();
    let navigate = useNavigate();

    useEffect(() => {
        if (!connections || connections.length === 0) {
            dispatch(loadAllConnection());
        }
        if (!directory || directory.length === 0) {
            dispatch(loadAllProfiles());
        }
    }, [dispatch, connections, directory]);

    const findUser = (targetUserName) => {
        if (!directory) return null;
        return directory.find(u => u.UserName.toLowerCase() === targetUserName.toLowerCase());
    }

    const handleSelect = (username) => {
        // Assume setOther is available via props or context if needed, 
        // but here we just navigate. ViewConnections uses setOther from props.
        // We can pass setOther in index.js if needed, or just navigate.
        // navigating to /other-profile/:username should trigger load in ViewOtherProfile.
        navigate(`/other-profile/${username}`);
    }

    const myUsername = localStorage.getItem('username')?.replace(/"/g, '')?.toLowerCase();

    // console.log("FollowingPage Debug:", { myUsername, connections, directory });

    return (
        <>
            <Header userProfile={userProfile} />
            <Box sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom>Following</Typography>
                <Grid container spacing={3}>
                    {Array.isArray(connections) && connections.map(con => {
                        const nameOne = con.NameOne?.toLowerCase();
                        const nameTwo = con.NameTwo?.toLowerCase();

                        // Log each connection to debug
                        // console.log("Checking connection:", { nameOne, nameTwo, myUsername });

                        const isMe = nameOne === myUsername;
                        const targetUser = isMe ? con.NameTwo : null;

                        if (!targetUser) return null;

                        const profile = findUser(targetUser);
                        if (!profile) return null;

                        return (
                            <Grid item xs={12} sm={6} md={4} key={con.ConnectionID}>
                                <Card sx={{ cursor: 'pointer' }} onClick={() => navigate(`/chat/${profile.UserName}`)}>
                                    <CardContent>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <Box>
                                                <Typography variant="h6">{profile.FirstName} {profile.LastName}</Typography>
                                                <Typography variant="body2" color="text.secondary">{profile.JobTitle}</Typography>
                                                <Typography variant="body2" color="primary">{profile.UserType}</Typography>
                                            </Box>
                                            {profile.Mentoring === "Mentor" &&
                                                <Chip label="Mentor" color="success" size="small" />
                                            }
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
                {(!connections || connections.length === 0) && <Typography>You are not following anyone yet.</Typography>}
            </Box>
        </>
    )
}

export default FollowingPage;