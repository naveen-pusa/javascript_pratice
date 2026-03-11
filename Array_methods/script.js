// Array methods:

// Meaning:
//Array iteration means looping through each element of an array to perform some action.

//1️⃣ forEach() Method:
//2️⃣ map() Method:
//3️⃣ filter() Method:
//4️⃣ find() Method:
//5️⃣ findIndex() Method:
//6️⃣ some() Method:
//7️⃣ every() Method:
//8️⃣ reduce() Method:
//9️⃣ flatMap() Method:

//1️⃣ forEach() Method:

//forEach() loops through each element of the array and performs an action.

// example 1:
//  let role = [10,20,30,40]

//  role.forEach(function(num){
//     console.log(num);
    
//  })

// Example 2:

// let iteams =[
// {apps:'Flipkart',id:1   ,image:'https://i.pinimg.com/736x/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.jpg',description:'Hi this is flipkart'},
// {apps:'Meesho'  ,id:2   ,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7lC5gUNY4nkp4TakjlxCKh8W0HCD-qUcGJw&s',description:'Hi this is Meesho'},
// {apps:'Myntra'  ,id:3   ,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOoY11h2GyOPEShtftZtV9kUg3b6B_FUthIA&s',description:'Hi this is Myntra'},
// {apps:'Ajio'    ,id:4   ,image:'https://i0.wp.com/blog.ajio.com/wp-content/uploads/2025/04/Ajio-logo.png?w=1060&ssl=1',description:'Hi this is Ajio'},
// {apps:'Amazon'  ,id:5   ,image:'https://thumbs.dreamstime.com/b/icons-sample-psost-setting-428651102.jpg',description:'Hi this is Amazon'},
// ]

// let container = document.getElementById('container')

// iteams.forEach(products =>{
//     let p =  document.getElementById('p')
//     container.innerHTML+=`
//     <div id="cards">
//     <h1 >${products.apps}</h1>
//         <img src="${products.image}" alt=""></img>
//             <p id='p'>${products.description}</p>
//             <button onClick="changetext(${products.id})">Click</button>
//     </div>
//       `

// })



//       function changetext(x){
//     let a = iteams.find(i => i.id == x)
//    if (a.id  === iteams.filter(i => i.description)) {
//         return document.getElementById('p').innerHTML = `${a.apps} product Added`;
//    }   

// }

// MAP:
// map() = take every item in an array → change it → return a new array.

// It loops through every element
// Applies some logic
// Returns a new array with the changed values

//EXAMPLE:

let products =[

{tittle:'iphone', img:'https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png',           cost:100000, about:'This is iphone'  },
{tittle:'vivo'  , img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRotV2QgOFVYi3-6KE02eVVesLjOEcT5jtmHw&s',        cost:50000 ,  about:'This is Vivo'    },    
{tittle:'oppo'  , img:'https://5.imimg.com/data5/CY/EC/MY-33491000/oppo-logo-board-500x500.jpg',                             cost:30000 ,  about:'This is Oppo'    },
{tittle:'pixel' , img:'https://www.shutterstock.com/image-vector/pixel-logo-technology-600w-487093207.jpg',                  cost:80000 ,  about:'This is Pixel'   },    
{tittle:'lava'  , img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEEfwCIZ7RQHYHEMLzCV7_usyIEOw4FnsazQ&s',        cost:20000 ,  about:'This is Lava'    },
{tittle:'redmi' , img:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/960px-Xiaomi_logo.svg.png', cost:25000 ,  about:'This is redmi'   },    
]

let container = document.getElementById('container')

// let phones = products.map( mobiles =>{
//     return`
//     <div id="cards">
//     <h2>${mobiles.tittle}</h2>
//     <img src="${mobiles.img}" alt="">
//     <mark>${mobiles.cost}</mark>
//     <b>${mobiles.about}</b>
// </div>
//     `
// })
// container.innerHTML = phones.join('')



//filter() :

//filter() = check each item in an array → keep only the items that match the condition → return a new array.

//So it filters (removes) unwanted elements and keeps only the required ones.

//EXAMPLE:
// take as above one:

let phones = products.filter( mobiles => (mobiles.cost)<50000 )
// .slice(0,2)
.map(mobiles=>{
    return`
    <div id="cards">
    <h2>${mobiles.tittle}</h2>
    <img src="${mobiles.img}" alt="">
    <mark>${mobiles.cost}</mark>
    <b>${mobiles.about}</b>
    </div> 
`


 })
container.innerHTML=phones.join('')


products.filter(mobiles=>(mobiles.cost)<50000) // we use filter for our requriment we have writen the conduction.
.map(mobiles=>console.log(mobiles.tittle))// we use forEach method for to print tittle in the products.

