//TO REVERSE A STRING

function reverseString(str) {
    return str.split("").reverse().join();
}
function reverseStringManual(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}


//PALINDROME CHECK

function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}
console.log(isPalindrome("madam"));


//FACTORIAL USING RECURSION

function factorial(n) {
    if (n === 0) return 1;
    return  n * factorial(n - 1);
}
console.log(factorial(7));


//PRIME CHECK

function isPrice(n) {
    if (n<2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log(isPrime(9));


//LARGEST NO IN AN ARRAY WITHOUT MATH.MAX

function findLargest(arr) {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) max = num;
    }
    return max;
}
console.log(findLargest([2, 4, 6, 8, 10]));



//REMOVE DUPLICATES

function flatten(arr) {
    return arr.flat(Infinity);
}
console.log(flatten([1, [2, [3, 4]], 5]));


//FIBONACCI SEQUENCE
function fibonacci(n) {
    let seq = [0, 1];
    for (let i = 2; i < n; i++) {
        seq.push(seq[i - 1] + seq[i - 2]);
    }
    return seq.slice(0, n);
}
console.log(fibonacci(3));



//DEBOUNCE FUNCTION

function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this.args), delay);
    };
}
const log = debounce(() => console.log("Typing..."), 500);



//DEEP CLONE AN OBJECT

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

let original = { a: 1, b: { c: 2 } };
let copy = deepClone(original);
copy.b.c = 5;
console.log(original.b.c);



//THROTTLE FUNCTION

function throttle(func, limit) {
    let lastCall = 0;
    return function (...args) {
        let now = Date.now();
        if (now - lastCall  >= limit) {
            lastCall = now;
            func.apply(this, args);
        }
    };
}
const logScroll = throttle(() => console.log("Scrolling..."), 1000);


//GROUP ARRAY BY PROPERTY

function groupBy(arr, key) {
    return arr.reduce((result, obj) => {
        let value = obj[key];
        (result[value] = result[value] || []).push(obj);
        return result;
    }, {});
}
console.log(groupBy([{ name: "A", age: 20 }, { name: "B", age: 20 }, {name: "C", age: 25 }], "age"));


//COUNT VOWELS

function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) count++;
    }
    return count;
}
console.log(countVowels("Hello World"));



//IMPLEMENT PROMISE ALL

function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;
        promises.forEach((p, index) => {
            Promise.resolve(p)
            .then((val) => {
                results[index] = val;
                completed++;
                if (completed === promises.length) {
                    resolve(results);
                }
            })
            .catch(reject);
        });
    });
}

myPromiseAll([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)])
.then(console.log);


//HOISTING

console.log(a);
var a = 10;
//op-undefined    var is hoisted



//let and const HOISTING

console.log(b);
let b = 20;


//OBJECT AS KEYS

let a = {};
let b1 = { key: "b" };
let c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);