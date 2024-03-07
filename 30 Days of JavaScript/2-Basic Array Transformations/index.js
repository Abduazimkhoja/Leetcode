// 5-Apply Transform Over Each Element in Array
// https://leetcode.com/problems/apply-transform-over-each-element-in-array/
var map = function (arr, fn, i = 0, res = []) {
   if (i >= arr.length) return res;
   res.push(fn(arr[i], i));
   return map(arr, fn, i + 1, res);
};

// 6-Filter Elements from Array
// https://leetcode.com/problems/filter-elements-from-array/

var filter = function (arr, fn) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
     if (fn(arr[i], i)) res.push(arr[i]);
  }
  return res;
};
