/**
 * @desc 一棵树的节点 暂没提供增删改查的API
 */
class Tree {
  constructor (value) {
    this.left = null
    this.right = null
    this.value = value
    this.root = this
  }

  /**
   * @desc 返回二叉树从左侧看的轮廓
   * @param {Node} node 
   * @param {String} deep 广度优先遍历的深度
   * @param {Array} outline 从左侧看的缓存队列
   * @return outline
   */
  leftOutline (node = this.root, deep = 0, outline = []) {
    if (!node) return
    if (!outline[deep]) {
      outline[deep] = node.value
    }
    this.leftOutline(node.left, deep + 1, outline)
    this.leftOutline(node.right, deep + 1, outline)
    return outline
  }
  /**
   * @desc 返回二叉树每层最大值的列表
   * @param {Node} node 
   * @param {String} deep 广度优先遍历的深度
   * @param {Array} maxList 每层最大值的缓存队列
   * @return maxList
   */
  maxOfLine (node = this.root, deep = 0, maxList = []) {
    if (!node) return
    maxList[deep] = Math.max.call(null, maxList[deep] || -1, node.value)
    this.maxOfLine(node.left, deep + 1, maxList)
    this.maxOfLine(node.right, deep + 1, maxList)
    return maxList
  }
}

// Test
const root1 = new Tree(1)
root1.left = new Tree(5)
root1.right = new Tree(9)
root1.left.left = new Tree(4)
root1.left.right = new Tree(2)
root1.right.left = new Tree(7)
root1.right.right = new Tree(3)
root1.right.right.left = new Tree(8)

console.log('leftOutline', root1.leftOutline())
console.log('maxOfLine', root1.maxOfLine())

export default Tree
