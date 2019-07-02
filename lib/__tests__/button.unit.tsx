import * as renderer from 'react-test-renderer'
import * as React from 'react'
import Button from '../button'

describe('button test', () => {
  it('is div', () => {
    const json = renderer.create(<Button/>).toJSON
    expect(json).toMatchSnapshot()
  })
})