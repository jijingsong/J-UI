import * as React from 'react'
import Form from './form'
import validator from './validator'
import Button from '../button/button'

const usernames = ['a', 'b', 'c']
const checkUserName = (name: string, succeed: () => void, fail: () => void) => {
  setTimeout(() => {
    if (usernames.indexOf(name) === -1) {
      console.log('success')
      succeed()
    } else {
      console.log('fail')
      fail()
    }
  }, 1000);
}

const FormExample = () => {
  const [formData, setFormData] = React.useState<{ [K: string]: any }>({
    username: '',
    password: ''
  })
  const [errors, setErrors] = React.useState({})
  const [fields] = React.useState([
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } },
  ])
  const rules = [
    {
      key: 'username', validator: (value: string) => {
        return new Promise<string>((resolve, reject) => {
          checkUserName(value, resolve, () => {
            reject('用户名已存在')
          })
        })
      }
    },
    { key: 'username', required: true },
    { key: 'username', minLength: 6, maxLength: 12 },
    { key: 'username', pattern: /^[a-zA-Z]+$/ },
    { key: 'password', required: true },
    { key: 'password', minLength: 6, maxLength: 12 },
  ]
  const onSubmit = () => {
    validator(formData, rules, (errorsMap) => {
      setErrors(errorsMap)
      if (!Object.keys(errorsMap).length) {
        console.log(formData)
        console.log('提交成功')
      } else {
        console.log('提交失败')
      }
    })
  }

  return (
    <div>
      <Form
        value={formData}
        fields={fields}
        buttons={
          <React.Fragment>
            <Button type='submit' level='primary'>提交</Button>
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
        errors={errors}
        errorsDisplayFirst={true}
      />
    </div>
  )
}

export default FormExample