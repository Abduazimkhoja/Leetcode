// 8 - Function Composition
// https://leetcode.com/problems/function-composition/description/
var compose = function (fns) {
   return (x) => {
      const reverse = fns.reverse();
      const sum = reverse.reduce((sum, fn) => fn(sum), x);
      return sum;
   };
};