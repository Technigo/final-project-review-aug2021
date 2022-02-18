import React from 'react';
import { useSelector } from 'react-redux';

import BaseStory1 from './BaseStory1';
import BaseStory2 from './BaseStory2';
import BaseStory3 from './BaseStory3';
import BaseStory4 from './BaseStory4';
import BaseStory5 from './BaseStory5';
import BaseStory6 from './BaseStory6';
import BaseStory7 from './BaseStory7';
import Summary from '../Summary';

const BaseStoryRoof = () => {
  const storyPage = useSelector((store) => store.storyElements.storyPage);

  if (storyPage === 1) {
    return <BaseStory1 />;
  }
  if (storyPage === 2) {
    return <BaseStory2 />;
  }
  if (storyPage === 3) {
    return <BaseStory3 />;
  }
  if (storyPage === 4) {
    return <BaseStory4 />;
  }
  if (storyPage === 5) {
    return <BaseStory5 />;
  }
  if (storyPage === 6) {
    return <BaseStory6 />;
  }
  if (storyPage === 7) {
    return <BaseStory7 />;
  } else {
    return <Summary />;
  }
};

export default BaseStoryRoof;
