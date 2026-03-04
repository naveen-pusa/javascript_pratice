 // task on the add the text in box and out of the box:
//  by using the keyboad enter button:
//  function addtext(event){
//     if (event.key=='Enter'){
//          let text1 = document.getElementById('box1').innerHTML;
//          let text2 = document.getElementById('box2').value;
//         document.getElementById('result').innerHTML=text1+" we both are friends"+" "+text2
//     }
// }



// // by using  the click button:
// function addtext(){
   
//          let text1 = document.getElementById('box1').innerHTML;
//          let text2 = document.getElementById('box2').value;
//         document.getElementById('result').innerHTML=text1+" we both are friends"+" "+text2
    
// }



//by using the addeventlistner:

let button=document.getElementById('btn')

button.addEventListener('click', function() {
let text1 =document.getElementById('box1').innerText;
let text2 = document.getElementById('box2').value;
document.getElementById('result').innerText= text1+" "+text2
});