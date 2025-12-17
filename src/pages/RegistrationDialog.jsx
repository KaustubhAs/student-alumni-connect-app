import * as React from 'react';
import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import { useNavigate } from "react-router-dom";
import SignUpForm from './SignUpForm';

const RegistrationDialog = () => {
    const [open, setOpen] = React.useState(false);

    /* istanbul ignore next */
    const handleClickOpen = () => {
        setOpen(true);
    };

    /* istanbul ignore next */
    const handleClose = () => {
        setOpen(false);
        // navigate('/login');
    };

    return (
        <div>
        <Button variant="outlined" onClick={handleClickOpen}>
            Don't have an account? Sign Up
        </Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Create Account</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Enter your basic information for account registration.
                </DialogContentText>
                <SignUpForm />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Aleady have an account</Button>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}

export default RegistrationDialog; 