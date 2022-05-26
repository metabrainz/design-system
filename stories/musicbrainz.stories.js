import {withDesign} from 'storybook-addon-designs';
import React from 'react';

import {Button} from '../components';

export default {
  component: Button,
  decorators: [withDesign],
  title: 'MusicBrainz',
};

export const mbRedesign = () => <Button>{'MusicBrainz'}</Button>;

mbRedesign.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/ln8XiFLit634KC3YkUW2RS',
  },
};
