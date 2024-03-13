// 8 - Function Composition
// https://leetcode.com/problems/function-composition/description/
var compose = function (fns) {
   return (x) => {
      const reverse = fns.reverse();
      const sum = reverse.reduce((sum, fn) => fn(sum), x);
      return sum;
   };
};

// 9 - Return Length of Arguments Passed
// https://leetcode.com/problems/return-length-of-arguments-passed/description/
var argumentsLength = (...a) => a.length;

// 10 - Allow One Function Call
// https://leetcode.com/problems/allow-one-function-call/description/
var once = function (fn, called = true) {
   return function (...args) {
      if (called) {
         called = false;
         return fn(...args);
      }
   };
};