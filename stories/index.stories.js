import React from 'react';
import {
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  OverlayTrigger,
} from 'react-bootstrap';
import {storiesOf, addDecorator} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import {
  AlertDismissable,
  Badge,
  Button,
  Breadcrumb,
  Dropdown,
  DropdownButton,
  Modal,
  Pagination,
  ProgressBar,
  Table,
  Tooltip,
} from '../components';

import '../scss/bootstrap-storybook.scss';

function noop(event) {
  event.preventDefault();
}

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
  .add('Hey there 👋', () => (
    <div>
      <h2>{'MetaBrainz UI Library'}</h2>
      <p>
        {'This storybook is around to help you find your way around our UI components. We hope it will help us maintain a scalable and consistent visual system for UI development. Look around and feel free to reach out to us on IRC #metabrainz to talk about it! 😀'}
      </p>
      <p><strong>{'Some quick links:'}</strong></p>
      <li><a href="https://metabrainz.org/">{'MetaBrainz'}</a></li>
      <li><a href="https://github.com/metabrainz/design-system">{'GitHub Repo'}</a></li>
      <li><a href="https://tickets.musicbrainz.org/">{'Bug Tracker'}</a></li>
      <li><a href="https://twitter.com/MusicBrainz">{'Twitter'}</a></li>
    </div>
  ));

storiesOf('Alert', module)
  .add('Danger Alert', () => (
      <div>
        <AlertDismissable variant="danger">
          <p>{'You just deleted the entity. The changes will now be voted on. Click '}<a className="alert-link">{'here'}</a> {'to know more!'}</p>
        </AlertDismissable>
      </div>
    ),
    {
      info: 'Danger alerts should be used when the system has failed to perform an action, or when the user has made an error.',
    })

  .add('Info Alert', () => (
    <div>
      <AlertDismissable variant="info">
        <p>{'Hmm, you cannot edit it. Permissions to delete this entity are only granted to privileged editors. Click'} <a className="alert-link">{'here'}</a> {'to know more!'} </p>
      </AlertDismissable>
    </div>
  ), {
    info: 'Info alerts should be used when there are tips or information that a user can benefit from.',
  })

  .add('Warning Alert', () => (
    <div>
      <AlertDismissable variant="warning">
        <p>{'We think your browser might be outdated. Better check that one out before proceeding!'}</p>
      </AlertDismissable>
    </div>
  ), {
    info: 'Warning alerts should be used when an action is out of the ordinary or might not be desired.',
  })

  .add('Success Alert', () => (
    <div>
      <AlertDismissable variant="success">
        <p>{'Your tag has been successfully added. Do vote on other relevant tags as well!'}</p>
      </AlertDismissable>
    </div>
  ), {
    info: 'Success alerts should be used when an action was performed successfully.',
  });

storiesOf('Badge', module)
  .add('Default', () => (
    <div>
      {'Open Edits'} <Badge variant="primary">{'42'}</Badge>
    </div>
  ), {
    info: 'Badges stand out to inform the user that there is something special that warrants their attention. For example, open edits.',
  });

storiesOf('Breadcrumb', module)
  .add('Default', () => (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="#">{'Release Group'}</Breadcrumb.Item>
        <Breadcrumb.Item href="#">{'Release'}</Breadcrumb.Item>
        <Breadcrumb.Item active>{'Track'}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  ), {
    info: 'Breadcrumbs help users figure out “Where am I exactly?” rather quickly. All links in a breadcrumb should be clickable except the current. Reloading the current page again would be quite confusing.',
  });

storiesOf('Buttons', module)
  .add('Primary Button', () => (
    <div>
      <Button onClick={action('clicked')} variant="primary">{'Primary Button'}</Button>
      <Button onClick={action('clicked')} size="sm" variant="primary">{'Primary Small Button'}</Button>
    </div>
  ), {
    info: 'Buttons set an action in motion. Instead of using “Yes” or “Okay”, it’s better to use verbs that explain what the triggered action will be. For example, “Create new”, “Discard draft”, etc. Use the primary button when it’s the main action on a page/table. Use the smaller one in case of limited space.',
  })

  .add('Secondary Button', () => (
    <div>
      <Button onClick={action('clicked')} variant="secondary">{'Secondary Button'}</Button>
      <Button onClick={action('clicked')} size="sm" variant="secondary">{'Secondary Small Button'}</Button>
    </div>
  ), {
    info: 'Secondary buttons are used for secondary actions. They’re usually paired with a primary button to provide an alternate choice.',
  })

  .add('Ghost Button', () => (
    <div>
      <Button onClick={action('clicked')} variant="outline-primary">{'Ghost Button'}</Button>
      <Button onClick={action('clicked')} size="sm" variant="outline-primary">{'Small Ghost Button'}</Button>
    </div>
  ), {
    info: 'Use ghost buttons to reduce visual clutter on the screen. Take care that the actions via a ghost button are not primary actions.',
  })

  .add('Warning Button', () => (
    <div>
      <Button onClick={action('clicked')} variant="warning">{'Warning Button'}</Button>
      <Button onClick={action('clicked')} size="sm" variant="warning">{'Warning Small Button'}</Button>
    </div>
  ), {
    info: 'Just when you need to nudge the user’s attention to make sure they know it’s not another ordinary action, use the warning button.',
  })

  .add('Danger Button', () => (
    <div>
      <Button onClick={action('clicked')} variant="danger">{'Danger Button'}</Button>
      <Button onClick={action('clicked')} size="sm" variant="danger">{'Danger Small Button'}</Button>
    </div>
  ), {
    info: 'When the primary action is “negative” or irreversible, make use of the danger button to warn the user. For example, “Delete”, “Erase”, “Discard”, “Remove”, etc.',
  })

  .add('Success Button', () => (
    <div>
      <Button onClick={action('clicked')} variant="success">{'Success Button'}</Button>
      <Button onClick={action('clicked')} size="sm" variant="success">{'Success Small Button'}</Button>
    </div>
  ), {
    info: 'The “Yay, you did it!” button. Use them for highlighting “positive” actions like “Submit”.',
  })

  .add('Set of Buttons', () => (
    <div>
      <Button onClick={action('clicked')} variant="secondary">{'Secondary Button'}</Button>
      <Button onClick={action('clicked')} variant="primary">{'Primary Button'}</Button>
    </div>
  ), {
    info: 'To make clear a distinction between two options, sometimes it’s better to use different visual weights for buttons.',
  });

storiesOf('Dropdown Button', module)
  .add('Primary Dropdown', () => (
    <div>
      <DropdownButton
        title="Actions"
        variant="primary"
      >
        <Dropdown.Item eventKey="1">{'Merge'}</Dropdown.Item>
        <Dropdown.Item eventKey="2">{'Delete'}</Dropdown.Item>
        <Dropdown.Item active eventKey="3">
          {'Add ISRC Code'}
        </Dropdown.Item>
        <Dropdown.Item divider />
        <Dropdown.Item eventKey="4">{'Let it be'}</Dropdown.Item>
      </DropdownButton>
    </div>
  ), {
    info: 'Use a dropdown button when an action is to be chosen from multiple options.',
  })

  .add('Disabled Dropdown', () => (
    <div>
      <DropdownButton
        disabled
        title="Actions"
        variant="primary"
      />
    </div>
  ), {
    info: 'Keep a dropdown button disabled if its actions can’t yet be performed. For example, while selecting releases to be merged, disable the merge button until releases are selected.',
  });

storiesOf('Modal', module)
  .add('Default', () => (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{'Modal title'}</Modal.Title>
        </Modal.Header>

        <Modal.Body>{'One fine body...'}</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">{'Close'}</Button>
          <Button variant="primary">{'Save changes'}</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  ), {
    info: 'Modals are overlays over the primary application. They help communicate information via a secondary window and allow the user to maintain the context of a particular task. They can be used to get input necessary to make decisions by the system or to display contextual information.',
  });

storiesOf('Navbar', module)
  .add('Default', () => (
    <Navbar expand="lg" variant="">
      <Navbar.Brand href="#">{'MusicBrainz'}</Navbar.Brand>
      <Navbar.Toggle aria-controls="mb-navbar-nav" />
      <Navbar.Collapse id="mb-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#login" onClick={noop}>{'Login'}</Nav.Link>
          <Nav.Link href="#register" onClick={noop}>{'Register'}</Nav.Link>
          <NavDropdown id="mb-nav-dropdown" title="About Us">
            <NavDropdown.Item href="#about" onClick={noop}>
              {'About MusicBrainz'}
            </NavDropdown.Item>
            <NavDropdown.Item href="#sponsors" onClick={noop}>
              {'Sponsors'}
            </NavDropdown.Item>
            <NavDropdown.Item href="#team" onClick={noop}>
              {'Team'}
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#licenses" onClick={noop}>
              {'Data Licenses'}
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl placeholder="Search" type="text" />
          <FormControl as="select" className="custom-select">
            <option>{'Artist'}</option>
            <option>{'Recording'}</option>
            <option>{'Work'}</option>
          </FormControl>
          <Button variant="outline-success">{'Search'}</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  ));

storiesOf('Progress Bar', module)
  .add('Default', () => (
    <div>
      <ProgressBar now={40} variant="success" />
    </div>
  ), {
    info: 'Progress bars help give users immediate feedback. They reduce a user’s uncertainty and give them a reason to wait for an action to complete.',
  });

storiesOf('Pagination', module)
  .add('Default', () => (
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
  ), {
    info: 'Pagination helps divide the content into discrete buckets and enables the user to navigate efficiently between them.',
  })
  .add('Sizes', () => {
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
        <Pagination size="medium">{items}</Pagination>
        <br />
        <Pagination size="sm">{items}</Pagination>
      </div>
    );
  }, {
    info: 'Use smaller sizes where space is limited. For example, in tables.',
  });

storiesOf('Table', module)
  .add('Default', () => {
    const products = [
      {
        id: 1,
        name: 'test',
        price: 2.22,
      },
      {
        id: 2,
        name: 'no-test',
        price: 2.22,
      },
      {
        id: 3,
        name: 'maybe-test',
        price: 2.22,
      },
    ];
    const columns = [
      {
        dataField: 'id',
        text: 'Product ID',
      },
      {
        dataField: 'name',
        text: 'Product Name',
      },
      {
        dataField: 'price',
        text: 'Product Price',
      },
    ];
    return (
      <Table columns={columns} data={products} keyField="id" />
    );
  });

storiesOf('Tooltip', module)
  .add('Default', () => (
    <div>
      <OverlayTrigger
        defaultShow
        overlay={
          <Tooltip id="tooltip">
            <strong>{'New!'}</strong>
            {' Now add a release directly from here.'}
          </Tooltip>
        }
        placement="bottom"
      >
        <Button size="sm" variant="primary">
          {'Add a Release'}
        </Button>
      </OverlayTrigger>
    </div>
  ));
