import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import '../less/styles.less';

import {Button, ButtonGroup} from 'react-bootstrap';

storiesOf('Buttons', module)
  
  .add('Default Button', 
  	withInfo('Heeeyy') 
  		(
		() => (<div>
				<Button bsStyle="primary" onClick={action('clicked')}>Default Button</Button>
				<Button bsStyle="primary" bsSize="small" onClick={action('clicked')}>Default Small Button</Button>
				</div>
			)))

  .add('Secondary Button', 
  	withInfo('Heeeyy') 
  		(
		() => (<div>
				<Button bsStyle="secondary" onClick={action('clicked')}>Secondary Button</Button>
				<Button bsStyle="secondary" bsSize="small" onClick={action('clicked')}>Secondary Small Button</Button>
				</div>
			)))

  .add('Warning Button', 
  	withInfo('Heeeyy') 
  		(
		() => (<div>
				<Button bsStyle="warning" onClick={action('clicked')}>Warning Button</Button>
				<Button bsStyle="warning" bsSize="small" onClick={action('clicked')}>Warning Small Button</Button>
				</div>
			)))

  .add('Danger Button', 
  	withInfo('Heeeyy') 
  		(
		() => (<div>
				<Button bsStyle="danger" onClick={action('clicked')}>Danger Button</Button>
				<Button bsStyle="danger" bsSize="small" onClick={action('clicked')}>Danger Small Button</Button>
				</div>
			)))

  .add('Success Button', 
  	withInfo('Heeeyy') 
  		(
		() => (<div>
				<Button bsStyle="success" onClick={action('clicked')}>Success Button</Button>
				<Button bsStyle="success" bsSize="small" onClick={action('clicked')}>Success Small Button</Button>
				</div>
			)));

  
  



