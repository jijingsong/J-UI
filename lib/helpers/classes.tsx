function classes(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(' ')
}

export default classes
interface options {
  extra: string | undefined
}

interface classObj {
  [Key: string]: boolean
}

function scopedClassMaker(prefix: string) {
  return function (name?: string | classObj, options?: options) {
    let result
    if (typeof name === 'object') {
      let nameArr = Object.keys(name).filter(key => name[key])
      result = nameArr.map(name => [prefix, name].filter(Boolean).join('-')).join(' ')
    } else {
      result = [prefix, name].filter(Boolean).join('-')
    }

    if (options && options.extra) {
      return [result, options.extra].filter(Boolean).join(' ')
    } else {
      return result
    }
  }
}

export { scopedClassMaker }