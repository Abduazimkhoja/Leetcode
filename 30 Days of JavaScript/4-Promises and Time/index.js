// 12 - Add Two Promises
// https://leetcode.com/problems/add-two-promises/description/?envType=study-plan-v2&envId=30-days-of-javascript
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
// https://leetcode.com/problems/sleep/?envType=study-plan-v2&envId=30-days-of-javascript
async function sleep(millis) {
  return await new Promise(r => setTimeout(r, millis)) 
}