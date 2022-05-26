import {withDesign} from 'storybook-addon-designs';
import React from 'react';

import {Button} from '../components';

export default {
  component: Button,
  decorators: [withDesign],
  title: 'ListenBrainz',
};

export const lbRedesign = () => <Button>{'ListenBrainz'}</Button>;

lbRedesign.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/YRbCOtFHBez8XmMdCKbGta',
  },
};
