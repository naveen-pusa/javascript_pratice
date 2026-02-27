//DomManipulations
// DOM Manipulation means changing HTML elements using JavaScript.

// DOM = Document Object Model
// It allows JavaScript to:

// Change text
// Change styles (color, size)
// Add or remove elements
// Handle button clicks
// Show / Hide elements

// types in  DomManipulations:
// createElement 
// settAttribute / getAttribute ('id','card')
// append / appendChild
// prepend
// insertBefore(newList ,li2)
// replaceChild

// let phones = document.getElementById('container')
// console.log(phones);

// createElement :

// let card = document.createElement('div')
// card.innerHTML='<h1>Naveen</h1>';
// // console.log(card)
// document.body.appendChild(card);


// // settAttribute / getAttribute ('id','card')

// let cat = document.createElement('div')
// cat.setAttribute('id','back')
// card.append(cat)

let box = document.getElementById('container')
let button =document.getElementById('btn')
let count =0
function repate(){

    count++;
    if (count<6){
        // count++
         let card= document.createElement('div')
    card.setAttribute('id','back')
    card.innerText=' '+count
    box.appendChild(card)
    }
    if(count===6){
        button.disabled = true;
    }
}


// ClassName , classList 


// var b= h1.innerText
// alert(b)
// let a = h1.textContent
// alert(a)


// ClassName:
//  let h1 = document.getElementById('intro')
//  h1.className ='text'
//  h1.className = 'color'  // by using the className it was able to apply only at a time 


// classList :
// classList
    // add
    // remove
    // replace
    // toggle
    // contains

let h1 = document.getElementById('intro')
h1.classList.add('text','color')
// h1.classList.remove('color')
// h1.classList.replace('text','color')

// by using the add we can apply for both  classNames

 
// append / appendChild:

let newElement = document.createElement("h2");
newElement.innerText = "New Heading";

document.body.appendChild(newElement);


// 👉 Now it will appear on webpage
// 👉 Added at the bottom of body


