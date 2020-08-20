import lodash from 'lodash'

export default () => {
  const a = [10]
  const b = [10]
  const c = lodash.concat(a, b)
  console.info('123other.js: ', new Date().toLocaleString(), a, b, c)
}