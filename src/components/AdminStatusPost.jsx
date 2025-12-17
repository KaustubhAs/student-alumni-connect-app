import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AdminAlert from './AdminAlert';
import { loadPostAdminStatus } from '../store/adminStatus_Post/actions'

/**

    ***Description**
    
    This is a dialog box component for setting Admin status to "yes" or "no".
    
    ***Props**
    
    ```None```

    ***Structure**
    
    This component contains a dialog box with two textfields.

    ```jsx
    <Button> Open </Button>
    <Dialog>
        <DialogTitle> Set Admin Status </DialogTitle>
        <DialogContent>
        <TextField label="Username" />
        <TextField label="Admin Status" />
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

    A useState hook for admin status textfield.
    ```jsx
    const [adminStatus, setAdminStatus] = React.useState("")
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

    An onChange event button function for admin status textfield.
    ```jsx
    const handleAdminStatus = (event) => {
        setAdminStatus(event.target.value);
    };
    ```

    An onClick event button function to ```POST```
    new value for admin status using the api call
    ```loadPostAdminStatus```. This function also
    set off the success alert.
    ```jsx
    const handleSubmit = async () => {
        await loadPostAdminStatus(data);
        setAlertStatus("success");
    };
    ```
    
*/

const AdminStatusPost = () => {
    const [open, setOpen] = React.useState(false);
    const [alertStatus, setAlertStatus] = React.useState("")
    const [username, setUsername] = React.useState("")
    const [adminStatus, setAdminStatus] = React.useState("")

    const data = {
        "UserName" : username,
        "Admin" : adminStatus,
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    /* istanbul ignore next */
    const handleSubmit = async () => {
        await loadPostAdminStatus(data);
        setAlertStatus("success");
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUsername = (event) => {
        setUsername(event.target.value);
    };

    const handleAdminStatus = (event) => {
        setAdminStatus(event.target.value);
    };

    return (
        <div>
        <Button variant="text" onClick={handleClickOpen}>
            Open
        </Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Set Admin Status</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Please enter the Username of the account you're intending to update admin status information.
                Admin status should be string value of either "Yes" or "No".
            </DialogContentText>
            <TextField
                margin="dense"
                id="name"
                label="Username"
                type="text"
                fullWidth
                variant="standard"
                inputProps={{ "data-testid": "admin-status-post-username" }}
                onChange={handleUsername}
            />
            <TextField
                margin="dense"
                id="name"
                label="Admin Status"
                type="text"
                fullWidth
                variant="standard"
                inputProps={{ "data-testid": "admin-status-post-status" }}
                onChange={handleAdminStatus}
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

export default AdminStatusPost; 