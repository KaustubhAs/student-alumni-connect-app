import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AdminAlert from './AdminAlert';
import { performAdminDelete } from '../store/adminDelete/actions'

/**

    ***Description**
    
    This is a form component to delete user, given a username.
    
    ***Props**
    
    ```None```

    ***Structure**
    
    This component contains a dialog box with one input field,
    and an AdminAlert component.

    ```jsx
    <Button> Open </Button>
    <Dialog>
        <DialogTitle> Delete User </DialogTitle>
        <DialogContent>
        ... 
        <TextField label="Username" />
        </DialogContent>
        <AdminAlert />
        <DialogActions>
        <Button> Close </Button>
        <Button> Submit </Button>
        <DialogActions>
    <Dialog>
    ```

    ***States**
    
    A useState hook to open and close dialog box.
    ```jsx
    const [open, setOpen] = React.useState(false);
    ```

    A useState hook to trigger an alert.
    ```jsx
    const [alertStatus, setAlertStatus] = React.useState("")
    ```

    A useState hook for username textfield.
    ```jsx
    const [username, setUsername] = React.useState("")
    ```

    ***Functions**
    
    An onClick event button function for form submission
    which ```DELETE``` specified user using api call attached
    to ```performAdminDelete``` function.
    ```jsx
    const handleSubmit = async () => {
        await performAdminDelete(username);
        setAlertStatus("success");
    };
    ```

    An onChange event button function for username textfield.
    ```jsx
    const handleUsername = (event) => {
        setUsername(event.target.value);
    };
    ```

*/

const AdminDelete = () => {
    const [open, setOpen] = React.useState(false);
    const [alertStatus, setAlertStatus] = React.useState("")
    const [username, setUsername] = React.useState("")

    const handleClickOpen = () => {
        setOpen(true);
    };

    /* istanbul ignore next */
    const handleSubmit = async () => {
        await performAdminDelete(username);
        setAlertStatus("success");
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUsername = (event) => {
        setUsername(event.target.value);
    };

    return (
        <div>
        <Button variant="text" onClick={handleClickOpen}>
            Open
        </Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Delete User</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Please enter the Username of the account you're intending to delete.
                Username must be a string.
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                inputProps={{ "data-testid": "admin-delete-username" }}
                label="Username"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleUsername}
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

export default AdminDelete; 