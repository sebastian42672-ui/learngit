let num = [1, 2, 3, 4];
let moreNums = [5,6, ...nums, 7, 8];
console.log(moreNums);

function SubmitEvent(...args) {
    console.log(args);
    let sum = 0;
    for(let i=0; i<args.length; i++) {
        sum+=args[i];
    }
    return sum;
}

sum(1,2);
let a = sum(1,2,3,4,5,6,7,8,9);
console.log(a);
a = sum(...moreNums);
console.log(a);

let person = {
    name: `Arvo`
    age: 69,
}

let {name,age} = person;
console.log(name);
console.log(log);

function ageSquared({age}){
    return age*age;
}

console.log(ageSquared(person));