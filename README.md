# Leetcode:

## 30 Days of JavaScript

### Week-1

1. [Create Hello World Function](https://leetcode.com/problems/create-hello-world-function/)

```javascript
const createHelloWorld = () => () => 'Hello World';
```

2. [Counter](https://leetcode.com/problems/counter/)

```javascript
const createCounter = (n) => {
   let c = n;
   return () => c++;
};
```

3. [To Be Or Not To Be](https://leetcode.com/problems/to-be-or-not-to-be/)

```javascript
const expect = (a) => ({
   toBe: (b) => {
      if (a !== b) throw new Error('Not Equal');
      return true;
   },
   notToBe: (b) => {
      if (a === b) throw new Error('Equal');
      return true;
   },
});
```

4. [Counter II](https://leetcode.com/problems/counter-ii/)

```javascript
const createCounter = (i) => {
   let c = i;
   return () => c++;
};
```
---

### Week-2

[5. Apply Transform Over Each Element in Array](https://leetcode.com/problems/apply-transform-over-each-element-in-array/)

```javascript
const map = (arr, fn, i = 0, res = []) =>
   i >= arr.length ? res : map(arr, fn, i + 1, [...res, fn(arr[i], i)]);
```

[6. Filter Elements from Array](https://leetcode.com/problems/filter-elements-from-array/)

```javascript
const filter = (arr, fn) =>
   arr.reduce((acc, curr, i) => (fn(curr, i) ? [...acc, curr] : acc), []);
```

[7. Array Reduce Transformation](https://leetcode.com/problems/array-reduce-transformation/)

```javascript
const reduce = (nums, fn, init) => {
   nums.forEach((num) => (init = fn(init, num)));
   return init;
};
```
---

### Week-3

[8. Function Composition](https://leetcode.com/problems/function-composition/description/)

```javascript
const compose = (fns) => (x) => fns.reverse().reduce((acc, fn) => fn(acc), x);
```

[9. Return Length of Arguments Passed](https://leetcode.com/problems/return-length-of-arguments-passed/description/)

```javascript
const argumentsLength = (...a) => a.length;
```

[10. Allow One Function Call](https://leetcode.com/problems/allow-one-function-call/description/)

```javascript
const once =
   (fn, called = true) =>
   (...args) =>
      called ? ((called = false), fn(...args)) : undefined;
```

[11. Memoize](https://leetcode.com/problems/memoize/description/)

```javascript
const memoize = (doThing) => {
   const cache = new Map();
   return (param1, param2 = 0) => {
      if (typeof param1 !== 'number' || typeof param2 !== 'number')
         throw new Error('Both parameters must be numbers');
      const key = (param2 << 16) | param1;
      return cache.has(key)
         ? cache.get(key)
         : (cache.set(key, doThing(param1, param2)), cache.get(key));
   };
};
```

### Week-4

[12. Add Two Promises](https://leetcode.com/problems/add-two-promises/description/?envType=study-plan-v2&envId=30-days-of-javascript)

```javascript
var addTwoPromises = async function (...rest) {
   try {
      const res = await Promise.all(rest);
      const sum = res.reduce((sum, cur) => sum + cur, 0);
      return sum;
   } catch (e) {
      return e;
   }
};
```

[13. Sleep](https://leetcode.com/problems/sleep/?envType=study-plan-v2&envId=30-days-of-javascript)

```javascript
async function sleep(millis) {
   return await new Promise((r) => setTimeout(r, millis));
}
```

[14. Timeout Cancellation](https://leetcode.com/problems/timeout-cancellation/description/?envType=study-plan-v2&envId=30-days-of-javascript)

```javascript
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

```

[15. Interval Cancellation](https://leetcode.com/problems/interval-cancellation/?envType=study-plan-v2&envId=30-days-of-javascript)

```javascript
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

```

[16. Promise Time Limit](https://leetcode.com/problems/promise-time-limit/)

```javascript
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

```