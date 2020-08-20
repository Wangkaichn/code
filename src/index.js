import Oth from './other'


const test = async () => {
  const lodash = await import('lodash')
  Oth()
  const a = [1]
  const b = [2]
  const c = lodash.concat(a, b)
  console.info(new Date().toLocaleString(), a, b, c)
}
test()