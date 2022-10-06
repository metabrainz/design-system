import {withDesign} from 'storybook-addon-designs';
import React from 'react';

import {Button} from '../components';

export default {
  component: Button,
  decorators: [withDesign],
  title: 'CritiqueBrainz',
};

export const cbRedesign = () => <Button>{'CritiqueBrainz'}</Button>;

cbRedesign.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nSqrbsMcVARmj52kyXYqwb/CritiqueBrainz-redesign?node-id=0%3A1',
  },
};
