// 1️⃣ Event Bubbling:
//==>Event starts from the target element (child) and then moves up to the parent elements.
//2️⃣ Event Capturing:
//==>Event starts from the parent element and then goes down to the target element.

// 1️⃣ Event Bubbling code:

// let Doctor  = document.getElementById('prante')
// let Nurses  =  document.getElementById('child')
// let patient = document.getElementById('subchild')


// Doctor.addEventListener('click', (event)=>{
// console.log('this is doctor');
// })

// Nurses.addEventListener('click',(event)=>{
//     console.log('this is nurses');
    
// })
// patient.addEventListener('click',(event)=>{
//     console.log('this is patient');
    
// })
 
//2️⃣ Event Capturing Code:

// let manager  = document.getElementById('prante')
// let teamlead  =  document.getElementById('child')
// let employee = document.getElementById('subchild')

// manager.addEventListener('click',(event)=>{
//     console.log('i am the manager for this companey');
    
// } ,true)

// teamlead.addEventListener('click',(event)=>{
//     console.log('i am the teamlead for this team');
    
// },true)
// employee.addEventListener('click',(event)=>{
//     console.log('i am employee in this team');
    
// },true)

// if i want only one of them we have use the :
//event propagation:
// we should not use  the 'true':
//ex: event.stopPropagation();


// let manager  = document.getElementById('prante')
// let teamlead  =  document.getElementById('child')
// let employee = document.getElementById('subchild')


// manager.addEventListener('click',(event)=>{
//     event.stopPropagation()
//     console.log('i am the manager for this companey');
    
// } )


// teamlead.addEventListener('click',(event)=>{
//     event.stopPropagation()
//     console.log('i am the teamlead for this team');
    
// })

// employee.addEventListener('click',(event)=>{
//      event.stopPropagation()
//     console.log('i am employee in this team');
    
// })



// preventDefault:


// let youtube = document.getElementById('link')
// let input = document.getElementById('enter')

// youtube.addEventListener('click',(e)=>{
//     if(!input.checked){
//         e.preventDefault()
//     }
// })


//target vs CurrentTarget:

//target:

// let tap = document.getElementById('btn1',)

// tap.addEventListener('click',(e)=>{
//     console.log(e.target);
// })


//CurrentTarget:

// let tap = document.getElementById('btn',)

// tap.addEventListener('click',(e)=>{
//     console.log(e.currentTarget);
// })