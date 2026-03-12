    let products =[
{title:'iphone', cost:100000, id:1},
{title:'oppo', cost:30000,    id:3},
{title:'pixel', cost:80000,   id:4},
{title:'lava', cost:20000,    id:5},
{title:'vivo', cost:50000,    id:2},
{title:'redmi', cost:25000,   id:6}
]

let container = document.getElementById('container')

let cart = []

document.getElementById("added").innerHTML = cart.length

// display products

function showProducts(data){

let display = data.map(item=>{
return `
<div>
<h3>${item.title}</h3>
<p>${item.cost}</p>
<button onclick="add(${item.id})">Add to cart</button>
</div>
`
})

container.innerHTML = display.join('')
}

showProducts(products)


// search function

function change(){

let search = document.getElementById("search").value

let temp = products.filter(item =>
item.title.toLowerCase().includes(search.toLowerCase())
)

showProducts(temp)

}


// add to cart

function add(id){

let product = products.find(p => p.id == id)

cart.push(product)

document.getElementById("added").innerHTML = cart.length

displayCart()

}


// display cart

function displayCart(){

let data = cart.map((item,index)=>{
return `
<div>
<h4>${item.title}</h4>
<p>${item.cost}</p>
<button onclick="removeItem(${index})">Remove</button>
</div>
`
})

document.getElementById("cart").innerHTML = data.join('')

totalPrice()

}


// remove item

function removeItem(index){

cart.splice(index,1)

document.getElementById("added").innerHTML = cart.length

displayCart()

}


// total price

function totalPrice(){

let total = 0

cart.forEach(item=>{
total += item.cost
})

document.getElementById("total").innerHTML = total

}