import React from 'react';
import {Alert} from 'react-bootstrap';

class AlertDismissable extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleDismiss = this.handleDismiss.bind(this);

    this.state = {
      show: true,
    };
  }

  handleDismiss() {
    this.setState({show: false});
  }

  render() {
    if (this.state.show) {
      return (
        <Alert bsStyle={this.props.bsStyle} onDismiss={this.handleDismiss}>
          {this.props.children}
        </Alert>
      );
    }
  }
}

export default AlertDismissable;
