// Math object:
// Date object:

//  1. Math Object in JavaScript:
// 👉 The Math object is used to perform mathematical operations.
// MATH.pi
// Math.min,max
// Math.pow
// Math.random
// Math.floor
// Math.round
// Math.ceil

//PI:
let num = Math.PI
console.log(num);
let num1 = Math.PI.toFixed()// it gives the fixed value
console.log(num1);

//MIN & MAX:
let num2 = Math.min(10,20,30,40,50) // it gives min value in the object.
console.log(num2);
let num3 = Math.max(10,20,30,40,50)// it gives max value in the object.
console.log(num3);

//POW:
let num4 = Math.pow(2,6)
console.log(num4);

//RANDOM:

let num5 = Math.random()*8
console.log(num5.toFixed());

//floor:
let num6 = Math.floor(10)
console.log(num6);

//ROUND:
let num7= Math.round(20.4)
console.log(num7);

//CEIL:
let num8= Math.ceil(25.1)
console.log(num8);

 
// Date Objects:

// Types:
// 1.current date.
// 2.millisecond.
// 3.string.
// 4.component.

// 1.current date.

let today = new Date()
console.log(today);

let string = new Date("8 27 2026 12:00:00")
console.log(string);

let millisecond= new Date(234567890)
console.log(millisecond);

let component = new Date(25,0,7 ,30,0,0)
console.log(component);








