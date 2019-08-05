/**
 * @desc A querystring parser with nesting support
 */

/**
 * @desc 解析URL
 * @param {String} str 
 * @param {Object} options 
 * @param {String} options.delimiter // 分隔符
 */
const parse = (str, options = {}) => {
  let config = Object.assign({
    delimiter: '&'
  }, options)

  return str.split(config.delimiter).reduce((ret, cur) => {
    let [key, value] = cur.split('=')
    if (!value) return ret
    // ret[key] = value
    deepSet(ret, key, value)
    return ret
  }, {})
}

// -------util--------
/**
 * @desc 辅助函数 深层级设置
 */
const deepSet = (ret, key, value) => {
  /* eslint-disable */
  let path = key.split(/[\[\]]/g).filter(item => !!item)
  // console.log(path)
  let i = 0
  for (; i < path.length - 1; i++) {
    if (ret[path[i]] === undefined) {
      if (path[i + 1].match(/^\d+$/)) {
        ret[path[i]] = []
      } else {
        ret[path[i]] = {}
      }
    }
    ret = ret[path[i]]
  }
  ret[path[i]] = decodeURIComponent(value)
  // console.log(ret)
}

// Test
console.log(parse('a=1&b=2&c=3'))
console.log(parse('a&b&c'))
console.log(parse('a[name][second]=careteen&a[company]=sohu&b=y'))
console.log(parse('color=Deep%20Blue'))
console.log(parse('a[0]=1&a[1]=2'))

// export {
//   parse
// }
