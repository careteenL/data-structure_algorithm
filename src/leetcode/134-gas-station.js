/**
 * @leetcode https://leetcode-cn.com/problems/gas-station/submissions/
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let n = gas.length

  let total_tank = 0
  let curr_tank = 0
  let starting_station = 0
  for (let i = 0; i < n; ++i) {
    total_tank += gas[i] - cost[i]
    curr_tank += gas[i] - cost[i]
    if (curr_tank < 0) {
      starting_station = i + 1
      curr_tank = 0
    }
  }
  return total_tank >= 0 ? starting_station : -1
}

// Test
console.log(canCompleteCircuit([1, 2, 3, 4, 5], [2, 3, 4, 5, 1]))
