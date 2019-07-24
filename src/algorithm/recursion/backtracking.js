/**
 * @desc 回溯算法 - 老鼠逃出迷宫
 * @param {Array<Array>} maze 二维数组的矩阵迷宫 
 *              0表示没有走过的路 1表示墙体 2表示出口
 * @param {Array<Number>} pos 当前位置
 * @param {Array<Array>} path 路径
 * @param {Array<Number>} transverse 记录走过的地方
 * @return {Array<Array>} path 走出迷宫的路径
 */
export function rat_in_maze (
  maze, pos = [0, 0], path = [[...pos]], transverse = []
) {
  const [x, y] = pos
  if (maze[x][y] === 2) { // 结束条件
    return path
  }
  // 记录走过的位置
  transverse[x * maze.length + y] = 1
  // 寻找可能的方向路径
  const choices = [
    [x + 1, y], [x - 1, y], // 向右 左
    [x, y + 1], [x, y - 1] // 向上 下
  ].filter(([nextX, nextY]) => {
    return nextX >=0 && nextY >= 0 // 上 左 边界
      && nextX < maze.length && nextY < maze[0].length // 右 下 边界
      && maze[nextX][nextY] !== 1 // 非墙体
      && !transverse[nextX * maze.length + nextY] // 非已经走过的格子
  })
  // 对每个选择 继续递归 寻找路径
  for (const [nextX, nextY] of choices) {
    const p = rat_in_maze(maze, [nextX, nextY], path.concat([[nextX, nextY]]), transverse)
    if (p) return p
  }
}

// TODO remove Test
const maze = [ // 构建迷宫
  [0, 1, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 0],
  [0, 0, 0, 1, 0, 1],
  [1, 1, 0, 0, 0, 1],
  [0, 0, 0, 1, 1, 1],
  [2, 1, 0, 0, 0, 0]
]
console.log(rat_in_maze(maze))
