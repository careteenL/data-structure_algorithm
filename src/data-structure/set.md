## 集合 - Set

### Catalog

- [What](#what)
- [How](#how)
- [API](#api)
- [Usage](#usage)
- [Where](#where)

### What

集合是由一组无需且唯一的项组成的。和数学中有序集合概念相同。

ES6也实现了Set，和本处实现的差别在于`values()`返回值类型为`Iterator`，而本处返回的是一个`Array`。
```js
// ES6
let set = new Set()
set.add(1)
set.values() // => 返回类型为 Iterator
```

### How

- [用对象实现集合](./set.js)

### API

#### has

| desc | param | mean | type | return |
| :---: | :---: | :--: | :--: | :--: |
| 某个元素是否在集合中 | element | Any | - | Boolean |

#### add

| desc | param | mean | type | return |
| :---: | :---: | :--: | :--: | :--: |
| 添加元素 | element | - | Any | Boolean |

#### delete

| desc | param | mean | type | return |
| :---: | :---: | :--: | :--: | :--: |
| 删除元素 | element | - | Any | Boolean |

#### values

| desc | param | mean | type | return |
| :---: | :---: | :--: | :--: | :--: |
| 获取集合的所有值 | - | - | - | Array<Any> |

#### size

| desc | param | mean | type | return |
| :---: | :---: | :--: | :--: | :--: |
| 获取集合长度 | - | - | - | Number |

#### isEmpty

| desc | param | mean | type | return |
| :---: | :---: | :--: | :--: | :--: |
| 集合是否为空 | - | - | - | Boolean |

#### clear

| desc | param | mean | type | return |
| :---: | :---: | :--: | :--: | :--: |
| 清空集合 | - | - | - | - |

#### toString

| desc | param | mean | type | return |
| :---: | :---: | :--: | :--: | :--: |
| 打印集合 | - | - | - | String |

#### union

| desc | param | mean | type | return |
| :---: | :---: | :--: | :--: | :--: |
| 两个集合的并集 | otherSet | - | Set | Set |

#### intersection

| desc | param | mean | type | return |
| :---: | :---: | :--: | :--: | :--: |
| 两个集合的交集 | otherSet | - | Set | Set |

#### difference

| desc | param | mean | type | return |
| :---: | :---: | :--: | :--: | :--: |
| 两个集合的差集 | otherSet | - | Set | Set |

#### isSubsetOf

| desc | param | mean | type | return |
| :---: | :---: | :--: | :--: | :--: |
| 是否为某个集合的子集 | otherSet | - | Set | Set |


### Usage

to be replaced

### Where

- to be replaced

- 更多使用场景...

