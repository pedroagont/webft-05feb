// SYNCHRONOUS
// Sequential activity, one needs to wait for the previous to finish
// t1 --> t2 --> t3 -->

const number = 123;
const name = 'pedro';
const myFn = () => {};
// console.log(1);
// console.log(2);
// console.log(3);

// console.log(1);
// console.log(2);
// for (let i = 0; i < 90000000000; i++) {
//   //
// }
// console.log(3);

// ASYNCHRONOUS
// ---->
// -->
// ------>

console.log(1);
setTimeout(() => {
  for (let i = 0; i < 9000000000; i++) {
    //
  }
  console.log(2);
}, 2000);
console.log(3);
