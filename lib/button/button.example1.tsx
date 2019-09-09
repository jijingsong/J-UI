import * as React from 'react';
import Button from './button';

const ButtonExample: React.FunctionComponent = () => {
  return (
    <div>
      <Button level='primary'>Primary</Button>
      <Button level='default'>Default</Button>
      <Button level='dashed'>Dashed</Button>
      <Button level='dangerous'>Danger</Button>
    </div>
  )
}

export default ButtonExample;