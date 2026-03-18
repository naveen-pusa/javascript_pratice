// Constructor Functions:
//  Destructuring:

// what is Constructor Functions?
//=>A constructor function is a special function used to create multiple objects with similar properties and methods.
//=>👉 Instead of writing the same object again and again, we use a constructor.
//=>👀Constructor function name usually starts with capital letter:

// basic  Constructor Functions:

function Products(phone,cost){
    this.phone=phone
    this.cost=cost
}
let z=new Products('vivio',25000)
console.log(z);




function clickd(){
    
let input1 = document.getElementById('input1').value
let input2 = document.getElementById('input2').value
// let details1= document.getElementById('details1')
// let details2= document.getElementById('details')

function Details(namee,age){
this.namee=namee
this.age=age
}
let x=new Details(input1,input2)
// let y = new Details('raju',25)
// console.log(x);// we get output with the object
// console.log(x);
console.log("Name:"+x.namee);// without the object only namee and age
console.log("Age:" +x.age);
document.getElementById('details1').innerHTML="Name:"+ x.namee
document.getElementById('details2').innerHTML="Age:"+x.age  // it will display on the webpage

}



// 🔹 What is Destructuring?
//=>👉 Destructuring is a way to extract values from arrays or objects and store them into variables easily.

// 🔹 1️⃣ Array Destructuring

let arr=['raju',25]
console.log("Name:"+arr[0]);
console.log("Age"+arr[1]);

// 🔹 1️⃣ Array Destructuring

let game=['cricket','vollayball','ko-ko','kabaddi','running']
let[gam1,gam2,gam3,gam4,gam5]=game
console.log(gam1);
console.log(gam2);
console.log(gam3);
console.log(gam4);
console.log(gam5);


// 🔹 3️⃣ Rename Variables (Very Important)

let student = {
    name: "Naveen",
    age: 22
};

let {name: studentName, age: studentAge} = student;

console.log(studentName);
console.log(studentAge);


// 🔹 Constructor + Destructuring

function Student(name, age) {
    this.name = name;
    this.age = age;
}

let s1 = new Student("Naveen", 30);

// destructuring
let {name, age} = s1;

console.log(name); // Naveen
console.log(age); //age
