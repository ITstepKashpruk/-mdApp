/* jslint node: true */
/* jshint browser: true */
"use strict";
if (4 == 9){
  console.log("OK");
} else {
  console.log("Error");
}

const num = 89;
if (num < 49){
  console.log('Error');
} else if(num > 100){
  console.log('A lot!');
} else{
  console.log('Ok!');
}
const num1 = 50;

(num1 == 50) ? console.log('Ok!') : console.log('Error');

const num2 =30;
switch(num2) {
case 50: console.log('Неверно!');
break;
case 10: console.log('Неверно!');
break;
case 31: console.log('Верно!');
break;
default: console.log('Не в этот раз!');
}