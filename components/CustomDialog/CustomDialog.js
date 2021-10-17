import React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

export default function CustomDialog(props) {
  const { onClose, selectedValue, open, title, children } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle >{title}</DialogTitle>
      {children}
    </Dialog>
  );
}


