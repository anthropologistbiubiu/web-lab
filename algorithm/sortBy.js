/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */

/*

示例 1：
输入：arr = [5, 4, 1, 2, 3], fn = (x) => x
输出：[1, 2, 3, 4, 5]
解释：fn 只是返回传入的数字，因此数组按升序排序。
示例 2：

输入：arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
输出：[{"x": -1}, {"x": 0}, {"x": 1}]
解释：fn 返回 "x" 键的值，因此数组根据该值排序。
示例 3：

输入：arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]
输出：[[10, 1], [5, 2], [3, 4]]
解释：数组按照索引为 1 处的数字升序排序。

*/
var sortBy = function (arr, fn) {
  var array = new Array();
  var map = new Map();
  for (var i = 0; i < arr.length; i++) {
    array.push(fn(arr[i]));
    map.set(fn(arr[i]), arr[i]);
  }
  array.sort((a, b) => a - b);
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var item = map.get(array[i]);
    result.push(item);
  }
  return result;
};

a = [
  [5, 4],
  [10, 0],
  [6, 7],
  [15, 1],
];

var fn = (x) => {
  return x[0] + x[1];
};

console.log(sortBy(a, fn));
