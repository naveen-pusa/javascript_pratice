// Events:
// ==>An event in JavaScript is an action that happens in the browser, and JavaScript can respond to it.

// pointerEvents
    // onCLick.
    // ondbleClick.
// mouseEvents
    // mouseout
    //mouseover
    //  mouseup
    //mousedown
// keyboardEvents
    // keup
    // keydown
    // keypress
// windowEvents
    //onload
    // onscroll
    // onresize
// focusEvents
// formEvents
  
//==>   pointerEvents:

//  onCLick:
// ondbleClick:

//==>when i clik the text will chanage to another text:

// function trigger(event){
// document.querySelector('h1').innerHTML='I am in programming mode'
// }

//==>when i want the go back the my first content i use it:

// function trigger(){
//     let heading = document.querySelector('h1')
//     if (heading.innerHTML==='This is event page'){
//         heading.innerHTML= 'I am in the programming mode so do not distrube me'
//     }else{
//         heading.innerHTML= 'This is event page'
//     }
// }

//backgroundcolor will be change when we clik on it:
// function trigger(){
// let heading = document.body
// let change = document.getElementById('change')
// if (heading.style.backgroundColor==='red'){
//     heading.style.backgroundColor='blue'
//      change.style.color='blue'
// }else{
//     heading.style.backgroundColor='red'
//      change.style.color='red'
// }
// }

//==> alert msg when i give color it should have change into that color:


// function bank(){
//     let color =document.body
//     let change=prompt('enter the color')
//     color.style.backgroundColor= change
    
// }
// let change = document.getElementById('change')
// function trigger(){

// if (document.body.style.backgroundColor ='red'){
//     document.body.style.backgroundColor='blue'
//      change.style.color='blue'

// }else if( document.body.style.backgroundColor = 'red') {
//     document.body.style.backgroundColor='green'
//      change.style.color='red'
// }else{
//     document.body.style.backgroundColor= 'orange'
//      change.style.color='green'
// }
// }


// let colors = ['red','blue','green']


// let count = 0;


// function trigger() {
//     document.body.style.backgroundColor = colors[count%2]
//     count++
// }




// it will excutied the code and return back to orginal state:

// let count = 0;   // state variable

// function trigger() {
//     let heading = document.body;
//     let change = document.getElementById('change');

//     count++;   // increase every click

//     if (count % 3 === 1) {
//         heading.style.backgroundColor = "red";
//         change.style.color = "red";
//     } 
//     else if (count % 3 === 2) {
//         heading.style.backgroundColor = "blue";
//         change.style.color = "blue";
//     } 
//     else {
//         heading.style.backgroundColor = "";   // original
//         change.style.color = "";              // original
//     }
// }


// mouseEvents
    // mouseout
    //mouseover
    // mouseup
    //mousedown

// function over() {
// let mouse = document.getElementById('mouse')
// mouse.style.background='green'
// text.innerHTML='The work is done'
// text.style.color='red'
// }

// keyboardEvents
    // keup
    // keydown
    // keypress

//  function key() {
//     let key=document.getElementById('text')
//     key.style.background='red'
//      key.style.background='blue'
//     console.log(key);
    
//  }   

// let color =['red', 'green','pink','black', 'pink']
// function changeColor(event) {
//             if (event.key === "r") {
//                 document.body.style.backgroundColor = "color";
//             }
//             else if (event.key === "g") {
//                 document.body.style.backgroundColor = "green";
//             }
//             else if (event.key === "b") {
//                 document.body.style.backgroundColor = "blue";
//             }else{
//                document.body.style.backgroundColor = "";
//             }
//         }


// windowEvents
    //onload
    // onscroll
    // onresize


    //onload:

// function showingmessage(){
// alert('youcanot load again you are first warning')
// }    
/* <body onload="onscrolloingmesg()"></body> */

// onscroll

// function onscrolloingmesg(){
//     alert('you are unable to scroll the page')
// }

/* <body onscroll="onscrolloingmesg()"></body> */
// function size(){
//     alert('you are unable to resize the page')
// }
/* <body onresize="size()"></body> */