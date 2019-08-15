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
  return (name?: string | classObj, options?: options) => {
    return (typeof name === 'object' ? Object.keys(name).filter(key => name[key]) : [name])
      .map(name => [prefix, name]
        .filter(Boolean)
        .join('-'))
      .concat(options && options.extra ? [options.extra] : [])
      .join(' ')
  }
}

export { scopedClassMaker }