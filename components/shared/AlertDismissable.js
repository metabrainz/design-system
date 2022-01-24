import React, {useState} from 'react';
import {Alert} from 'react-bootstrap';

export default function AlertDismissable(props) {
  const [open, setOpen] = useState(true);

  function onClose() {
    setOpen(false);
  }

  return open ? (
    <Alert dismissible onClose={onClose} variant={props.variant}>
      {props.children}
    </Alert>
  ) : null;
}
