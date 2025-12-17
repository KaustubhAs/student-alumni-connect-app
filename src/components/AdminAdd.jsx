import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AdminAddFields from './AdminAddFields';

/**

    ***Description**

    This is a container component for AdminAddFields component.

    ***Props**

    ```None```

    ***Structure**

    This component contains a button and a dialog box.

    ```jsx
    <Button> Open </Button>
    <Dialog>
        <DialogTitle> Add User </DialogTitle>
        <DialogContent>
        ... 
        <AdminAddFields />
        </DialogContent>
    <Dialog>
    ```

    ***States**

    A useState hook to open and close dialog box.
    ```jsx
    const [open, setOpen] = React.useState(false);
    ```

    ***Functions**

    Two onClick button functions for open and close, 
    using previously defined ```[open, setOpen]``` state.
    ```jsx
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    ```

*/

const AdminAdd = () => {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
        setOpen(true);
    };
  
    const handleClose = () => {
        setOpen(false);
    };
  
    return (
      <div>
        <Button variant="text" onClick={handleClickOpen}>
          Open
        </Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add User</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please enter the information of the new user.
                </DialogContentText>
                <AdminAddFields  />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
      </div>
    );
}

export default AdminAdd; 