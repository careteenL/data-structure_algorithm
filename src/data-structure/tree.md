## 树 - Tree

### Catalog

- [What](#what)
- [How](#how)
- [API](#api)
- [Usage](#usage)
- [Where](#where)
  - [反转二叉树](#反转二叉树)

### What

树是一种分层数据的抽象模型。现实生活中最常见的树时家谱、公司的组织架构。

#### 二叉树

二叉树中的节点最多只能有两个子节点：一个是左侧子节点，另一个是右侧子节点。这些定义有助于我们写出更高效的向/从树中插入、查找和删除节点的算法。

#### 二叉搜索树

二叉搜索树是二叉树的一种，但是它只允许你在左侧及诶单存储比父节点小的值，在右侧节点存储比父节点大或等于的值。

### How

- [实现二叉搜索树](./binary-search-tree.js)

### API

#### bst.insert(key)

| desc | param | mean | type | return |
| :---: | :---: | :--: | :--: | :--: |
| 向树中插入一个键 | key | - | Number | - |

#### bst.search(key)

| desc | param | mean | type | return |
| :---: | :---: | :--: | :--: | :--: |
| 在树中查找是否存在某个键 | key | - | Number | Boolean |

#### bst.insert(key)

| desc | param | mean | type | return |
| :---: | :---: | :--: | :--: | :--: |
| 向树中插入一个键 | key | - | Number | - |

#### bst.min()

| desc | param | mean | type | return |
| :---: | :---: | :--: | :--: | :--: |
| 取到树中最小的节点 | - | - | - | Node |

#### bst.max()

| desc | param | mean | type | return |
| :---: | :---: | :--: | :--: | :--: |
| 取到树中最大的节点 | - | - | - | Node |

#### bst.size()

| desc | param | mean | type | return |
| :---: | :---: | :--: | :--: | :--: |
| 树的节点个数 | - | - | - | Number |

#### bst.remove(key)

| desc | param | mean | type | return |
| :---: | :---: | :--: | :--: | :--: |
| 从树中移除某个键 | key | - | Number | - |

#### bst.preOrderTraverse(callback)

| desc | param | mean | type | return |
| :---: | :---: | :--: | :--: | :--: |
| 对树进行先序遍历 | callback | - | Function | - |

- 先序遍历是以优先于后代节点的书序访问每个节点的。
- 应用
  - 打印一个结构化的文档
  - ...

#### bst.inOrderTraverse(callback)

| desc | param | mean | type | return |
| :---: | :---: | :--: | :--: | :--: |
| 对树进行中序遍历 | callback | - | Function | - |

- 中序遍历是一种以上行书序访问BST所有节点的遍历方式，也就是说以从小到大的顺序访问所有节点。
- 应用
  - 对树进行排序操作
  ```js
  import { BST } from 'ct-dsa'
  const bst = new BST()
  bst.insert(7)
  bst.insert(15)
  bst.insert(5)
  bst.insert(3)
  bst.insert(9)
  bst.insert(8)
  bst.insert(10)
  bst.insert(13)
  bst.insert(12)
  bst.insert(14)
  bst.insert(20)
  bst.insert(18)
  bst.insert(25)

  bst.inOrderTraverse((node) => {
    console.log(node.key)
  })
  ```
  - ...

#### bst.postOrderTraverse(callback)

| desc | param | mean | type | return |
| :---: | :---: | :--: | :--: | :--: |
| 对树进行后序遍历 | callback | - | Function | - |

- 后序遍历是先访问节点后代节点，再访问节点本身。
- 应用
  - 计算一个目录和它的子目录中所有文件所占空间的大小
  - ...

#### bst.breadthTraverse(callback)

| desc | param | mean | type | return |
| :---: | :---: | :--: | :--: | :--: |
| 对树进行广度遍历 | callback | - | Function | - |

- 相比于以上先序、中序、后序遍历三种深度遍历，广度遍历能得出比较清晰的层级关系。

#### bst.insert(callback)

| desc | param | mean | type | return |
| :---: | :---: | :--: | :--: | :--: |
| 向树中插入一个键 | callback | - | Number | - |

#### bst.insert(key)

| desc | param | mean | type | return |
| :---: | :---: | :--: | :--: | :--: |
| 向树中插入一个键 | key | - | Number | - |

### Usage

to be replaced

### Where

#### 反转二叉树

- [详见](./tree-reverse.md)

#### 更多使用场景...

