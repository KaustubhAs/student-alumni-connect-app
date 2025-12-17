import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import { Grid, CardActionArea, CardActions } from '@mui/material';
import AdminDelete from '../components/AdminDelete';
import AdminEdit from '../components/AdminEdit';
import AdminAdd from '../components/AdminAdd';
import AdminStatusPost from '../components/AdminStatusPost';
import { useNavigate } from "react-router-dom";
import AdminPutRandomPassword from '../components/AdminPutRandomPassword';
import AdminPostChoosePassword from '../components/AdminPostChoosePassword';


const AdminPage = () => {
    let navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
        window.location.reload();
    }

    return (
        <>
            <Box sx={{ flexGrow: 1, marginBottom: "20px" }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography
                            variant="h4"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, fontWeight: 'bold' }}
                        >
                            Admin Console
                        </Typography>

                        <Button color="inherit" onClick={handleLogout}>Logout</Button>

                    </Toolbar>
                </AppBar>
            </Box>
            <Grid container spacing={{ xs: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    {/* ------------------------------------------- */}
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Delete User
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Admin can enter a UserName to delete corresponding account.
                                    This user and their account will be removed from the database permanently.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            {/* <Button size="small" color="primary">
                                Open
                            </Button> */}
                            <AdminDelete />
                        </CardActions>
                    </Card>
                </Grid>
                {/* ------------------------------------------- */}
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Edit User
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Admin can enter a UserName to edit informations about the corresponding account.
                                    New information about this user and their account will be updated into the database.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            {/* <Button size="small" color="primary">
                                Open
                            </Button> */}
                            <AdminEdit />
                        </CardActions>
                    </Card>
                </Grid>
                {/* ------------------------------------------- */}
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Set Admin Status
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Current Admin can change any user's admin status. The admin can set status
                                    of current non-admin user to become admin, or the admin can set status of
                                    current admin user to become non-admin.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            {/* <Button size="small" color="primary">
                                Open
                            </Button> */}
                            <AdminStatusPost />
                        </CardActions>
                    </Card>
                </Grid>
                {/* ------------------------------------------- */}
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Change Password
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Admin can help user change their password. Information needed includes
                                    username of intended account for password change, and password of choice.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <AdminPutRandomPassword />
                            <AdminPostChoosePassword />
                        </CardActions>
                    </Card>
                </Grid>
                {/* ------------------------------------------- */}
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Add User
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Admin can create a new user account by entering all required and/or
                                    optional fields about the user. UserID will be automatically generated.
                                    UserName can be choosen.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <AdminAdd />
                        </CardActions>
                    </Card>
                </Grid>
                {/* ------------------------------------------- */}
                {/* <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Admin Documentation
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    This documentation is written for admin to learn, consult,
                                    and revise their access and control to the database of Paphya and the
                                    app at large.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Open
                            </Button>
                        </CardActions>
                    </Card>
                </Grid> */}
            </Grid>
        </>
    )
}


export default AdminPage;