import React from 'react';
import {Alert} from 'react-bootstrap';

class AlertDismissable extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: true,
    };
  }

  handleClose() {
    this.setState({show: false});
  }

  render() {
    return this.state.show ? (
      <Alert dismissible onClose={this.handleClose} variant={this.props.variant}>
        {this.props.children}
      </Alert>
    ) : null;
  }
}

export default AlertDismissable;
