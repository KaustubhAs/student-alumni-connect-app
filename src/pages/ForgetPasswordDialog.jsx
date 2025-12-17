import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import { useNavigate } from "react-router-dom";
 

const ForgetPasswordDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSubmit = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} id="forget-password-dialog-handle-click-open">
        Forgot Password?
      </Button>
      <Dialog open={open} onClose={handleCancel}>
        <DialogTitle>Forgot Your Password?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            If you have forgotten your password, please enter your account's
            username below and click "Submit" button below. If your
            account exist, you will receive your password information on the
            email address on file.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Username"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button id="forget-password-dialog-button-1" onClick={handleCancel}>Cancel</Button>
          <Button id="forget-password-dialog-button-2" onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ForgetPasswordDialog; 