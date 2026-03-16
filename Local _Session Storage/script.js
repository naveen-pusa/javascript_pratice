//Two types of storage :
// =>1. LOCAL STORAGE
//=> 2. SESSION STORAGE

// They are:
// 1.setItem()
// 2.getItem()
// 3.removeItem()
// 4.clear()

// =>1. LOCAL STORAGE:
//=> it storage the data in the browser permanently until user delete the data.
//=> it web stored the data if you close the browser.

//Example:
 
//syntext:
// localStorage.setItem('key','value')
//setItem():

localStorage.setItem('user','NAVEEN')
localStorage.setItem('loc','HYB')

//getItem():
let using = localStorage.getItem('user')
console.log(using);

//removeItem()

// localStorage.removeItem('user')

//clear()
// localStorage.clear()


//EXAMPLE PROGRAM:
//Save Data
// localStorage.setItem('clg','ECET')
// //Get data
// let output= localStorage.getItem('clg')
// console.log(output);


//=> 2. SESSION STORAGE:
//=> it stored the data for a particular time only if you close the browser it will delete the data.

//EXAMPLE PROGRAM:
//save data:
sessionStorage.setItem('course','javascript')
//get data:
let course=sessionStorage.getItem('course')
console.log(course);


//=>Local storage always stores data as string.
//==>**JSON.parse() converts string → array
//