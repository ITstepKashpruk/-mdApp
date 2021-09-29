/* jslint node: true */
/* jshint browser: true */
"use strict";
let num = 0;

// while (num <= 55){
//   num++;
//   console.log(num);
// }
do{
  console.log(num);
  num++;
} while(num < 10);
let num1 = 0;
for(let i = 0; i < 10; i++){
  if(i == 6){
    // break;
    continue;
  }
console.log(i);
}