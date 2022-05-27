import './style.css'


// #######################################################################################################
// DataTypes
// #######################################################################################################


// let var1 = 10;
// let var2 = 2;
// const var3 = 10;
// const var4;
// console.log(var1, var2, var3);
// // var3 -= 10;
// console.log(`Addition ${var1 + var2}`);
// var1 = 10, var2 = 2;
// console.log(`Subtraction ${var1 - var2}`);
// var1 = 10, var2 = 2;
// console.log(`Multiplication ${var1 * var2}`);
// var1 = 10, var2 = 2;
// console.log(`Divison ${var1 / var2}`);
// var1 = 10, var2 = 2;
// console.log(`Remainder ${var1 % var2}`);
// var1 = 10, var2 = 2;
// console.log(`Power ${var1 ** var2}`);

// // Ternary

// var1 > var2 ? var1-- : var1++;
// console.log(var1, var2); 


// Type coercion

// let stringData = '100.1';
// let numData = Number(stringData);
// let stringData2 = String(numData);
// console.log(stringData, numData, stringData2);
// let data = "";
// console.log(Boolean(data));



// #######################################################################################################
// Conditional Stataments
// #######################################################################################################

// #1 If else
// let data1;
// let data2 = 2;
// data1 = prompt("Please enter number 1");
// // data2 = prompt("Please enter number 2");

// if (data1 % data2 == 0) {
//   console.log("The Number is even");
// }
// else console.log("Number is odd");


// // #2 Conditional system
// let data1;
// data1 = prompt("Please enter number 1");

// let remainder = data1 % 2;
// switch (remainder) {

//   case 1:
//     console.log("The number is odd");
//     break;
//   case 0:
//     console.log("The number is even");
//     break;
// }

// Ternary Operator

// let data1;
// data1 = prompt("Please enter number 1");

// data1 % 2 == 0 ? console.log("Even") : console.log("Odd");; 

// Set Timeout Function

let sectionHigh = document.querySelector('.hover-section');
console.log(sectionHigh);

setInterval(function () {
  // sectionHigh.classList.remove = "bg-blue-700";
  // sectionHigh.classList.add = "bg-red-700";
  sectionHigh.
}, 1000);