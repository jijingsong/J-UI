import * as React from 'react';
import Button from './button';

const ButtonExample: React.FunctionComponent = () => {
  const [loading, setLoading] = React.useState(false)
  return (
    <div>
      <Button loading={true}>Loading</Button>
      <Button loading={loading} onClick={() => setLoading(!loading)}>Click me</Button>
    </div>
  )
}

export default ButtonExample;