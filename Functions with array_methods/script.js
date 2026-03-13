let products =[
{title:'iphone', img:'https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png',           cost:100000, about:'This is iphone', id:1 },
{title:'vivo'  , img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRotV2QgOFVYi3-6KE02eVVesLjOEcT5jtmHw&s',        cost:50000 ,  about:'This is Vivo' , id:2  },    
{title:'oppo'  , img:'https://5.imimg.com/data5/CY/EC/MY-33491000/oppo-logo-board-500x500.jpg',                             cost:30000 ,  about:'This is Oppo' , id:3  },
{title:'pixel' , img:'https://www.shutterstock.com/image-vector/pixel-logo-technology-600w-487093207.jpg',                  cost:80000 ,  about:'This is Pixel', id:4  },    
{title:'lava'  , img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEEfwCIZ7RQHYHEMLzCV7_usyIEOw4FnsazQ&s',        cost:20000 ,  about:'This is Lava' , id:5  },
{title:'redmi' , img:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/960px-Xiaomi_logo.svg.png', cost:25000 ,  about:'This is redmi', id:6  },    
]

let container = document.getElementById('container')

let cart = []
 document.getElementById("added").innerHTML=cart.length

 // by using function and map:

function onlineproducts(data){
    let dispay = data.map(item=>{
        return`
        <div id="card">
          <h2>${item.title}</h2>
          <img src="${item.img}" alt="">
          <mark>${item.cost}</mark>
          <p>${item.about}</p>
          <button onclick='add(${item.id})'>Add to cart</button>
          </div>
`
    }) 
    container.innerHTML = dispay.join('')
}
onlineproducts(products)


// using function and filter:

function change(){
   let search = document.getElementById('search').value
   let temp =products.filter(item=>item.title.toLowerCase().includes(search.toLowerCase()))
onlineproducts(temp)
}

// using function and find:
function add(emty){
    let temp=products.find(enter=>enter.id==emty)
    cart.push(temp)
    document.getElementById("added").innerHTML=cart.length
    increase()
}

// reduce:
//=>acculameter, value this two parameters are used:
 
function increase(){ // (increase should have to called in the above function)
    let total = cart.reduce((acc,value)=>{
      return acc+value.cost
    },0)
    console.log(total);
    
document.getElementById('result').innerHTML= total
}
  

// we have to call the increase() in the (find() methods because the iteam added to the cart at tha time the cost also increased)

