import classes from '../classes'

describe('classea', () => {
  it('接受className', () => {
    const result = classes('a')
    expect(result).toEqual('a')
  })
  it('接受className', () => {
    const result = classes('a', 'b')
    expect(result).toEqual('a b')
  })
  it('接受className', () => {
    const result = classes('a', undefined)
    expect(result).toEqual('a')
  })
  it('接受className', () => {
    const result = classes('a', undefined, false, '中文', null)
    expect(result).toEqual('a 中文')
  })
  it('接受className', () => {
    const result = classes()
    expect(result).toEqual('')
  })
})