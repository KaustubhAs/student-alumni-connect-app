import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import AdminEditFields from './AdminEditFields';
import { useDispatch } from 'react-redux';
import { loadOtherProfile } from '../store/otherProfile/actions';

/**

    ***Description**
    
    This is a container component for AdminEditFields component.
    
    ***Props**
    
    ```None```

    ***Structure**
    
    This component contains a dialog box with a textfield.

    ```jsx
    <Button> Open </Button>
    <Dialog>
        <DialogTitle> Edit User </DialogTitle>
        <DialogContent>
        ... 
        <TextField label="Username" />
        <AdminAddFields />
        </DialogContent>
        <DialogActions>
        <Button> Close </Button>
        <Button> Find </Button>
    <Dialog>
    ```

    ***States**
    
    A useState hook for username textfield.
    ```jsx
    const [username, setUsername] = React.useState("")
    ```

    A useState hook for queried profile holder.
    ```jsx
    const [queriedProfile, setQueriedProfile] = React.useState("");
    ```

    A useState hook for checking user existence.
    ```jsx
    const [afterFind, setAfterFind] = React.useState(false);
    ```

    ***Functions**
    
    An onClick event button function for finding matching
    username and returning the relevant user's data.
    This function perform ```GET``` method through 
    the api call ```loadOtherProfile```.
    ```jsx
    const handleFind = async () => {
        const result = await dispatch(loadOtherProfile(username));
        setQueriedProfile(result?.backend)
        setAfterFind(true);
    };
    ```

    An onChange event button function for username textfield.
    ```jsx
    const handleUsername = (event) => {
        setUsername(event.target.value);
    };
    ```

*/

const AdminEdit = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [username, setUsername] = React.useState("");
    const [queriedProfile, setQueriedProfile] = React.useState("");
    const [afterFind, setAfterFind] = React.useState(false);

    /* istanbul ignore next */
    const handleClickOpen = () => {
        setOpen(true);
    };

    /* istanbul ignore next */
    const handleFind = async () => {
        const result = await dispatch(loadOtherProfile(username));
        setQueriedProfile(result?.backend)
        setAfterFind(true);
    };

    /* istanbul ignore next */
    const handleClose = () => {
        setOpen(false);
        setAfterFind(false);
    };

    /* istanbul ignore next */
    const handleUsername = (event) => {
        setUsername(event.target.value);
    };

    const mockQuery = [
        {
        "UserID": "",
        "FullName": "",
        "FirstName": "",
        "LastName": "",
        "UserName": "",
        "ProfilePic": "",
        "Pronouns": "",
        "Bio": "",
        "Phone": "",
        "Email": "",
        "JobTitle": "",
        "Mentoring": "",
        "LastUpdate": "",
        "Password": "",
        "Admin": "",
        "Street": "",
        "City": "",
        "District": "",
        "State": "",
        "Country": "",
        "Postcode": "",
        "Latitude": "",
        "Longitude": "",
        "University": "",
        "Major1": "",
        "Major2": "",
        "ClassYear": "",
        "UniOrg1": "",
        "UniOrg2": "",
        "UniOrg3": "",
        "OtherEduDegree": "",
        "OtherEduMajor": "",
        "OtherEduClassYear": "",
        "CompanyName": "",
        "CompanyContactInfo": "",
        "Industry": ""
        }
    ]
    return (
        <div>
        <Button variant="text" onClick={handleClickOpen}>
            Open
        </Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Edit User</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Please enter the Username of the account you're intending to edit.
                Username must be a string.
            </DialogContentText>
            <Grid>
                <TextField
                autoFocus
                margin="dense"
                id="name"
                inputProps={{ "data-testid": "admin-edit-username" }}
                label="Username"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleUsername}
                />
            </Grid>

            {
            /* istanbul ignore next */
            afterFind ? 
                <AdminEditFields queriedUser={queriedProfile === "" ? mockQuery : queriedProfile} setAfterFind={setAfterFind} /> : 
                <></>
            }

            {/* <AdminEditFields queriedUser={mockQuery} /> */}
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            <Button onClick={handleFind}>Find</Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}

export default AdminEdit; 