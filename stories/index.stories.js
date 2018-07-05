import React from 'react';
import {ButtonGroup, ButtonToolbar, MenuItem, OverlayTrigger} from 'react-bootstrap';
import {storiesOf, addDecorator} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import {withInfo} from '@storybook/addon-info';

import {
  AlertDismissable,
  Badge,
  Button,
  Breadcrumb,
  DropdownButton,
  Label,
  Glyphicon,
  Modal,
  Pagination,
  ProgressBar,
  Tooltip,
} from '../components';

import '../less/styles.less';

const margins = {
  margin: '3em 2em 3em 3em',
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

storiesOf('Dropdown Button', module)
  .add('Default', withInfo('')(() => (
    <div>
      <DropdownButton
        bsStyle="secondary"
        title="Actions"
      >
        <MenuItem eventKey="1">{'Merge'}</MenuItem>
        <MenuItem eventKey="2">{'Delete'}</MenuItem>
        <MenuItem active eventKey="3">
          {'Add ISRC Code'}
        </MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4">{'Let it be'}</MenuItem>
      </DropdownButton>
    </div>
  )))

  .add('Disabled Dropdown', withInfo('')(() => (
    <div>
      <DropdownButton
        bsStyle="secondary"
        disabled
        title="Actions"
      />
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

storiesOf('Glyphicon', module)
  .add('With text', withInfo('')(() => (
    <div>
      <Button bsSize="small" bsStyle="primary">
        <Glyphicon glyph="plus " />
        {'Add a Release'}
      </Button>
    </div>)))


  .add('Without text', withInfo('')(() => (
    <div>
      <Button bsSize="small" bsStyle="secondary">
        <Glyphicon glyph="align-center " />
      </Button>
    </div>)));

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

storiesOf('Pagination', module)
  .add('Default', withInfo('')(() => (
    <div>
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  )))
  .add('Sizes', withInfo('')(() => {
    const active = 7;
    const items = [];
    for (let number = 1; number <= 10; number++) {
      items.push(
        <Pagination.Item active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }
    return (
      <div>
        <Pagination bsSize="medium">{items}</Pagination>
        <br />
        <Pagination bsSize="small">{items}</Pagination>
      </div>
    );
  }));

storiesOf('Tooltip', module)
  .add('Default', withInfo('')(() => {
    const tooltip = (
      <Tooltip id="tooltip">
        <strong>{'Holy guacamole!'}</strong> {'Check this info.'}
      </Tooltip>
    );

    return (
      <div>
        <OverlayTrigger placement="bottom" overlay={tooltip}>
          <Button bsStyle="primary">Holy guacamole!</Button>
        </OverlayTrigger>
        <br />
        <OverlayTrigger placement="right" overlay={tooltip}>
          <Button bsStyle="primary">Holy guacamole!</Button>
        </OverlayTrigger>
        <br />
        <OverlayTrigger placement="top" overlay={tooltip}>
          <Button bsStyle="primary">Holy guacamole!</Button>
        </OverlayTrigger>

        <OverlayTrigger placement="left" overlay={tooltip}>
          <Button bsStyle="primary">Holy guacamole!</Button>
        </OverlayTrigger>
      </div>
    );
  }));
