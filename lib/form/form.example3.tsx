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
  }, 2000);
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
  const [loading, setLoading] = React.useState(false)
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
    { key: 'username', required: true, message: '请输入' },
    { key: 'username', minLength: 6, maxLength: 12, message: '长度为6-12位' },
    { key: 'username', pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/, message: '必须为数字加字母组合' },
    { key: 'password', required: true, message: '请输入' },
    { key: 'password', minLength: 6, maxLength: 12, message: '长度为6-12位' },
  ]
  const onSubmit = () => {
    setLoading(true)
    validator(formData, (rules), (errorsMap: any) => {
      setErrors(errorsMap)
      setLoading(false)
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
            <Button type='submit' level='primary' loading={loading}>提交</Button>
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