import * as React from 'react'
import classes from '../helpers/classes'
import Icon from '../icon/icon'
import Button from '../button/button'
import './input.scss'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string,
  sizeType?: 'large' | 'default' | 'small',
}

const Input: React.FunctionComponent<Props> = (props) => {
  const { className, sizeType, ...rest } = props
  return (
    <input
      className={classes('jui-input', sizeType ? `jui-input-${sizeType}` : '', className)}
      {...rest}
    />
  )
}

interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string,
  sizeType?: 'large' | 'default' | 'small',
  onSearch?: (value: string) => void,
  enterButton?: string | undefined | boolean
}

const SearchInput: React.FunctionComponent<SearchProps> = (props) => {
  const { className, sizeType, onSearch, enterButton, ...rest } = props
  let [value, setValue] = React.useState('')
  const handleSearch = (value: string) => {
    onSearch && onSearch(value)
  }
  const handleKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      handleSearch(value)
    }
  }
  const handleClick = () => {
    handleSearch(value)
  }
  return (
    <span className={enterButton ? 'jui-input-group-wrapper' : 'jui-input-affix-wrapper'}>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        onKeyDown={handleKeyDown}
        className={classes('jui-input', sizeType ? `jui-input-${sizeType}` : '', className)}
        {...rest}
      />
      {
        enterButton ?
          <span className='jui-input-group-addon'>
            <Button size={sizeType} level='primary' onClick={handleClick}>{enterButton}</Button>
          </span> :
          <span className='jui-input-suffix'>
            <Icon name='search' />
          </span>
      }
    </span>
  )
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string,
}

const TextArea: React.FunctionComponent<TextAreaProps> = (props) => {
  const { className, ...rest } = props
  return (
    <textarea
      className={classes('jui-textarea', className)}
      {...rest}
    />
  )
}

export default Input
export { SearchInput, TextArea }

Input.defaultProps = {
  sizeType: 'default'
}