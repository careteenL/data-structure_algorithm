/**
 * @desc 二叉搜索树
 */ 
import Node from './models/node'
import Queue from './queue'

export default class BST {
  constructor () {
    this.root = null
    this.count = 0
  }

  /**
   * @desc 向树中插入一个键
   * @param {Number} key 
   */ 
  insert (key) {
    this.root = this._insert(this.root, key)
  }

  // 向子树中插入一个键
  _insert (node, key) {
    // 1.空树时 作为根节点
    // 2.作为子树没有左/右子节点时，直接当做此节点的左/右子节点
    if (!node) {
      this.count++
      return new Node(key)
    }
    if (key < node.key) {
      node.left = this._insert(node.left, key)
    } else if (key > node.key) {
      node.right = this._insert(node.right, key)
    }
    return node
  }

  /**
   * @desc 在树中查找是否存在某个键
   * @param {Number} key
   * @return {Boolean} 
   */ 
  search (key) {
    return this._search(this.root, key)
  }

  // 在子树中查找是否存在某个键
  _search (node, key) {
    if (!node) return false
    if (key < node.key) {
      return this._search(node.left, key)
    } else if (key > node.key) {
      return this._search(node.right, key)
    }
    return true
  }

  /**
   * @desc 取到树中最小的节点
   * @return {Node}
   */ 
  min () {
    return this._min(this.root)
  }

  // 取到子树中最小的节点
  _min (node) {
    if (!node.left) return node
    return this._min(node.left)
  }

  /**
   * @desc 取到树中最大的节点
   * @return {Node}
   */ 
  max () {
    return this._max(this.root)
  }

  // 取到子树中最大的节点
  _max (node) {
    if (!node.right) return node
    return this._max(node.right)
  }  

  /**
   * @desc 树的节点个数
   * @return {Number}
   */ 
  size () {
    return this.count
  }

  /**
   * @desc 从树中移除某个键
   * @param {Number} key 
   */ 
  remove (key) {
    this.root = this._remove(this.root, key)
  }

  // 从子树中移除某个键
  _remove (node, key) {
    if (!node) return null
    if (key < node.key) { // 寻找的节点比当前节点小，去左子树找
      node.left = this._remove(node.left, key)
    } else if (key > node.key) { // 寻找的节点比当前节点大，去右子树找
      node.right = this._remove(node.right, key)
    } else { // 找到需删除节点
      // 1. 节点拥有左右子树中的一个 or 为叶子节点
      //    将子树返回 or 返回null
      if (!node.left) return node.right
      if (!node.right) return node.left
      // 2. 节点拥有左右子树
      //    1).找到后继节点，即当前节点右子树的最小值
      //    2).将最小值赋值到 改删除键 的节点上
      //    3).删除最小值
      const minNode = this._min(node.right)
      node.key = minNode.key
      node.right = this._remove(node.right, minNode.key)      
    }
    this.count--
    return node
  }

  /**
   * @desc 对树进行先序遍历
   * @param {Function} callback 
   */ 
  preOrderTraverse (callback) {
    this._preOrderTraverse(this.root, callback)
  }

  // 对子树进行先序遍历
  _preOrderTraverse (node, callback) {
    if (node) {
      callback(node.key)
      this._preOrderTraverse(node.left, callback)      
      this._preOrderTraverse(node.right, callback)
    }
  }

  /**
   * @desc 对树进行中序遍历
   * @param {Function} callback 
   */ 
  inOrderTraverse (callback) {
    this._inOrderTraverse(this.root, callback)
  }

  // 对子树进行中序遍历
  _inOrderTraverse (node, callback) {
    if (node) {
      this._inOrderTraverse(node.left, callback)
      callback(node.key)
      this._inOrderTraverse(node.right, callback)
    }
  }
  
  /**
   * @desc 对树进行后序遍历
   * @param {Function} callback 
   */ 
  postOrderTraverse (callback) {
    this._postOrderTraverse(this.root, callback)
  }

  // 对子树进行后序遍历
  _postOrderTraverse (node, callback) {
    if (node) {
      this._postOrderTraverse(node.left, callback)      
      this._postOrderTraverse(node.right, callback)
      callback(node.key)
    }
  }  

  /**
   * @desc 对树进行广度遍历
   * @param {Function} callback 
   */ 
  breadthTraverse (callback) {
    this._breadthTraverse(this.root, callback)
  }

  // 对子树进行广度遍历
  _breadthTraverse (node, callback) {
    if (!node) return null
    // 使用队列为辅助数据结构
    let queue = new Queue()
    queue.enqueue(node)
    // 循环判断队列是否为空，为空则树遍历完毕
    while (!queue.isEmpty()) {
      let curNode = queue.dequeue()
      callback && callback(curNode)
      if (curNode.left) queue.enqueue(curNode.left)
      if (curNode.right) queue.enqueue(curNode.right)
    }
  }

  /**
   * @desc 反转二叉树
   */
  reverse (node = this.root) {
    if (!node) return
    const tmp = node.left
    node.left = node.right
    node.right = tmp
    this.reverse(node.left)
    this.reverse(node.right)
  }
}
