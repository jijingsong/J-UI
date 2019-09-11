import * as React from 'react';
import Button from './button';

const ButtonExample: React.FunctionComponent = () => {
  return (
    <div>
      <Button level='primary' size='large'>Large</Button>
      <Button level='primary' size='default'>Middle</Button>
      <Button level='primary' size='small'>Small</Button>
    </div>
  )
}

export default ButtonExample;