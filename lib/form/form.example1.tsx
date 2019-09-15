import * as React from 'react'
import Form from './form'
import Button from '../button/button'

const FormExample = () => {
  const [formData, setFormData] = React.useState<{ [K: string]: any }>({
    username: '',
    password: ''
  })
  const [fields] = React.useState([
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } },
  ])
  const onSubmit = () => {
    console.log(formData)
  }

  return (
    <div>
      <Form
        value={formData}
        fields={fields}
        buttons={
          <React.Fragment>
            <Button type='submit' level='primary'>登录</Button>
            <Button
              onClick={() => setFormData({
                username: '',
                password: ''
              })}
            >
              重置
            </Button>
          </React.Fragment>
        }
        onChange={(formValue) => setFormData(formValue)}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default FormExample