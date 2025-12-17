import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadLogin } from '../store/auth/actions';
import { loadGetAdminStatus } from '../store/adminStatus_Get/actions';
import { useNavigate } from 'react-router-dom';
import ForgetPasswordDialog from './ForgetPasswordDialog';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import picture from '../images/bg.jpg';
import RegistrationDialog from './RegistrationDialog';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            Paphya {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();


const LogInPage = ({ setToken, setLoggedInUser }) => {
    const [inputUsername, setInputUsername] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [wrongLogin, setWrongLogin] = useState(false);

    const handleWrongLoginOpen = () => {
        setWrongLogin(true);
    };

    const handleWrongLoginClose = () => {
        setWrongLogin(false);
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    /* istanbul ignore next */
    const handleLogIn = async (loginData) => {
        const result = await dispatch(loadLogin(loginData));
        const adminStatus = await dispatch(loadGetAdminStatus(inputUsername));
        if (result.login[0].matched === 1) {
            setToken(result.login[0]);
            setLoggedInUser(inputUsername);
            localStorage.setItem("username", inputUsername);
            if (adminStatus?.backend?.message?.Admin === 1) {
                localStorage.setItem("Admin", "Yes");
                navigate('/admin');
            } else if (adminStatus?.backend?.message?.Admin === 0) {
                localStorage.setItem("Admin", "No");
                navigate('/directory');
            }
        } else {
            handleWrongLoginOpen();
        };
    };

    const handleUsername = (e) => {
        setInputUsername(e.target.value)
    }
    const handlePassword = (e) => {
        setInputPassword(e.target.value)
    }
    const loginData = {
        UserName: inputUsername,
        Password: inputPassword,
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main">
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                >
                    <img src={picture} alt='' height={'1000vh'} />
                </Grid>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: '#FF7518' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Log In
                        </Typography>

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Username"
                            id="login-username"
                            inputProps={{ "data-testid": "login-username" }}
                            placeholder="santa2022"
                            onChange={handleUsername}
                            name="Username"
                            autoComplete="Username"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="login-password"
                            inputProps={{ "data-testid": "login-password" }}
                            placeholder="Password!"
                            onChange={handlePassword}
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="Log In"
                            fullWidth
                            variant="contained"
                            onClick={() => { handleLogIn(loginData) }}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Log In
                        </Button>

                        <Grid container>
                            <Grid item mr={3} mb={2}>
                                <ForgetPasswordDialog />
                            </Grid>
                            <Grid item>
                                <RegistrationDialog />
                            </Grid>
                        </Grid>
                        <Copyright sx={{ mt: 5 }} />
                    </Box>
                    {/* </Box> */}
                </Grid>
            </Grid>
            <Dialog
                open={wrongLogin}
                onClose={handleWrongLoginClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Login Failed"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Your username or password is incorrect.
                        Please try again.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleWrongLoginClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    )
}

LogInPage.prototypes = {
    setToken: PropTypes.func.isRequired,
    setLoggedInUser: PropTypes.func.isRequired,
}

export default LogInPage;
