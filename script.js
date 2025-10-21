let nums = [1,2,3,4,5,67,8,9];

nums.forEach(num => console.log(num));
nums.forEach((num,i) =>console.log(num,i));

let even = nums.filter(num => num%2 === 0);
console.log(even);
let sum = nums.reduce((sum, num) => sum+num);
console.log(sum);