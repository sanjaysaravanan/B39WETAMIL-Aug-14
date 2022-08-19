// Data Types
// String, Number, boolean


var name = "Sanjay"; // String value type string
var age = 30; // Number value type number(NaN)
var isGraduated = true; // true/fals value type boolean

// if graduated print sanjay is graduated



// if num is odd print odd else even
var num = 100;


// Arithmatic Operators
// if ( num % 2)
// exponentiation
// console.log(2 ** 5); // 2 x 2 x 2 x 2 x 2 -> ans
// // console.log(/)

// // 5 / 2 --> ans: 2 remainder: 1
// // 5 / 3 --> ans: 1 remainder: 2
// // 13 / 5 --> ans: 2 remainder: 3
// modulus or remainder
// console.log(5 % 2); // ans: 1
// console.log(5 % 3); // ans: 2
// console.log(13 % 5);// ans: 3

// Increment Operator
num++; // num = num + 1;
// Decrement Operator
num--; // num = num - 1;

// console.log(num);

// Comparison Operator or Logical Operator
// == checks only the value not the type
var x = 5;
// console.log(x == 5); // true 
// console.log(x == '5'); // true no type check
// console.log(x == 8); // false

// != ! ---> not/negetion

// console.log(x != '5'); // ans false
// console.log(x !== '5'); // ans true
// console.log(x !== 5); // ans false

// console.log(x >= 10); // false 
// console.log(x >= 4); // true
// console.log(x <= 3); // false

// console.log(x >= 5); // true
// console.log(x > 5); // false
// console.log(!(x < 5)); // false


// if num is odd print odd else even
var num = 100;

// if (num % 2 == 0) {
//   console.log("####");
//   console.log('Even');
//   console.log("####");
// } else {
//   console.log("####");
//   console.log('Odd');
//   console.log("####");
// }


// 0 --> false 1 or > 1 ----> true
// if (num % 2) { // results only with 0 or 1
//   console.log("####");
//   console.log('Odd');
//   console.log("$$$$");
// } else {
//   console.log("####");
//   console.log('Even');
//   console.log("$$$$");
// }

// negetion !
// console.log(!(num % 2 == 0)); // ans true
// console.log(!(num % 2 == 1)); // ans true

// if (!(num % 2 == 1)) { // results only with 0 or 1
// console.log("####");
// console.log('Even');
// console.log("$$$$");
// } else {
//   console.log("####");
//   console.log('Odd');
//   console.log("$$$$");
// }

// Alogrithim:
// step 1: start
// step 2: Get remainder num / 2 
// step 3: check remainder
// .
// .
// .
// Step last: end


// string number to number

var y = '123'; // number 123

// parseInt ---> parseInt(y)
// console.log(typeof y);
// console.log(parseInt(y)); // converts a string to number

// number to string
// console.log(typeof 123)
// console.log(typeof JSON.stringify(123));

// name = "Sanajy Saravanana";

// console.log(name.length);


// Compsite Datatypes ---> Combined 
// Array/List ---> Group of element which can be of different types
//         0  1  2  3  4 ( Positive Index )
//        -5 -4 -3 -2 -1 (Negative Index)
var arr = [1, 2, 3, 4, 5]; // all the elements are number

var arrDiffTypes = [1, "Some Name", 3, true]; // array elements are of different types

// console.log(arr);
// console.log(arr.length);

// Slicing
// console.log(arr.slice(2)); // [3, 4, 5]


// console.log(arr.slice(0, 3)); // [1, 2, 3]

// console.log(arr.slice(1, 3)); // [2, 3]

// // Negative Slicing
// console.log(arr.slice(-5, -2)); // [3, 4, 5] // -n gives last n elements

// console.log(arrDiffTypes);
// console.log(arrDiffTypes.length);


//           0
// var arr3 = [100]; // length 1
// //                                             0      1       2 
// arr3[2] = 3; // index 2 assigning value to 3 [100, undefined, 3]

// console.log('Array', arr3.length);
// console.log('Contents', arr3);

var arr4 = [];
// 0 ... 998,999
arr4[999] = 88;[88]

// console.log('Array', arr4.length); // 1000
// console.log('Contents', arr4); // [empty/undefined * 999, 88];

// Iteration/Looping ---> going through elements of an array/object one by one
// for with increment 
for (var i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
}

// Iteration for of
// No Increment Variable needed
var arr = [1, 2, 3, 4, 5];
for (var z of arr) {
  { { { } } }
  // console.log(z);
}



// Iteration for in
// Iterates the index of the array
//  0  1  2  3  4
// [1, 2, 3, 4, 5]
for (var i in arr) {
  // console.log(i);
}

// console.log(arr[0]);
// console.log(arr['0']);
// console.log(arr["hi"] = '');







