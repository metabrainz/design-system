import React from 'react';
import {ButtonGroup} from 'react-bootstrap';
import {storiesOf, addDecorator} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import {withInfo} from '@storybook/addon-info';

import {
  AlertDismissable,
  Badge,
  Button,
  Breadcrumb,
  Label,
  Modal,
  ProgressBar,
} from '../components';

import '../less/styles.less';

const margins = {
  margin: '5px 100px 10px 5px',
};
const MarginDecorator = (storyFn) => (
  <div style={margins}>
    {storyFn()}
  </div>
);
addDecorator(MarginDecorator);

// Stories of components
storiesOf('Welcome', module)
  .add('Hey there 👋', withInfo('')(() => (
    <div>
      <h2 style={{color: '#eb743b'}}>{'MusicBrainz UI Library'}</h2>
      <p style={{marginBottom: '1em', marginTop: '1em', maxWidth: '40vw'}}>
        {'This storybook is around to help you find your way around our UI components. We hope it will help us maintain a scalable and consistent visual system for UI development. Look around and feel free to reach out to us on IRC #metabrainz to talk about it! 😀'}
      </p>
      <p><strong>{'Some quick links:'}</strong></p>
      <li><a href="https://musicbrainz.org/">{'MusicBrainz'}</a></li>
      <li><a href="https://github.com/metabrainz/design-system">{'GitHub Repo'}</a></li>
      <li><a href="http://tickets.musicbrainz.org/">{'Bug Tracker'}</a></li>
      <li><a href="https://twitter.com/MusicBrainz">{'Twitter'}</a></li>
    </div>
  )));

storiesOf('Alert', module)
  .add('Danger Alert', withInfo('')(() => (
    <div>
      <AlertDismissable bsStyle="danger">
        <p>{'You just deleted the entity. The changes will now be voted on. Click '}<a className="alert-link">{'here'}</a> {'to know more!'}</p>
      </AlertDismissable>
    </div>
  )))

  .add('Info Alert', withInfo('')(() => (
    <div>
      <AlertDismissable bsStyle="info">
        <p>{'Hmm, you cannot edit it. Permissions to delete this entity are only granted to privileged editors. Click'} <a className="alert-link">{'here'}</a> {'to know more!'} </p>
      </AlertDismissable>
    </div>
  )))

  .add('Warning Alert', withInfo('')(() => (
    <div>
      <AlertDismissable bsStyle="warning">
        <p>{'We think your browser might be outdated. Better check that one out before proceeding!'}</p>
      </AlertDismissable>
    </div>
  )))

  .add('Success Alert', withInfo('')(() => (
    <div>
      <AlertDismissable bsStyle="success">
        <p>{'Your tag has been successfully added. Do vote on other relevant tags as well!'}</p>
      </AlertDismissable>
    </div>
  )));

storiesOf('Badge', module)
  .add('Default', withInfo('')(() => (
    <div>
      {'Open Edits'} <Badge>{'42'}</Badge>
    </div>
  )));

storiesOf('Breadcrumb', module)
  .add('Default', withInfo('')(() => (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="#">{'Release Group'}</Breadcrumb.Item>
        <Breadcrumb.Item href="#">{'Release'}</Breadcrumb.Item>
        <Breadcrumb.Item active>{'Track'}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )));

storiesOf('Buttons', module)
  .add('Primary Button', withInfo('')(() => (
    <div>
      <Button bsStyle="primary" onClick={action('clicked')}>{'Primary Button'}</Button>
      <Button bsSize="small" bsStyle="primary" onClick={action('clicked')}>{'Primary Small Button'}</Button>
    </div>
  )))

  .add('Secondary Button', withInfo('')(() => (
    <div>
      <Button bsStyle="secondary" onClick={action('clicked')}>{'Secondary Button'}</Button>
      <Button bsSize="small" bsStyle="secondary" onClick={action('clicked')}>{'Secondary Small Button'}</Button>
    </div>
  )))

  .add('Warning Button', withInfo('')(() => (
    <div>
      <Button bsStyle="warning" onClick={action('clicked')}>{'Warning Button'}</Button>
      <Button bsSize="small" bsStyle="warning" onClick={action('clicked')}>{'Warning Small Button'}</Button>
    </div>
  )))

  .add('Danger Button', withInfo('')(() => (
    <div>
      <Button bsStyle="danger" onClick={action('clicked')}>{'Danger Button'}</Button>
      <Button bsSize="small" bsStyle="danger" onClick={action('clicked')}>{'Danger Small Button'}</Button>
    </div>
  )))

  .add('Success Button', withInfo('')(() => (
    <div>
      <Button bsStyle="success" onClick={action('clicked')}>{'Success Button'}</Button>
      <Button bsSize="small" bsStyle="success" onClick={action('clicked')}>{'Success Small Button'}</Button>
    </div>
  )))

  .add('Set of Buttons', withInfo('')(() => (
    <div>
      <Button bsStyle="secondary" onClick={action('clicked')}>{'Secondary Button'}</Button>
      <Button bsStyle="primary" onClick={action('clicked')}>{'Primary Button'}</Button>
    </div>
  )))

  .add('Links', withInfo('')(() => (
    <div>
      <Button bsStyle="link" onClick={action('clicked')}>{'I am a default link'}</Button>
      <Button bsSize="xsmall" bsStyle="link" onClick={action('clicked')}>{'I am a small link'}</Button>
    </div>
  )));

storiesOf('Label', module)
  .add('Default', withInfo('')(() => (
    <div>
      <Label bsStyle="default">{'Default'}</Label>{' '}
      <Label bsStyle="primary">{'Primary'}</Label>{' '}
      <Label bsStyle="success">{'Success'}</Label> <Label bsStyle="info">{'Info'}</Label>{' '}
      <Label bsStyle="warning">{'Warning'}</Label>{' '}
      <Label bsStyle="danger">{'Danger'}</Label>
    </div>
  )));

storiesOf('Modal', module)
  .add('Default', withInfo('')(() => (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{'Modal title'}</Modal.Title>
        </Modal.Header>

        <Modal.Body>{'One fine body...'}</Modal.Body>

        <Modal.Footer>
          <Button bsStyle="link">{'Close'}</Button>
          <Button bsStyle="primary">{'Save changes'}</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )));

storiesOf('Progress Bar', module)
  .add('Default', withInfo('')(() => (
    <div>
      <ProgressBar bsStyle="success" now={40} />
    </div>
  )));
