// function str(str) {
//   let arg2 = []
//   for (let i = 0; i < str.length; i++) {
//    arg2.unshift(str[i])
//   }
//   return arg2.join(" ")
// }
// str("hello")

// function factorialize(num) {
//   var state = 1
//   for (let i = 1; i <= num; i++) {
//        state *= i
//   }
//   return state;
// }

// factorialize(5);

// 

// function largestOfFour(arr) {
//   const arg = []
//   for (let i = 0; i < arr.length; i++) {
//    arg.push(Math.max(...arr[i]))
//   }
//   return arg
// }


// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// function largestOfFour(arr) {
//   const arg = []
//   if ( arr.length  > 1) {
//     largestOfFour((arr.length) - 1)
//     arg.push(Math.max(...arr[arr.length - 1]))
//   }
//   return arg
// }


// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// function confirmEnding(str, target) {
//   var o = str.slice(str.length - target.length)
//   if(  o === target )console.log("coward")
// }

// confirmEnding("Bastian", "an");