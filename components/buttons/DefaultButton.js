import React, {Component} from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';

import '../../less/buttons.less';
import '../../less/theme.less';

const DefaultButton = () => (

  <div>
    <button className="btn-default" type="button">Default Button</button>
    <button className="btn-default-secondary" type="button">Default Secondary Button</button>
    <button className="btn-default-small" type="button">Default Small Button</button> 
    <button className="btn-default-secondary-small" type="button">Default Small Button</button>
  </div>
);

export default DefaultButton;

// let c = small ? 'small' : null;

// const Button = ({small, type, secondary}) => (
// 	<button className=" {small ? }">
// 	</button>
// 	)

// <Button type="success" />
// <Button type="danger" />
// <Button type="danger" small=true />
// <Button type="danger" small=true secondary=true />