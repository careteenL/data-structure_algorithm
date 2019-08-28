/**
 * @desc 给定一组字符，使用原地算法将其压缩。
 *      压缩后的长度必须始终小于或等于原数组长度。
 *      数组的每个元素应该是长度为1的字符（不是int整数类型）。
 *      在完成原地修改输入数组后，返回数组的新长度。
 * @leetcode https://leetcode-cn.com/problems/string-compression
 * @think 双指针法
 *        1. 指针write表示已经压缩结果的末尾，指针read表示未压缩的头部
 *        2. 当遇到相同的字符串，指针read往后滑动，直到遇到不同的字符
 *             2.1 指针read滑动的距离即为当前字符的长度
 *             2.2 因为这组字符每一项只展示一个字符，故需要将长度转为字符然后挨个赋值
 *        3. 直到未压缩指针read的值指到末尾时，结束遍历
 *             3.1 已经压缩的指针write每次递增到最后即为数组的新长度
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  var len = chars.length
  for (var write = 0, read = 0; read < len;) {
    chars[write] = chars[read]
    var temp = read
    while (read < len && chars[write] === chars[read]) {
      read++
    }
    write++
    var dis = read - temp
    if (dis > 1) {
      var distance = Array.from('' + dis)
      for (var k = 0; k < distance.length; k++) {
        chars[write++] = distance[k]
      }
    }
  }
  return write
}
// Test 
console.log(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c']))
console.log(compress(['a']))
console.log(compress(['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']))
