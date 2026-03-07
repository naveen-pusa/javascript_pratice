let btn   =  document.getElementById('btn')
let names = document.getElementById('name')
let gmail = document.getElementById('gmail')
let okay = document.getElementById('enter')


btn.addEventListener('click',()=>{


   
    if(names.value !=="" && gmail.value !== ""){

    newlist1=document.createElement('li')
    newlist2=document.createElement('li')

   newlist1.innerHTML = names.value
   newlist2.innerHTML = gmail.value
   okay.append(newlist1)
   okay.append(newlist2)


   names.value=""
   gmail.value=""
    }
})


// let btn = document.getElementById('btn')

// btn.addEventListener('click', () => {

//   let nameValue = document.getElementById('name').value
//   let gmailValue = document.getElementById('gmail').value

//   if (nameValue !== "" && gmailValue !== "") {

//     let newlist1 = document.createElement('li')
//     let newlist2 = document.createElement('li')

//     newlist1.innerHTML = nameValue
//     newlist2.innerHTML = gmailValue

//     enter.append(newlist1)
//     enter.append(newlist2)
//   }

//   document.getElementById('name').value = ""
//   document.getElementById('gmail').value = ""

// })