// 构建节点
class Node {
  constructor(value) {
    this.val = value; // 数值
    this.child = []; // 孩子结点
    this.end = false; // 是否是独立的单词
    this.height = 0; // 深度
    this.num = 1; // 经过单词数量
  }

  search(key) {
    for (let i = 0; i < this.child.length; ++i) {
      if (this.child[i].val == key) {
        return this.child[i];
      }
    }
    return null;
  }
}

// 实现字典树
class TrieTree {
  constructor() {
    this.root = new Node(null);
    this.size = 1;
  }
  // 插入
  insert(value) {
    let node = this.root;
    for (let ch of value) {
      let son = node.search(ch);
      if (son == null) {
        son = new Node(ch); // 构建
        son.height = node.height + 1;
        node.child.push(son);
      } else {
        son.num++;
      }
      node = son; // 向下递归
    }

    if (!node.end) {
      // 不是结束标志，则增加结束标志
      this.size++;
      node.end = true;
    }
  }
  // *** 自动补全 ***
  relate(value) {
    let node = this.root;
    let arr = [];
    for (let ch of value) {
      let son = node.search(ch);
      if (son == null) {
        // 不存在前缀
        return arr;
      }
      node = son;
    }
    // 存在公共前缀，将该分支下数据输出
    console.log("存在" + value + "公共前缀");
    this.DFS(arr, value, node);
    console.log(arr);
  }

  // 深搜
  DFS(arr, value, node) {
    if (node != null) {
      for (var i = 0; i < node.child.length; ++i) {
        if (node.child[i].end) {
          arr.push(value + node.child[i].val);
        }
        this.DFS(arr, value + node.child[i].val, node.child[i]);
      }
    }
  }
}

// Test
const trie = new TrieTree()
trie.insert('apple')
trie.insert('app careteen')
trie.insert('app lanlan')

trie.relate('app')
// 存在app公共前缀
// [ 'apple', 'app careteen', 'app lanlan' ]
