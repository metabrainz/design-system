import {withDesign} from 'storybook-addon-designs';
import React from 'react';

import {Button} from '../components';
import Register from '../components/shared/Login';

export default {
  component: Button,
  decorators: [withDesign],
  title: 'Register',
};

export const register = () => <Register cover="/cover.jpg" />;

register.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/L0qNv3z5vSkNDoiX7BzaY5/MetaBrainz-redesign?node-id=2%3A41',
  },
};
