import * as React from 'react';
import Demo from '../../demo';
import IconExample1 from './icon.example.1';
import IconExample2 from './icon.example.2';

const IconDemo = () => {
  return (
    <React.Fragment>
      <Demo code={require('!!raw-loader!./icon.example.1.tsx').default}>
        <IconExample1 />
      </Demo>
      <Demo code={require('!!raw-loader!./icon.example.2.tsx').default}>
        <IconExample2 />
      </Demo>
    </React.Fragment>
  )
}

export default IconDemo