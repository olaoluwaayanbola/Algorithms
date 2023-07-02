// function str(str) {
//     let arg2 = []
//     for (let i = 0; i < str.length; i++) {
//         arg2.unshift(str[i])
//     }
//     return arg2.join(" ")
// }
// str("hello")

// function factorialize(num) {
//     var state = 1
//     for (let i = 1; i <= num; i++) {
//         state *= i
//     }
//     return state;
// }

// factorialize(5);



// function largestOfFour(arr) {
//     const arg = []
//     for (let i = 0; i < arr.length; i++) {
//         arg.push(Math.max(...arr[i]))
//     }
//     return arg
// }

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// function largestOfFour(arr) {
//     const arg = []
//     if (arr.length > 1) {
//         largestOfFour((arr.length) - 1)
//         arg.push(Math.max(...arr[arr.length - 1]))
//     }
//     return arg
// }

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// function confirmEnding(str, target) {
//     var o = str.slice(str.length - target.length)
//     if (o === target) console.log("coward")
// }

// confirmEnding("Bastian", "an");

// function binary(arr, targ) {
//     var left = 0
//     var right = arr.length - 1
//     while (left <= right) {
//         var mid = Math.floor((left + right) / 2)
//         if (arr[mid] === targ) {
//             return mid
//         }
//         if (targ < arr[mid]) {
//             right = mid - 1
//         } else {
//             left = mid + 1
//         }
//     }
//     return -1
// }
// binary([1, 2, 3, 4], 4)

// Recursive - Solutions

// function Binary(arr, target) {
//     return Search(arr, target, 0, arr.length - 1)
// }

// function Search(arr, target, left, right) {
//     if (left < right) {
//         return -1
//     }
//     let middleIndex = Math.floor((left + right) / 2)
//     if (target === arr[middleIndex]) {
//         return middleIndex
//     }
//     if (target < arr[middleIndex]) {
//         return Search(arr, target, left, middleIndex - 1)
//     } else {
//         return Search(arr, target, middleIndex + 1, right)
//     }
// }
// Binary([1, 2, 3, 4], 4)

// function sort(arr) {
//     var state
//     do {
//         state = false
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let fig = arr[i]
//                 arr[i] = arr[i + 1]
//                 arr[i + 1] = fig
//                 state = true
//             }
//         }
//     } while (state);
//     console.log(state)
//     return arr;
// }

// sort([2, 3, 9, 1])

// function bouncer(arr) {
//     var arg = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]) {
//             arg.push(arr[i])
//         }
//     }
//     return arg;
// }

// bouncer([7, "ate", "", false, 9]);

// function getIndexToIns(arr, num) {
//     if (!arr.length) {
//         return 0
//     }
//     arr.push(num)
//     do {
//         var state = false
//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 var hold = arr[i]
//                 arr[i] = arr[i + 1]
//                 arr[i + 1] = hold
//                 state = true
//             }
//         }
//     } while (state);
//     return arr.indexOf(num)
// }

// getIndexToIns([40, 60, 6.17, 90, 65], 50);

// function gratest(arr) {
//     var no = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > no) {
//             no = arr[i]
//         }
//     }
//     return no
// }
// gratest([1, 4, 5, 99, 2, 4, 87])

// function mutation(arr) {
//     if (!arr.length) {
//         return "fuckoff wanker"
//     }
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i].toLowerCase() === arr[i + 1].toLowerCase()) {
//             return true
//         }
//     }
//     return false
// }

// mutation(["hello", "hello"]);