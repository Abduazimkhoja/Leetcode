// 1-Create Hello World Function
// https://leetcode.com/problems/create-hello-world-function/

let createHelloWorld = () => () => 'Hello World';

// 2-Counter
// https://leetcode.com/problems/counter/

var createCounter=(n)=>{let counter=n;return()=>counter++}

// 3-To Be Or Not To Be
// https://leetcode.com/problems/to-be-or-not-to-be/

var expect = (a) => ({
  toBe:(b)=>{if(a!==b) throw new Error("Not Equal"); return true},
  notToBe:(b) => {if(a===b) throw new Error("Equal"); return true}
});