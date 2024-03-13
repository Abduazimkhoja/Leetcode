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

// 11 - Memoize
// https://leetcode.com/problems/memoize/description/
function memoize(doThing) {
  const cache = new Map();
  return (param1, param2 = 0) => { // Параметр по умолчанию для param2
      // Проверка, что оба параметра являются числами
      if (typeof param1 !== 'number' || typeof param2 !== 'number') {
          throw new Error('Both parameters must be numbers');
      }

      const key = (param2 << 16) | param1;

      if (cache.has(key)) {
          return cache.get(key);
      } else {
          const result = doThing(param1, param2);
          cache.set(key, result);
          return result;
      }
  };
};
