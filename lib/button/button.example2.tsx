import * as React from 'react';
import Button from './button';

const ButtonExample: React.FunctionComponent = () => {
  return (
    <div>
      <Button disabled={true}>Disabled</Button>
    </div>
  )
}

export default ButtonExample;