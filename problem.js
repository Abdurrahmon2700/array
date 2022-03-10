// 153
// let sum = [];
// let c=0;
// let array = [7, 10, 5, 3, 2];
// for (let i = 0; i <= array.length; i++) {
//   if (array[i] % 2 == 0) {
//     sum = i;
//     c++;
//     console.log(sum);
//   } 
// } 
// console.log("c:"+c);

// 154 
// let array = [1, 2, 3,];
// k = 3;
// for (let i = 0; i < array.length; i++) {
//   if (i % k == 0) {
//     console.log(array[i]);
//   }
// }


// 155
// let array = [7, 10, 5, 3, 2]
// for (let i = 0; i < array.length; i++) {
//   if (i % 2 == 0) {
//     console.log(array[i]);
//   }
// }

// problem 156
// let array = [7, 10, 5, 3, 2];
// for(let i = array.length; i > 0; i--) {
//   for(let j = i - 1; j % 2 != 0; j++) {
//     console.log(array[j]);
//   }
// }

// problem 157
// let array = [7, 10, 5, 3, 2];
// let sum = [];
// for (let i = 0; i < array.length; i++) {
//   if (i % 2 == 0) {
//     console.log(array[i]);
//   } else if (i % 2 != 0) {
//     sum = array[i]
//   }
// }
// console.log(sum);

// problem 158
// let array = [1, 2, 3, 10, -4, true];
// let res = "";
// for (let i = 0; i < array.length / 2; i++) {
//   res += array[i] + " " + array[array.length - 1 - i] + " ";
// }
// console.log(res);

// problem 159 
// let sum = 0;
// let array = [7, 10, 3, 5];
// for (let i = 0; i < array.length; i++) {
//   sum = array[array.length -1]
//   if(sum > array[i]) {
//     console.log(array[i]);
//     break
//   }
// }


//  problem 160
// let array = [10, 12, 5, 11, 13, 15];
// let begin = array[0];
// let end = array[array.length -1];
// let sum = 0;
// for (let i = 1; i < array.length-1; i++) { 
//   if (array[i] > begin && array[i] < end) {
//     sum = i
//   }
//  }
//  console.log(sum);


// problem 161 
// let array = [5, 10, 3, 7, 10, 12, 4];
// let k = 0;
// let l = 4;
// let sum = 0;
// for (let i = k+1; i < l; i++) {
//   sum += array[i]
// }
// console.log(sum);

// problem 162
// let array = [5, 10, 3, 7, 10, 12, 4];
// let k = 0;
// let l = 4;
// let sum = 0;
// for (let i = k+1; i < l; i++) {
//   sum += array[i]
// }
// console.log(sum / 3);

// problem 163 
// let array = [5, 10, 3, 7, 10, 12, 4];
// let k = 0;
// let l = 4;
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//   if (k == i || l <= i) {
//     sum +=array[i]
//   }
// }
// console.log(sum);


// problem 164
// let k = 0;
// let array = [11,14,17,20,23];
// for (let i = 0; i < array.length; i++) {
//   k = array[1] - array[0];
//   }
//   console.log(k);

// problem 165 
// let array = [-2,4,-8,16,-32];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//    sum = array[1] / array[0] 
//   }
// console.log(sum);


// problem 166?
// let array = [1,-3,8,7,-16,32,-9];
// let count = 0;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] > 0) {
//     if (array[i+1] > 0) {
//       console.log(i+1);
//       count = 1;
//       break
//     }
//   }
//   else {
//     if (array[i+1] < 0) {
//       console.log(i+1);
//       count = 1;
//       break
//     }
//   }
// }
// if (count == 0) console.log(true);

// problem 167 
// let sum = 0;
// let array = [-2, 5, -10, 12, 3, -4, -5]; 
// for (let i = 0; i < array.length; i++) {
//   if (i % 2 == 0) {
//     sum += array[i]
//   }
// }
// console.log(sum);

// 168 
// let array = [-2, 5, -10, 12, 3, -4, -5];
// let count = 0;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] > array[i+1]) {
//     console.log(i);
//     count += 1
//   }
// }
// console.log("c:",count);

// 169 
// let array = [-2, 5, -10, 12, 3, -4, -5];
// let count = 0;
// let newarr = [];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] > array[i+1]) {
//     newarr.push(array[i])
//     count += 1
//   }
// }
// for (let i=newarr.length-1; i>=0; i--){
//   console.log(newarr[i])
// }
// console.log("c:",count);

// problem 170 
// let array = [1, -3, 12, -1, -4];
// let r = 10;
// let newarr = array[0];
// let res = Infinity;
// for (let i = 0; i < array.length; i++) {
//   let t = Math.abs(array[i] -r);
//   if (res > t) {
//     res = t;
//     a = array[i];
//   }
// }
// console.log(a);


// problem 171 
// let array = [1, -10, 2, 1, 2, 5];
// let newarr = []; 
// for (let i = 0; i < array.length; i++) {
//   let count = 0;
//   for (let j = 0; j < newarr.length; j++) {
//     if (newarr[j] == array[i]) {
//       count++;
//       break
//     }
//   }
//   if (count == 0) {
//     newarr.push(array[i])
//   }
// }
// console.log(newarr);

// problem 172 
// let onearr = [true, -5];
// let twoarr = [2, null];
// let sum = onearr;
// onearr = twoarr;
// twoarr = sum;
// console.log(onearr, twoarr);

