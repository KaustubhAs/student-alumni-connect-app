import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AdminAlert from './AdminAlert';
import { loadAdminPostPassword } from '../store/adminPassword_Post/actions'
import { performPutRandomPassword } from '../store/adminPassword_Put/actions'
import { useDispatch } from 'react-redux';

/**

    ***Description**
    
    This is a dialog box component for choosing a specific password.
    
    ***Props**
    
    ```None```

    ***Structure**
    
    This component contains a dialog box with two textfields.

    ```jsx
    <Button> Choose Password </Button>
    <Dialog>
        <DialogTitle> Change Password </DialogTitle>
        <DialogContent>
        <TextField label="Username" />
        <TextField label="New Password" />
        </DialogContent>
        <AdminAlert />
        <DialogActions>
        <Button> Close </Button>
        <Button> Submit </Button>
    <Dialog>
    ```

    ***States**
    
    A useState hook for username textfield.
    ```jsx
    const [username, setUsername] = React.useState("")
    ```

    A useState hook for new password textfield.
    ```jsx
    const [NewPassword, setNewPassword] = React.useState("")
    ```

    A useState hook for alert status.
    ```jsx
    const [alertStatus, setAlertStatus] = React.useState("")
    ```

    ***Functions**

    An onChange event button function for username textfield.
    ```jsx
    const handleUsername = (event) => {
        setUsername(event.target.value);
    };
    ```

    An onChange event button function for new password textfield.
    ```jsx
    const handleNewPassword = (event) => {
        setNewPassword(event.target.value);
    };
    ```

    An onClick event button function to ```POST```
    new value for password field using the api call
    ```loadAdminPostPassword```. This function also
    set off the success alert.
    ```jsx
    const handleSubmit = async () => {
        await loadAdminPostPassword(data);
        setAlertStatus("success");
    };
    ```
    
*/

const AdminPostChoosePassword = () => {
    const [open, setOpen] = React.useState(false);
    const [alertStatus, setAlertStatus] = React.useState("")
    const [username, setUsername] = React.useState("")
    const [NewPassword, setNewPassword] = React.useState("")
    const [triggerRandom, setTriggerRandom] = React.useState(false)
    const dispatch = useDispatch();

    const randomData = {
        "UserName" : username,
    }

    /* istanbul ignore next */
    React.useEffect(() => {
        if (triggerRandom) {
            dispatch(performPutRandomPassword(randomData));
            setTriggerRandom(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setTriggerRandom, triggerRandom, dispatch]);


    const data = {
            "UserName" : username,
            "NewPassword" : NewPassword,
        }


    const handleClickOpen = () => {
        setOpen(true);
    };

    /* istanbul ignore next */
    const handleSubmit = async () => {
        await loadAdminPostPassword(data);
        setAlertStatus("success");
    };

    const handleClose = () => {
        setOpen(false);
        setAlertStatus("empty");
    };

    const handleUsername = (event) => {
        setUsername(event.target.value);
    };

    const handleNewPassword = (event) => {
        setNewPassword(event.target.value);
    };

    return (
        <div>
        <Button variant="text" onClick={handleClickOpen}>
            Choose Password
        </Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Change Password</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Please enter the Username of the account you're intending to update password information.
            </DialogContentText>
            
            <TextField
                margin="dense"
                id="name"
                label="Username"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleUsername}
                inputProps={{ "data-testid": "admin-post-choose-password-username" }}
                InputLabelProps={{
                shrink: true
                }}
            />
            <TextField
                margin="dense"
                id="admin-post-choose-password-password"
                inputProps={{ "data-testid": "admin-post-choose-password-password" }}
                label="New Password"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleNewPassword}
                InputLabelProps={{
                shrink: true
                }}
            />

            </DialogContent>
            {
            /* istanbul ignore next */
            alertStatus === "success" ? (<AdminAlert />) : <></>}
            <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            <Button onClick={handleSubmit}>Submit</Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}

export default AdminPostChoosePassword; 