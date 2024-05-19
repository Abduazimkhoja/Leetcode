// 12 - Add Two Promises
// https://leetcode.com/problems/add-two-promises/
var addTwoPromises = async function (...rest) {
   try {
      const res = await Promise.all(rest);
      const sum = res.reduce((sum, cur) => sum + cur, 0);
      return sum;
   } catch (e) {
      return e;
   }
};

// 13 - Sleep
// https://leetcode.com/problems/sleep/
async function sleep(millis) {
   return await new Promise((r) => setTimeout(r, millis));
}

// 14 - Timeout Cancellation
// https://leetcode.com/problems/timeout-cancellation/

var cancellable = function (fn, args, t) {
   let timeoutId;

   const executeFn = () => {
      fn(...args);
   };

   timeoutId = setTimeout(executeFn, t);

   const cancelFn = () => {
      clearTimeout(timeoutId);
   };

   return cancelFn;
};

// 14 - Interval Cancellation
// https://leetcode.com/problems/interval-cancellation/

var cancellable = function (fn, args, t) {
   fn(...args);

   const intervalId = setInterval(() => {
      fn(...args);
   }, t);

   const cancelFn = () => {
      clearInterval(intervalId);
   };

   return cancelFn;
};

// 15 - Promise Time Limit
// https://leetcode.com/problems/promise-time-limit/

var timeLimit = function (fn, t) {
   return async function (...args) {
      const timeoutPromise = new Promise((_, reject) => {
         setTimeout(() => {
            reject('Time Limit Exceeded');
         }, t);
      });

      try {
         return await Promise.race([fn(...args), timeoutPromise]);
      } catch (error) {
         throw error;
      }
   };
};
