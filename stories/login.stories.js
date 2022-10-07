import {withDesign} from 'storybook-addon-designs';
import React from 'react';

import {Button} from '../components';
import Login from '../components/shared/Login';

export default {
  component: Button,
  decorators: [withDesign],
  title: 'Login',
};

export const login = () => <Login cover="/cover.jpg" />;

login.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/L0qNv3z5vSkNDoiX7BzaY5/MetaBrainz-redesign?node-id=1%3A135',
  },
};
