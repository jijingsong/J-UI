import * as React from 'react'
import Input from '../input/input'
import './form.scss'

interface formValue {
  [K: string]: any
}

interface Props {
  value: formValue,
  fields: Array<{ name: string, label: string, input: { type: string } }>
  rules?: Array<{ [k: string]: any }>
  buttons: React.ReactFragment
  onSubmit: () => void
  onChange: (value: formValue) => void
  errors?: { [k: string]: string[] }
  errorsDisplayFirst?: boolean
}

const Form: React.FunctionComponent<Props> = (props) => {
  const formData = props.value
  const rules = props.rules
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    props.onSubmit()
  }
  const onInputChange = (name: string, value: string) => {
    props.onChange({ ...formData, [name]: value })
  }

  return (
    <form onSubmit={onSubmit} className='jui-form'>
      <table className='jui-form-table'>
        <tbody>
          {
            props.fields.map(item => (
              <tr key={item.name} className='jui-form-tr'>
                <td className='jui-form-td'>
                  <span className='jui-form-label'>
                    {
                      rules && rules.find(rule => rule.key === item.name && rule.required)
                        ? <span style={{ color: 'red', marginRight: 5 }}>*</span>
                        : null
                    }
                    {item.label}
                  </span>
                </td>
                <td className='jui-form-td'>
                  <Input
                    type={item.input.type}
                    value={formData[item.name]}
                    onChange={(e) => onInputChange(item.name, e.target.value)}
                  />
                  <div className='jui-form-error'>
                    {
                      props.errors
                        ? props.errorsDisplayFirst && props.errors[item.name]
                          ? props.errors[item.name][0]
                          : props.errors[item.name]
                        : null
                    }
                    <span>&nbsp;</span>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
        <tbody>
          <tr className='jui-form-tr'>
            <td className='jui-form-td'></td>
            <td className='jui-form-td'>
              {
                props.buttons
              }
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  )
}

Form.defaultProps = {
  errorsDisplayFirst: true
}

export default Form