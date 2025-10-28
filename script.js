let nums = [6,4,5,3,2,1,7,8];

nums.forEach(num => console.log(num));
nums.forEach((num,i) =>console.log(num,i));

let even = nums.filter(num => num%2 === 0);
console.log(even);
let sum = nums.reduce((sum, num) => sum+num);
console.log(sum);

let sorted = nun.sort((a,b) => {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return 1;
    }
    return 0;
});
console.log(sorted);

let sorted2 = nums.sort((a,b) => a-b);
console.log(sorted2);

let squares = nums.map(num => num+num)

console.log(squares);