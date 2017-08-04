console.log("chaining.js");


var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

console.log("Integers array:", integers);

let integersReverse = integers.sort(function(first, second) { return second - first; });

console.log("Integers in reverse order:", integersReverse);

let lessThan19 = integersReverse.filter(function (element) { if (element < 19) {return element;} });

console.log("Integers less than 19:", lessThan19);

let times1_5minus1 = lessThan19.map(function (element) { return ((element * 1.5) - 1); });

console.log("Multiply by 1.5 and subtract 1:", times1_5minus1);

let grandTotal = times1_5minus1.reduce(function (total, num) { return total + num; });

console.log("Grand total:", grandTotal);

document.getElementById("total").innerHTML = `${grandTotal}`; 