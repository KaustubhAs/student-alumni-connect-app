import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Card from '@mui/material/Card';
import { CardContent, CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { getAllProfiles } from '../store/profiles/selectors';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { getAllConnection } from '../store/allConnections/selectors';
import { loadAllConnection } from '../store/allConnections/actions';
import { useDispatch } from 'react-redux';
import useRiver from '../store/useRiver';

/**

    ***Description**
    
    This is a dialog box component that displays a user's connection(s).
    
    ***Props**
    
    ```text
    setOther: function
    ```

    ***Structure**
    
    This component contains a dialog box with clickable name cards.

    ```jsx
    <Button> View Connections </Button>
    <Dialog>
        <DialogTitle> Your Connections </DialogTitle>
        <DialogContent>
        <Card>
            ...
            <Stack>
            <Typography> NameOne <Typography>
            <Chip label="Available to help" />
            </Stack>
        </Card>
            <DialogContent>
        <Card>
            ...
            <Stack>
            <Typography> NameTwo <Typography>
            <Chip label="" />
            </Stack>
        </Card>
        ...
        </DialogContent>
        <DialogActions>
        <Button> Close </Button>
        <DialogActions>
    <Dialog>
    ```

    ***States**
    
    A useState hook to open and close dialog box.
    ```jsx
    const [open, setOpen] = React.useState(false);
    ```

    ***Functions**
    
    A selector function to get connections from ```GET``` method 
    using api call attached to ```getAllConnection``` function.
    ```jsx
    const connections = useSelector(getAllConnection);
    ```

    A selector function to get profiles from ```GET``` method 
    using api call attached to ```getAllProfiles``` function.
    ```jsx
    const directory = useSelector(getAllProfiles);
    ```

    An onClick event button function to redirect page to 
    view profile of a specfic user card being clicked on.
    ```jsx
    const handleSelect = (username) => {
        setOther(username);
        navigate(`/other-profile/${username}`);
    }
    ```

*/

/* istanbul ignore next */
const ViewConnections = ({setOther}) => {
    const { refresh, setRefresh } = useRiver();
    
    const dispatch = useDispatch();
    const connections = useSelector(getAllConnection);
    
    useEffect(() => {
        if (!connections || connections.length === 0 || refresh) {
            dispatch(loadAllConnection());
            setRefresh(false)
        }
    }, [dispatch, connections, refresh, setRefresh]);

    let navigate = useNavigate();
    const directory = useSelector(getAllProfiles);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const findUser = (targetUserName) => {
        let result;
        Object.keys(directory).forEach(x => result = directory[x].UserName.toLowerCase() === targetUserName.toLowerCase() ? directory[x]: result)
        return result;
        }

        const handleSelect = (username) => {
            setOther(username);
            navigate(`/other-profile/${username}`);
        }
    
    return (
        <div>
        <Button 
            variant="contained" 
            onClick={handleClickOpen}
            data-testid="view-connections-handle-click-open"
        >
            View Followings
        </Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Your Followings</DialogTitle>
            <DialogContent>
                {connections.map(profile => 
                    localStorage.getItem('username').toLowerCase().slice(1, localStorage.getItem('username').length - 1) === profile.NameOne.toLowerCase() ?
                        <Card sx={{ marginLeft: '5%', marginRight: '5%', marginBottom: '2%' }} 
                            onClick={() => {handleSelect(profile.NameTwo);}}
                        >
                            <CardActionArea>
                                <CardContent>
                                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                        <Grid item xs={12}>
                                            <Stack direction="row" spacing={1}>
                                                <Typography gutterBottom variant="body1" component="div">
                                                    {findUser(profile?.NameTwo)?.FullName}
                                                </Typography>
                                                {findUser(profile?.NameTwo)?.Mentoring === "Mentor" ? (
                                                    <Chip label="Available to help" variant="outlined" color="success" />
                                                ) : <></> }
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    : <></>
                )}
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}

export default ViewConnections; 