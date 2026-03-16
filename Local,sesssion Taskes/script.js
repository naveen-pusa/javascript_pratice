//Task=1
// store the data by using the local storage

// let input = document.getElementById('input')
// let btn = document.getElementById('btn')
// let ul = document.getElementById('data')

// let item = JSON.parse(localStorage.getItem('products')) || []


// function listofItem(){
//     ul.innerHTML=''
//     item.map(x=>{
//         let li = document.createElement('li')
//         li.innerHTML=x
//         console.log(x);
        
//         ul.append(li)
//     })
// }

// btn.addEventListener('click',()=>{
//     let inData= input.value
//     if(inData){
// item.push(inData)
//     }
//     localStorage.setItem('products',JSON.stringify(item))
//     listofItem()
//     input.value=''
// })
// listofItem()





//  task2:


// let title = document.getElementById('title')
// let desc = document.getElementById('desc')
// let btn = document.getElementById('btn')
// let ul = document.getElementById('list')

// // Get notes from localStorage or empty array if nothing saved
// let notes = JSON.parse(localStorage.getItem('notes')) || []

// // Function to show notes on webpage
// function showNotes() {
//     ul.innerHTML = ""  // clear the list first

//     notes.forEach(note => {
//         let li = document.createElement('li')
//         li.innerHTML = note.title + " - " + note.desc
//         ul.append(li)
//     })
// }

// // When Add button is clicked
// btn.addEventListener('click', () => {
//     let titleValue = title.value
//     let descValue = desc.value

//     if(titleValue && descValue){
//         // Add new note to array
//         notes.push({ title: titleValue, desc: descValue })
//     }

//     // Save updated notes in localStorage
//     localStorage.setItem('notes', JSON.stringify(notes))

//     // Display updated notes
//     showNotes()

//     // Clear input boxes
//     title.value = ""
//     desc.value = ""
// })

// // Show notes when page loads
// showNotes()


let title = document.getElementById('title')
let desc = document.getElementById('desc')
let btn = document.getElementById('btn')
let ul = document.getElementById('list')

let notes = JSON.parse(localStorage.getItem('notes'))||[]

function products(){
    ul.innerHTML=''
    notes.map(x=>{
        let list =document.createElement('li')
        list.innerHTML=x.title+'-'+x.desc
        ul.append(list)
        console.log(x);
        
    })
}
btn.addEventListener('click',()=>{
let titleValue = title.value
let descValue = desc.value
if(titleValue && descValue){
    notes.push({title : titleValue,desc:descValue})
}
localStorage.setItem('notes',JSON.stringify(notes))
products()
title.value =""
desc.value=''
})
products()


