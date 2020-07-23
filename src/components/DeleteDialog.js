import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

// api imports
import { axiosWithAuth } from '../utils/axiosWithAuth';
import useFetch from '../hooks/useFetch';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

/**
 * Component for handling user plant deletion
 *
 * @export
 * @param {number} plantId the id of the plant to be deleted
 * @returns {jsx}
 */

export default function AlertDialogSlide({ plantId }) {
  const [open, setOpen] = React.useState(false);
  const [fetchParams, setFetchParams] = useState({
    method: '',
    url: '',
    data: '',
  });

  const { response, isLoading } = useFetch({
    api: axiosWithAuth(),
    method: fetchParams.method,
    url: fetchParams.url,
    data: fetchParams.data,
  });
  console.log(response);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeletePlant = e => {
    e.preventDefault();
    setFetchParams({
      ...fetchParams,
      // temporary fake url until we get the endpoint from backend
      url: `/api/plants/${plantId}`,
      method: 'delete',
    });
    setOpen(false);
  };

  return (
    <div>
      <Button variant='outlined' color='primary' onClick={handleClickOpen}>
        Delete Plant
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby='delete-plant-dialog'
        aria-describedby='delete-plant-dialog'>
        <DialogTitle id='dialog-title'>{"Don't kale my vibe!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id='dialog-description'>
            Are you sure you want to delete this plant?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleDeletePlant} color='primary'>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}