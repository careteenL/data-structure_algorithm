/**
 * @desc 165. 比较版本号
 * @leetcode https://leetcode.cn/problems/compare-version-numbers/description/
 * @think
 * 时间复杂度O(max(m,n))
 * 空间复杂度 O(m+n)
 */
function compareVersion(version1, version2) {
  const version1Array = version1.split(".").map((v) => parseInt(v));
  const version2Array = version2.split(".").map((v) => parseInt(v));
  for (let i = 0; i < version1Array.length || i < version2Array.length; i++) {
    let x = 0,
      y = 0;
    if (i < version1Array.length) {
      x = version1Array[i];
    }
    if (i < version2Array.length) {
      y = version2Array[i];
    }
    if (x > y) {
      return 1;
    }
    if (x < y) {
      return -1;
    }
  }
  return 0;
}

// Test
console.log(compareVersion("1.001", "1.01"));
console.log(compareVersion("1.0", "1.0.0"));
console.log(compareVersion("0.1", "1.1"));
