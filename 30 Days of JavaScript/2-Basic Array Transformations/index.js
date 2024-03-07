// 5-Apply Transform Over Each Element in Array
// https://leetcode.com/problems/apply-transform-over-each-element-in-array/
var map = function (arr, fn, i = 0, res = []) {
   if (i >= arr.length) return res;
   res.push(fn(arr[i], i));
   return map(arr, fn, i + 1, res);
};