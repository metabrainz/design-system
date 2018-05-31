import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import '../less/styles.less';

import {Button, ButtonGroup} from 'react-bootstrap';

storiesOf('Buttons', module)
  
  .add('Primary Button', 
  	withInfo('') 
  		(
		() => (<div>
				<Button bsStyle="primary" onClick={action('clicked')}>Primary Button</Button>
				<Button bsStyle="primary" bsSize="small" onClick={action('clicked')}>Primary Small Button</Button>
				</div>
			)))

  .add('Secondary Button', 
  	withInfo('') 
  		(
		() => (<div>
				<Button bsStyle="secondary" onClick={action('clicked')}>Secondary Button</Button>
				<Button bsStyle="secondary" bsSize="small" onClick={action('clicked')}>Secondary Small Button</Button>
			    </div>
			)))

  .add('Warning Button', 
  	withInfo('') 
  		(
		() => (<div>
				<Button bsStyle="warning" onClick={action('clicked')}>Warning Button</Button>
				<Button bsStyle="warning" bsSize="small" onClick={action('clicked')}>Warning Small Button</Button>
			    </div>
			)))

  .add('Danger Button', 
  	withInfo('') 
  		(
		() => (<div>
				<Button bsStyle="danger" onClick={action('clicked')}>Danger Button</Button>
				<Button bsStyle="danger" bsSize="small" onClick={action('clicked')}>Danger Small Button</Button>
				</div>
			)))

  .add('Success Button', 
  	withInfo('') 
  		(
		() => (<div>
				<Button bsStyle="success" onClick={action('clicked')}>Success Button</Button>
				<Button bsStyle="success" bsSize="small" onClick={action('clicked')}>Success Small Button</Button>
				</div>
			)))

  .add('Set of Buttons', 
  	withInfo('') 
  		(
		() => (<div>
				<Button bsStyle="secondary" onClick={action('clicked')}>Success Button</Button>
				<Button bsStyle="primary" onClick={action('clicked')}>Success Button</Button>
				</div>
			)))

  .add('Links', 
  	withInfo('') 
  		(
		() => (<div>
				<Button bsStyle="link" onClick={action('clicked')}>I am a default link</Button>
				<Button bsStyle="link" bsSize="xsmall" onClick={action('clicked')}>I am a small link</Button>
				</div>
			)));

  
  



