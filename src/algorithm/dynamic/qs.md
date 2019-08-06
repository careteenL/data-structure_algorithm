# 解析URL字符串

## 前言

写一个程序`parse`，解析下面的`queryString`，返回一个对象
```js
console.log(parse('a=1&b=2&c=3')) // => { a: '1', b: '2', c: '3' }
console.log(parse('a&b&c')) // => {}
console.log(parse('a[name][second]=careteen&a[company]=sohu&b=y')) // => { a: { name: { second: 'careteen' }, company: 'sohu' }, b: 'y' }
console.log(parse('color=Deep%20Blue')) // => { color: 'Deep Blue' }
console.log(parse('a[0]=1&a[1]=2')) // => { a: [ '1', '2' ] }
```

## 分析

首先要先了解`url参数`的规则

- 以`&`或其他字符进行分割，且以`=`分割键值对
- `&`和`=`分割时可能没有值
- `=`后面的值可能已经`encodeURIComponent`转码，需要解码
- 可能会是一个多层级的对象`a[name][second]=careteen&a[company]=sohu&b=y`，需要按层级设置对象
- 对象的键可能为一个数字`a[0]=1&a[1]=2`，此时应该处理返回成数组

## 实现

针对上述分析其规则，解析一个URL需要考虑诸多情况。

具体[代码和测试用例实现](./qs.js)

下面给出具体实现
```js
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
```

辅助函数
```js
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
```

测试用例
```js
console.log(parse('a=1&b=2&c=3')) // => { a: '1', b: '2', c: '3' }
console.log(parse('a&b&c')) // => {}
console.log(parse('a[name][second]=careteen&a[company]=sohu&b=y')) // => { a: { name: { second: 'careteen' }, company: 'sohu' }, b: 'y' }
console.log(parse('color=Deep%20Blue')) // => { color: 'Deep Blue' }
console.log(parse('a[0]=1&a[1]=2')) // => { a: [ '1', '2' ] }
```

## 总结

解析字符串看似简单，实则考察诸多知识点
- 使用`reduce`去简化流程
- 考虑`URL`规则满足各种需求
- 检验对正则的掌握
- 深层级对象的设置需要使用循环去合理设置
- 区分数组和对象两种场景
- 别忘了解码
