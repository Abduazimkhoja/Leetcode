// 1-Create Hello World Function
// https://leetcode.com/problems/create-hello-world-function/

let createHelloWorld = () => () => 'Hello World';

// 2-Counter
// https://leetcode.com/problems/counter/

var createCounter=(n)=>{let counter=n;return()=>counter++}