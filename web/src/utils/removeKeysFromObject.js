export default (obj, excludeKeys) => {
  const excludeKeysArray = Array.isArray(excludeKeys) ? excludeKeys : [excludeKeys]
  return Object.keys(obj)
    .filter(key => !excludeKeysArray.includes(key))
    .map(key => ({ [key]: obj[key] }))
    .reduce((acc, curr) => ({
      ...acc,
      ...curr
    }))
}
