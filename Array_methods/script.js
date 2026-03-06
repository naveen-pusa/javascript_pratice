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

let iteams =[
{apps:'Flipkart'   ,image:'https://i.pinimg.com/736x/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.jpg',description:'Hi this is flipkart'},
{apps:'Meesho'     ,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7lC5gUNY4nkp4TakjlxCKh8W0HCD-qUcGJw&s',description:'Hi this is Meesho'},
{apps:'Myntra'     ,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOoY11h2GyOPEShtftZtV9kUg3b6B_FUthIA&s',description:'Hi this is Myntra'},
{apps:'Ajio'       ,image:'https://i0.wp.com/blog.ajio.com/wp-content/uploads/2025/04/Ajio-logo.png?w=1060&ssl=1',description:'Hi this is Ajio'},
{apps:'Amazon'     ,image:'https://thumbs.dreamstime.com/b/icons-sample-psost-setting-428651102.jpg',description:'Hi this is Amazon'},
]

let container = document.getElementById('container')

iteams.forEach(products =>{
    container.innerHTML+=`
    <div id="cards">
    <h1 >${products.apps}</h1>
        <img src="${products.image}" alt=""></img>
            <p onclick='changetext(this)'>${products.description}</p>
    </div>
      `
})

// function changetext(x){
// let a = iteams.map(x => x.description)
// a.innerHTML = 'This is only for online shoping'
// }

function changetext(change){
    // 'element' is the paragraph that was clicked
    change.innerText = 'This is only for online shopping'
}
