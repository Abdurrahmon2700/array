//  array 1 
// let n = 10;
// let array = [];
// for (let i = 0; i < n * 2; i++) {
//   if(i % 2 != 0) {
//     array = i;
//     console.log(i);
//   }
// }

// array 2
// let n = 5; 
// let array = [];
// for (let i = 0; i < n; i++) {
//     array = 2 **i
//     console.log(array);
// }

// 3
// 4


// 5 
// let number = 10;
// let son1 = 0;
// let son2 = 1;
// let summ = 1;
// let array = []
// for (let i = 1; i < number; i++) {
//   summ = son1 + son2;
//   son1 = son2;
//   son2 = summ;
//   array = summ
//   console.log(array);
// }


// 7
// let array = [10, 20, 2, 5, 8, 3].reverse()
// console.log(array);

// 8
// let sum = [];
// let length;
// let array = [4,5,7,8,6,9];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 != 0) {
//     sum = array[i]
//     console.log(sum);
//   }
// }


//  9
// let sum = [];
// let length;
// let array = [4,5,7,8,6,9];
// for (let i = -1; i < array.length; i++) {
//   if (array[i] % 2 == 0) {
//     sum = array[i];
//     console.log(sum);
//   }
// }

// 10
// let sum = [];
// let length;
// let array = [4,5,7,8,6,9];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 == 0) {
//     sum = array[i]
//     console.log(sum);
//   } else if (array[i] % 2 != 0) {
//     sum = array[i]
//     console.log(sum);
//   }
// }

// 11
// let array = [1,5,8,4,5,2,8];
// let sum = [];
// sum = array.sort().reverse();
// console.log(sum[0]);
// for (let i = 0; i < sum.length; i++) {
//   if (sum[0] > sum[i]) {
//     console.log(sum[i]);
//     break;
//   } else if {}
// }

// sonni eng kichigini chiqarish
//  let array = [5,8,3,7,6,2];
//  let count = array[0];
//  for (let i = 0; i < array.length; i++) {
//    if (count > array[i]) {
//      count = array[i]
//    }
//  }
// console.log(count);

// listni tartiblash 
// let array = [4,5,8,2,1,10];
// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array.length; j++) {
//     if (array[j] > array[j + 1]) {
//       let sum = array[j + 1]
//       array[j + 1] = array[j]  
//       array[j] = sum;
//     }
//   }
// }
// console.log(array);

// let array = [5,1,3,4,2,9,4];
// for (let i = 0; i < array.length; i++) {
//   // console.log(array[i]);
//   for(let j = 0; j < array[j]; j++) {
//     // console.log(array[j]);
//     if (array[j] > array[j + 1]){
//       // console.log(array[j + 1]);
//       let sum = array[j + 1]
//       // console.log(sum);
//       array[j + 1] = array[j]
//       console.log(array[j + 1]);
//     }
//   }
// }