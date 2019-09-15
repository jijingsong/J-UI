import * as React from 'react'
import Form from './form'
import validator from './validator'
import Button from '../button/button'

const FormExample = () => {
  const [formData, setFormData] = React.useState<{ [K: string]: any }>({
    email: '',
    username: '',
    password: ''
  })
  const [errors, setErrors] = React.useState({})
  const [fields] = React.useState([
    { name: 'email', label: '邮箱', input: { type: 'text' } },
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } },
  ])
  const rules = [
    { key: 'username', required: true, message: '请输入' },
    { key: 'username', minLength: 6, maxLength: 12, message: '长度为6-12位' },
    { key: 'username', pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/, message: '必须为数字加字母组合' },
    { key: 'password', required: true, message: '请输入' },
    { key: 'password', minLength: 6, maxLength: 12, message: '长度为6-12位' },
    { key: 'email', required: true, message: '请输入' },
    { key: 'email', pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)$/, message: '格式不正确' },
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
        rules={rules}
        buttons={
          <React.Fragment>
            <Button type='submit' level='primary'>提交</Button>
            <Button
              onClick={() => setFormData({
                email: '',
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