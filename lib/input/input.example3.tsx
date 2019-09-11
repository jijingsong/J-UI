import * as React from 'react'
import { SearchInput } from './input'
import './input.example.scss'

const InputExample: React.FunctionComponent = () => {
  const handleSearch = (value: string) => {
    console.log('value: ', value);
  }
  return (
    <React.Fragment>
      <div>
        <SearchInput style={{width: 200}} placeholder='input search text' onSearch={(value) => handleSearch(value)} />
      </div>
      <br/>
      <div>
        <SearchInput enterButton='Search' style={{width: 300}} placeholder='input search text' onSearch={(value) => handleSearch(value)} />
      </div>
    </React.Fragment>
  )
}

export default InputExample