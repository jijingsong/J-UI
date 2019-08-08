import classes, { scopedClassMaker } from '../classes'

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

describe('scopeClassMaker', () => {
  it('接受字符串或对象', () => {
    const sc = scopedClassMaker('jui-layout')
    expect(sc('')).toEqual('jui-layout')
    expect(sc('x')).toEqual('jui-layout-x')
    expect(sc({ x: true, y: false })).toEqual('jui-layout-x')
    expect(sc({ x: true, y: true })).toEqual('jui-layout-x jui-layout-y')
    expect(sc({ x: true, y: true }, { extra: 'extra' })).toEqual('jui-layout-x jui-layout-y extra')
  })
})