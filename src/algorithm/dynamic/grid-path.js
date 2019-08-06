/**
 * @desc 数网格中的路径
 * @param {Number} x 构造成二维数组的 x坐标
 * @param {Number} y 构造成二维数组的 y坐标
 * @return {Number} 返回能够到达的路径数
 */
const gridPath = (x, y) => {
  if (x > 0 && y > 0) {
    return gridPath(x - 1, y) + gridPath(x, y - 1)
  } else if (x > 0) {
    return gridPath(x - 1, y)
  } else if (y > 0) {
    return gridPath(x, y - 1)
  } else {
    return 1
  }
}

// Test
console.log(gridPath(1, 1))
console.log(gridPath(2, 2))
