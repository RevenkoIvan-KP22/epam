//The spread operator is used to expand elements of an iterable collection (or obj) into individual elements. 

const a1 = [1, 2, 3];
const a2 = [...a1, 4, 5, 6];
console.log(a2);

function smth(a, b, c){
    return a + b + c;
}
console.log(smth(...a1));

const o1 = { number1: 1, number2: 2 };
const o2 = { ...o1, number3: 3 };
console.log(o2); 

//The rest operator collects elements into a collection

function nums(...arr) {
    return arr.reduce((tot, arg) => tot + arg, 0);
}
console.log(nums(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

const [one, two, ...rest] = [1, 2, 3, 4, 5]; // 3 4 5 etc will be converted to array
console.log(one);
console.log(rest); 