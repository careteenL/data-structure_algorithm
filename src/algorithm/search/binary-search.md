## 二分查找法 - Binary Search

### Catalog

- [What](#what)
- [How](#how)
- [API](#api)
- [Usage](#usage)
- [Where](#where)

### What

to be replaced

### How

二分思路
- 1、已排序数组arr
- 2、取到左右边界 l = 0, r = arr.length -1
- 3、取到猜想值 guess = Math.floor((l + r) / 2)
- 4、将猜想值guess和目标值val相比
-    4.1 如果 arr[guess] > val 则新左边界 r = guess - 1
-    4.2 如果 arr[guess] < val 则新右边界 l = guess + 1
-    4.3 如果 arr[guess] = val 则返回 guess
- 5、回到第三步循环直到 l > r 结束循环
- 6、若上面循环没有返回值即没找到目标值的下标 则返回 -1

### API

#### to be replaced

| desc | param | mean | type | return |
| :---: | :---: | :--: | :--: | :--: |
| - | - | - | - | - |

...

### Usage

```js
import { binarySearch } from '@careteen/dsa'
const arr = [3, 5, 20, 22, 25, 33, 45, 49, 66, 71, 78]
console.log( binarySearch(arr, 88) ) // -1
console.log( binarySearch(arr, 68) ) // -1
console.log( binarySearch(arr, 22) ) // 3
```

### Where

to be replaced

- 更多使用场景...

