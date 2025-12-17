import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AdminAlert from './AdminAlert';
import { performPutRandomPassword } from '../store/adminPassword_Put/actions'
// import { useSelector } from 'react-redux';
// import { getRandomPassword } from '../store/adminPassword_Put/selectors';
import { useDispatch } from 'react-redux';

/**

    ***Description**
    
    This is a dialog box component for randomizing a password.
    
    ***Props**
    
    ```None```

    ***Structure**
    
    This component contains a dialog box with one textfield.

    ```jsx
    <Button> Randomize </Button>
    <Dialog>
        <DialogTitle> Change Password </DialogTitle>
        <DialogContent>
        <TextField label="Username" />
        </DialogContent>
        <AdminAlert/>
        <DialogActions>
        <Button> Close </Button>
        <Button> Randomize </Button>
    <Dialog>
    ```

    ***States**
    
    A useState hook for username textfield.
    ```jsx
    const [username, setUsername] = React.useState("")
    ```

    A useState hook for alert status.
    ```jsx
    const [alertStatus, setAlertStatus] = React.useState("")
    ```

    A useState hook for alert message.
    ```jsx
    const [message, setMessage] = React.useState('')
    ```

    ***Functions**

    An onChange event button function for username textfield.
    ```jsx
    const handleUsername = (event) => {
        setUsername(event.target.value);
    };
    ```

    An onClick event button function to ```PUT```
    newly randomized value for password using the api call
    ```performPutRandomPassword```. This function also
    set off the success alert with the password in the 
    alert message.
    ```jsx
    const handleRandom = async () => {
        const result = await dispatch(performPutRandomPassword(randomData));
        setMessage(`Your new password is ${result.backend}`)
        setAlertStatus("success");
    };
    ```
    
*/

const AdminPutRandomPassword = () => {
    const [open, setOpen] = React.useState(false);
    const [alertStatus, setAlertStatus] = React.useState("")
    const [username, setUsername] = React.useState("")
    // const [triggerRandom, setTriggerRandom] = React.useState(false)
    const [message, setMessage] = React.useState('')
    const dispatch = useDispatch();

    // const randomPassword = useSelector(getRandomPassword);

    const randomData = {
        "UserName" : username,
    }

    // React.useEffect(() => {
    //   if (triggerRandom) {
    //       dispatch(performPutRandomPassword(randomData));
    //       setTriggerRandom(false);
    //   }
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [setTriggerRandom, triggerRandom, dispatch]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    /* istanbul ignore next */
    const handleRandom = async () => {
        const result = await dispatch(performPutRandomPassword(randomData));
        setMessage(`Your new password is ${result.backend}`)
        setAlertStatus("success");
    };

    const handleClose = () => {
        setOpen(false);
        setAlertStatus("empty");
    };

    const handleUsername = (event) => {
        setUsername(event.target.value);
    };

    return (
        <div>
        <Button variant="text" onClick={handleClickOpen}>
            Randomize
        </Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Change Password</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Please enter the Username of the account to randomize password for.
            </DialogContentText>
            
            <TextField
                margin="dense"
                id="name"
                label="Username"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleUsername}
                inputProps={{ "data-testid": "admin-put-random-password-username" }}
                InputLabelProps={{
                shrink: true
                }}
            />

            </DialogContent>
            {
            /* istanbul ignore next */
            alertStatus === "success" ? (<AdminAlert message={message}/>) : <></>}
            <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            <Button onClick={handleRandom}>Randomize</Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}

export default AdminPutRandomPassword; 