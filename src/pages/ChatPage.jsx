import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Box, Grid, List, ListItem, ListItemAvatar, ListItemText, Avatar, TextField, Typography, Paper, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getAllConnection } from '../store/allConnections/selectors';
import { loadAllConnection } from '../store/allConnections/actions';
import { getAllProfiles } from '../store/profiles/selectors';
import { loadAllProfiles } from '../store/profiles/actions';

const ChatPage = ({ userProfile }) => {
    const { username } = useParams(); // Selected user from URL
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Data from Redux
    const connections = useSelector(getAllConnection);
    const directory = useSelector(getAllProfiles);

    // Local State
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const currentUser = localStorage.getItem('username')?.replace(/"/g, '')?.toLowerCase();

    // Initial Load
    useEffect(() => {
        if (!connections || connections.length === 0) dispatch(loadAllConnection());
        if (!directory || directory.length === 0) dispatch(loadAllProfiles());
    }, [dispatch, connections, directory]);

    // Poll for messages
    useEffect(() => {
        if (!username || !currentUser) return;

        const fetchMessages = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/getMessages?user1=${currentUser}&user2=${username}`);
                setMessages(res.data);
            } catch (err) {
                console.error("Error fetching messages", err);
            }
        };

        fetchMessages();
        const interval = setInterval(fetchMessages, 3000); // Poll every 3 seconds
        return () => clearInterval(interval);
    }, [username, currentUser]);

    // Filter connections for sidebar
    const myConnections = Array.isArray(connections) ? connections
        .filter(c => c.NameOne?.toLowerCase() === currentUser)
        .map(c => {
            const profile = directory?.find(p => p.UserName.toLowerCase() === c.NameTwo.toLowerCase());
            return { ...c, profile };
        })
        .filter(c => c.profile) : [];

    const handleSendMessage = async () => {
        if (!newMessage.trim()) return;

        try {
            await axios.post('http://localhost:5000/sendMessage', {
                sender: currentUser,
                receiver: username,
                content: newMessage
            });
            setNewMessage("");
            // Immediate refresh
            const res = await axios.get(`http://localhost:5000/getMessages?user1=${currentUser}&user2=${username}`);
            setMessages(res.data);
        } catch (err) {
            console.error("Error sending message", err);
        }
    };

    return (
        <>
            <Header userProfile={userProfile} />
            <Box sx={{ flexGrow: 1, p: 2, height: '90vh', backgroundColor: '#f0f2f5' }}>
                <Grid container sx={{ height: '100%' }}>

                    {/* Sidebar - Contact List */}
                    <Grid item xs={4} sx={{ borderRight: '1px solid #e0e0e0', backgroundColor: 'white', overflowY: 'auto' }}>
                        <List>
                            <ListItem>
                                <Typography variant="h6">Chats</Typography>
                            </ListItem>
                            {myConnections.map((con) => (
                                <ListItem button key={con.ConnectionID}
                                    item
                                    selected={username === con.profile.UserName}
                                    onClick={() => navigate(`/chat/${con.profile.UserName}`)}
                                >
                                    <ListItemAvatar>
                                        <Avatar>{con.profile.FirstName[0]}</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={`${con.profile.FirstName} ${con.profile.LastName}`}
                                        secondary={con.profile.UserType}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>

                    {/* Main Chat Area */}
                    <Grid item xs={8} sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        {username ? (
                            <>
                                {/* Chat Header */}
                                <Paper sx={{ p: 2, mb: 1, backgroundColor: '#ededed' }}>
                                    <Typography variant="h6">
                                        Chat with {directory?.find(u => u.UserName === username)?.FirstName || username}
                                    </Typography>
                                </Paper>

                                {/* Messages Area */}
                                <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2, display: 'flex', flexDirection: 'column' }}>
                                    {messages.map((msg) => (
                                        <Box key={msg.id} sx={{
                                            alignSelf: msg.sender === currentUser ? 'flex-end' : 'flex-start',
                                            backgroundColor: msg.sender === currentUser ? '#dcf8c6' : 'white',
                                            p: 1.5, m: 0.5, borderRadius: '10px',
                                            maxWidth: '70%',
                                            boxShadow: 1
                                        }}>
                                            <Typography variant="body1">{msg.content}</Typography>
                                            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', textAlign: 'right' }}>
                                                {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>

                                {/* Input Area */}
                                <Paper sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
                                    <TextField
                                        fullWidth
                                        placeholder="Type a message"
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                        variant="outlined"
                                        size="small"
                                    />
                                    <IconButton color="primary" onClick={handleSendMessage} sx={{ ml: 1 }}>
                                        <SendIcon />
                                    </IconButton>
                                </Paper>
                            </>
                        ) : (
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <Typography variant="h5" color="text.secondary">Select a connection to start chatting</Typography>
                            </Box>
                        )}
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default ChatPage;
